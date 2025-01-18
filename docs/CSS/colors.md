---
title: CSS colors
---

[Web Color Wheel](https://arantius.github.io/web-color-wheel/)

[CSS Color Names Chart](https://www.quackit.com/css/color/charts/css_color_names_chart.cfm)

List of dark blue colors:
`blue, midnightblue, mediumblue, darkblue, navy`

Python script for jumbling together colors from a list.
```py
colors = "blue, midnightblue, mediumblue, darkblue, navy"
n = 10
colors = colors.split(", ")
",".join([random.choice(colors) for i in range(n)])
# 'mediumblue,blue,midnightblue,mediumblue,midnightblue,darkblue,blue,mediumblue,midnightblue,midnightblue'
```
