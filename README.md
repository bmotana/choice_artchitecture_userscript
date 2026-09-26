# Add Spacing to Tweet Containers Userscript

[![CI](https://github.com/bmotana/choice_artchitecture_userscript/actions/workflows/ci.yml/badge.svg)](https://github.com/bmotana/choice_artchitecture_userscript/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Ruff](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json)](https://github.com/astral-sh/ruff)
[![Tampermonkey](https://img.shields.io/badge/Userscript-Tampermonkey-blue.svg)](https://www.tampermonkey.net/)

A lightweight browser userscript that enhances readability and visual separation of tweets on [x.com](https://x.com) by adding customizable spacing to tweet containers.

---

## Features

- **Improved Readability**: Distinguishes individual tweets cleanly with bottom spacing.
- **Dynamic Content Support**: Uses `MutationObserver` to automatically apply styling as new tweets load on infinite scroll.
- **Lightweight & Fast**: Pure client-side vanilla JavaScript with no external runtime dependencies.
- **Customizable**: Easy to configure margin values to suit your preference.

---

## Installation

1. Install a userscript manager in your browser:
   - [Tampermonkey](https://www.tampermonkey.net/) (recommended for Chrome, Firefox, Edge, Safari, Brave)
   - [Violentmonkey](https://violentmonkey.github.io/)
2. Open your userscript manager dashboard and select **"Create a new script"**.
3. Copy the full contents of [`twitter_ container_spacing.js`](twitter_%20container_spacing.js) and paste it into the script editor.
4. Save the script (<kbd>Ctrl+S</kbd> or <kbd>Cmd+S</kbd>).

---

## Usage

1. Ensure the script is installed and toggled **Active** in your userscript manager.
2. Navigate to [x.com](https://x.com).
3. The script will automatically add spacing to tweet cards as you browse and scroll.

---

## Customization

To adjust the vertical spacing between tweets, edit the following line in [`twitter_ container_spacing.js`](twitter_%20container_spacing.js):

```javascript
element.style.marginBottom = '25px'; // Adjust the pixel value to your liking (e.g., '15px', '25px', '35px')
```

---

## License

This project is licensed under the [MIT License](LICENSE).
