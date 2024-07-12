

# Add Spacing to Tweet Containers Userscript

This userscript adds spacing to tweet containers on x.com, enhancing the readability and visual separation of tweets.

## Description

The script automatically adds a specified margin to tweet containers on x.com. It runs initially on page load and re-applies the spacing whenever new content is loaded dynamically. This is achieved using a `MutationObserver`.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) (or any compatible userscript manager) on your browser.
2. Click on the Tampermonkey icon and select "Create a new script".
3. Copy the entire script from [here](#) (link to your userscript file) and paste it into the script editor.
4. Save the script (File -> Save or Ctrl+S).


## Usage

1. Ensure the script is installed and active in Tampermonkey.
2. Navigate to x.com.
3. The script will automatically add the spacing to tweet containers.

## Customization

To adjust the spacing value, modify the `element.style.marginBottom` line in the script:

```javascript
element.style.marginBottom = '25px'; // Adjust the value for desired spacing
```

## Contributing

Feel free to submit issues or pull requests for any improvements or fixes.

## License

This project is licensed under the MIT License.

---
