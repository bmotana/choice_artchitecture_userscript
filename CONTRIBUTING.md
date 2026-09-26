# Contributing to Choice Architecture Userscripts

Thank you for your interest in contributing! We welcome bug reports, feature suggestions, and pull requests to help improve the scripts.

## Code of Conduct

Please review and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) in all project interactions.

## How to Contribute

### Reporting Bugs

Before creating a bug report, please check existing issues to ensure the problem hasn't already been reported.

When submitting a bug report:

- Use the [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md) template.
- Specify your browser, userscript manager (e.g. Tampermonkey), and script version.
- Provide clear steps to reproduce the issue.
- Include console errors or screenshots if applicable.

### Suggesting Enhancements

- Use the [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md) template.
- Describe the problem you are solving and the desired behavior clearly.

### Submitting Pull Requests

1. **Fork the repository** and clone your fork locally.
2. **Create a branch** for your change:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Make your changes** adhering to the project's structure and standards.
5. **Run linters and formatters**:
   ```bash
   npm run lint
   npm run format:check
   ```
   (You can automatically format code using `npm run format:fix` and fix linting issues using `npm run lint:fix`.)
6. **Test the userscript** directly in your browser userscript manager on x.com.
7. **Commit and push** your changes:
   ```bash
   git commit -m "feat: descriptive commit message"
   git push origin feature/your-feature-name
   ```
8. **Open a Pull Request** against the `main` branch. Fill out the PR template thoroughly.
