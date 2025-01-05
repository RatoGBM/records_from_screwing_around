---
title: Offer Download
author: ratogbm
---

# Offering Downloading

Sometimes you want to let the user download/export some text or image.

Lists of `type` for [Blobs](https://developer.mozilla.org/en-US/docs/Web/API/Blob): [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types) and [iana media types](https://www.iana.org/assignments/media-types/media-types.xhtml)

For any plaintext data formats, use `;charset=utf-8`.

```js
function download(text){
    const blob = new Blob([text], {type: 'image/svg+xml;charset=utf-8'});
    const svgUrl = URL.createObjectURL(blob);
    let downloadlink = document.createElement("a");
    downloadlink.href = svgUrl
    downloadlink.download = seed+".svg"
    document.body.appendChild(downloadlink);
    downloadlink.click();
    document.body.removeChild(downloadlink);
}
```
