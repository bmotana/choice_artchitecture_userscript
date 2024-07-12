// ==UserScript==
// @name         Add Spacing to Tweet Containers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds spacing to tweet containers on x.com
// @author       Ben Motana
// @match        https://*.x.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addSpacingToTweetContainers(className, dataTestId) {
        const elements = document.querySelectorAll(`.${className}`);

        elements.forEach(element => {
            if (element.querySelector(`article[data-testid="${dataTestId}"]`)) {
                element.style.marginBottom = '25px'; // Adjust the value for desired spacing
            }
        });
    }

    // Run the function on page load and when new content is loaded
    function runScript() {
        addSpacingToTweetContainers('css-175oi2r', 'tweet');
    }

    // Initial run
    runScript();

    // Run the script again when the page content changes
    const observer = new MutationObserver(runScript);
    observer.observe(document.body, { childList: true, subtree: true });
})();
