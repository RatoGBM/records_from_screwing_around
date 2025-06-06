# Access Clipboard from Terminal on MacOS using pbcopy and pbpaste

On **MacOS**

`pbcopy` and `pbpaste` are Cmd+C/V for ClipBoard.

<!-- truncate -->

They work by piping stuff into them.

To write to clipboard:
- `echo "Hello" | pbcopy`
- `cat file.txt | pbcopy`

To read from the clipboard:
- `pbpaste`
- `pbpaste > file.txt`

For Linux see [xclip](https://linuxconfig.org/how-to-use-xclip-on-linux) with `xclip -selection clipboard` and `xclip -o -selection clipboard`) (it is ugly, so use bash aliases.)
