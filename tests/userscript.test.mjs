import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptPath = path.resolve(__dirname, '..', 'twitter_ container_spacing.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf8');

describe('Twitter Container Spacing Userscript', () => {
  describe('Metadata Block Validation', () => {
    test('contains valid UserScript header and footer', () => {
      assert.match(scriptContent, /\/\/ ==UserScript==/);
      assert.match(scriptContent, /\/\/ ==\/UserScript==/);
    });

    test('contains required metadata fields', () => {
      assert.match(scriptContent, /\/\/ @name\s+Add Spacing to Tweet Containers/);
      assert.match(scriptContent, /\/\/ @match\s+https:\/\/\*\.x\.com\/\*/);
      assert.match(scriptContent, /\/\/ @version\s+\d+(\.\d+)*/);
      assert.match(scriptContent, /\/\/ @author\s+\w+/);
      assert.match(scriptContent, /\/\/ @grant\s+none/);
    });
  });

  describe('DOM Execution & Spacing Logic', () => {
    test('applies 25px marginBottom only to tweet containers', () => {
      const dom = new JSDOM(
        `<!DOCTYPE html>
        <html>
          <body>
            <!-- Matching Tweet Container -->
            <div id="tweet-container" class="css-175oi2r">
              <article data-testid="tweet"><span>Tweet text</span></article>
            </div>
            <!-- Non-matching container with same class but no tweet -->
            <div id="sidebar-container" class="css-175oi2r">
              <div><span>Sidebar item</span></div>
            </div>
            <!-- Tweet inside non-matching class container -->
            <div id="other-container" class="unrelated-class">
              <article data-testid="tweet"><span>Other tweet</span></article>
            </div>
          </body>
        </html>`,
        { runScripts: 'dangerously' }
      );

      try {
        dom.window.eval(scriptContent);

        const tweetContainer = dom.window.document.getElementById('tweet-container');
        const sidebarContainer = dom.window.document.getElementById('sidebar-container');
        const otherContainer = dom.window.document.getElementById('other-container');

        assert.equal(tweetContainer.style.marginBottom, '25px');
        assert.equal(sidebarContainer.style.marginBottom, '');
        assert.equal(otherContainer.style.marginBottom, '');
      } finally {
        dom.window.close();
      }
    });

    test('dynamically applies spacing to new tweets added via DOM mutation', async () => {
      const dom = new JSDOM(
        `<!DOCTYPE html>
        <html>
          <body>
            <div id="feed"></div>
          </body>
        </html>`,
        { runScripts: 'dangerously' }
      );

      try {
        dom.window.eval(scriptContent);

        const newTweet = dom.window.document.createElement('div');
        newTweet.className = 'css-175oi2r';
        newTweet.id = 'dynamic-tweet';
        newTweet.innerHTML =
          '<article data-testid="tweet"><span>Newly loaded tweet</span></article>';
        dom.window.document.body.appendChild(newTweet);

        await new Promise((resolve) => setTimeout(resolve, 50));

        assert.equal(newTweet.style.marginBottom, '25px');
      } finally {
        dom.window.close();
      }
    });
  });
});
