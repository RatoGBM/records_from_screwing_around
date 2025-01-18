---
title: Minisign
---

# [Minisign](https://jedisct1.github.io/minisign/)

A tool for cryptographic signatures.

It has horrible CLI format. no `--help` and nothing automatic

# Generate

`minisign -G`

`minisign` autoprints help message

# Sign

`-S` is sign

`-m` is file (as if that's necessary?)

`minisign -Sm myfile.txt`

`minisign -Sm myfile.txt -t 'This comment will be signed as well'`

Output: `myfile.txt.minisig`

# Verification

`-V` | `-p` is file | `-P` is base64 cli input

`minisign -Vm myfile.txt -P RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3`

`minisign -Vm myfile.txt -p signature.pub`
