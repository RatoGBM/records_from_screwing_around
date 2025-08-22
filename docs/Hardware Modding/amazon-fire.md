---
title: Amazon Fire Kailbreak
author: ratogbm
---

*created August 22nd 2025*

Jailbreaking Amazon Fire 5th Generation Tablet (Model: SV98LN)

Primary community working on Amazon Fire are the [XDA Forums](https://xdaforums.com/c/amazon-fire.4716/).

The Amazon Fire tablets run Fire OS (version ~5.6) which is based on Android. The Jailbreak replaces it with [Lineage OS](https://www.lineageos.org/) which is an open-source anroid distribution.

Primary Resources:
- [XDA Forums [UNLOCK][ROOT][TWRP][UNBRICK][DOWNGRADE] Fire 7 (ford and austin).](https://xdaforums.com/t/unlock-root-twrp-unbrick-downgrade-fire-7-ford-and-austin.3899860/)
  - Fire generation 5 (ford) and generation 7 (austin) are similar and have a similar jailbreak process.
- Scripts needed to perform the jailbreak: [Amonet Ford v1.4.1 Download from XDA](https://xdaforums.com/attachments/amonet-ford-v1-4-1-zip.4732194/) and [Amonet Austin v1.4.1 Download from XDA]
- [Lineage OS files](https://androidfilehost.com/?w=files&flid=200071) (scroll down for latest version v1.4.1)
- [Magisk](https://github.com/topjohnwu/Magisk) official github repo, download apk from releases
- [Proceedure Description by Goolash](https://drive.google.com/file/d/19qmMujbSLxnl5T3pDuzclKX43yxxzJEg/view) (warning, don't use the Magisk download link they provide, doublecheck all downloads with official forum instructions.)

Tips and Problems from my own Jailbreak:
- Fedora Asahi Linux dualboot also works for this jailbreak if you are on Mac.
- Back-up everything you need from the Amazon Fire.
  - Use [OpenMTP](https://github.com/ganeshrvel/openmtp) to extract data via USB cable
  - If the file manager isn't working because it demands an internet connect, you should be able to give it to it.
  - To get Photos out of Amazon Photos without uploading them, use the Share feature to send it to a file manager. If you need a file manager, try [X-plore](https://amazon.com/dp/B00LLG7AR8) or ES File Explorer (great features, but filled with Chinese Spyware).
- When installing pySerial and running scripts on Fedora Linux, the `sudo` is important. For some reason a different installation of pySerial is used when running with privilages, and they are necessary to do the jailbreak.
  - `sudo` install pySerial with whatever package manager
  - `sudo ./bootrom-step.sh`
- I couldn't figure out how to install the [GApps](https://opengapps.org/)
- Follow instructions exactly, don't try to shortcut anything because you know better.
