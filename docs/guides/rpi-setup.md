---
title: Optimal Raspberry Pi Setup
---

## Disable WiFi and Bluetooth

To prevent radio interference with Zigbee, the built-in Bluetooth and WiFi radios should be disabled. **A wired Ethernet connection is strongly recommended as you will, without a shadow of doubt, have better Zigbee performance with other radios disabled**.

Edit `/boot/config.txt` as root and append the following to the end of the file:

``` bash
dtoverlay=disable-bt
dtoverlay=disable-wifi
```

Reboot the Pi and verify that both WiFi and Bluetooth interfaces are disabled by observing the outputs of `ifconfig` and `hciconfig`.
