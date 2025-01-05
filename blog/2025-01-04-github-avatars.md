---
title: Github Avatars
authors: ratogbm
---

Scrapping Github avatars, because it is easy.

Avatars are located at `https://avatars.githubusercontent.com/u/80184495?v=4` where `/u/` stands for user, and `80184495` is the user's ID.

<!-- truncate -->

:::warning

Scripts and examples in this post involve images controlled by other users. I have no control or responsibility over what is displayed. The images can (and will) include pornography and other offensive content. They will also include trademarked logos. Don't automatically use images you haven't looked at, and never impersonate.

:::

User IDs are given sequentially and quite easy to look up on [`https://api.github.com/user/[username]`](https://api.github.com/users/github).

`?v=4` is the version of something, but not the avatar, because everyone I checked has version 4, and changing the version doesn't change the avatar. (I compared the JPEGs on binary level with `cmp -l`, and no difference.)

Note: it is possible to do [ID -> username lookup](https://stackoverflow.com/questions/11976393/get-github-username-by-id) via `https://api.github.com/user/:id`.

## Automating

I could manually type in numbers, and download avatars, but I decided to script it.

First I tried `curl https://avatars.githubusercontent.com/u/80184495?v=4 > avatar.jpeg`. And curl worked perfectly.

Based on curl, I can write a quick bash script.

```bash
#!/usr/bin/env bash
id=$RANDOM # Random number between 0 - 32767
curl https://avatars.githubusercontent.com/u/$id\?v\=4 > $id.jpeg
echo "Saved $id.jpeg"
```

Read more: [running bash](https://stackoverflow.com/questions/2177932/how-do-i-execute-a-bash-script-in-terminal) | [shebangs](https://en.wikipedia.org/wiki/Shebang_(Unix)) | [`$RANDOM`](https://stackoverflow.com/questions/1194882/how-to-generate-random-number-in-bash) | [escaping characters](https://stackoverflow.com/questions/15783701/which-characters-need-to-be-escaped-when-using-bash)

Problem is, `$RANDOM` only gives a number between 0 - 32767, while there are around 100M github users. Also, I might want to run the script more than once.

```bash
##!/usr/bin/env bash
id=$(shuf -i 1-100000000 -n 1 2>&1)
curl https://avatars.githubusercontent.com/u/$id\?v\=4 > $id.jpeg
echo "Saved $id.jpeg"
```

Read more: [shuf command](https://stackoverflow.com/a/38865224) | [getting outputs in bash](https://stackoverflow.com/questions/12738460/how-to-get-output-of-a-bash-command-in-a-variable)

```bash
##!/usr/bin/env bash
N=5 # Don't put too much, or cleanup will be annoying
for ((i = 0 ; i < $N ; i++)); do
    id=$(shuf -i 1-100000000 -n 1 2>&1)
    curl https://avatars.githubusercontent.com/u/$id\?v\=4 > $id.jpeg
    echo "Saved $id.jpeg"
done
```

The last problem is that most avatars we download are boring [Identicons](https://en.wikipedia.org/wiki/Identicon).

## Going Advanced

At this point, I am swtiching to JavaScript, because I will need stronger tools for analyzing images. Also Github has a [REST API](https://docs.github.com/en/rest) with IP rate limits, so I will have to be careful.

I could detect identicons pretty easily, because thye have exactly 2 colors from a predefined palette, and one color is always white.

But there are easier ways: Identicons are 420x420, while custom profile pictures are usually resized to 460x460 or some other size.

```js
const avatars = document.getElementById('avatars');
const boring_avatars = document.getElementById('boring-avatars');
function rand_avatar() {
  let img = new Image();
  let id = randrange(0,100_000_000);
  img.src = `https://avatars.githubusercontent.com/u/${id}?v=4`
  img.id = id.toString();
  avatars.appendChild(img);
  img.onload = function(){
      if (img.naturalHeight==420) {
        img.remove();
        boring_avatars.appendChild(img);
      }
  };
}
function randrange(a,b) {
  return Math.round(Math.random()*(b-a+1)+a);
}
```

### [Demo](https://ratogbm.github.io/tools/github-avatar-getter.html)

That's it for this adventure. I might mess around with githubs API more in the future.

Take care
