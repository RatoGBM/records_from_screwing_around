---
title: Centering with Margin Auto
---

The nice horizontal centering in [bearblog.dev](https://bearblog.dev/) is using 2 lines of html.

Horizontally center divs with `margin: auto`.

Set width to [between 50-75 characters](https://baymard.com/blog/line-length-readability). `width: 50rem`

:::warning

**You have to set a custom width.** `margin: auto` won't work because `<div>` and `<p>` have default width of `100%`.

:::

:::info

`text-align: center` is different, as it doesn't work on divs, and will missalign the paragraphs.

:::

Horiontal centering is for most purposes just "not annoyingly sticking to edges." Margin auto is a quick trick, but if you want even a bit more customization, go for flexboxes.
