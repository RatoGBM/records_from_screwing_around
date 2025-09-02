---
title: Parsing Files
---
# Parsing Files

Plaintext files

```js
document.getElementById("file-input");
fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    processFile(file);
    // fileInput.value = "";
});
function processFile(file) {
    if (file) {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
          your_function(e.target.result);
        };
    }
}
function your_function(text){
  console.log(text);
}
```
