---
title: USB Drives
author: ratogbm
---

# USB Drives

[testdisk](https://git.cgsecurity.org/cgit/testdisk/tree/README.md) scans the data on the drive and extracts it regardless of the file system. Useful for when eg. data recovery from deleted partitions.

## MacOS

`ioreg -p IOUSB` Check if the USB drive is connected.

`diskutil list`

`diskutil info /dev/diskN`

Manual mounting of USB drives (useful if the drive has an ISO flashed to it.)
```bash
sudo mkdir /Volumes/myusbdrive
sudo mount -t msdos /dev/diskNsN /Volumes/myusbdrive #msdos is system specific
ls -la /Volumes/myusbdrive
```
Now the drive should be visible in Finder or under `/Volumes/`
