---
title: Connector Pinouts
---

## Common debug header

Due to space constraints, the debug header on zzh is (sadly) non-standard:

![zzh debug header pinout](/_assets/zzh_debug_pinout.png)

To convert the zzh 5-pin debug header to a standard 10-pin Cortex Debug Connector, a small adapter PCB is needed (unless you hack and solder an IDC cable to the board directly). Design files for this adapter can be found [in the repo](https://github.com/electrolama/zig-a-zig-ah/tree/master/Debug-Adapter).

With this adapter board plugged in to zzh, you can connect any debugger you wish to get access to the c/JTAG port. This little adapter board kit (some soldering required) is available as an optional add-on to zzh on [Electrolama Shop](https://shop.electrolama.com/collections/accessories-and-spares/products/debug-adapter-kit-for-zzh-or-zzhp).

![The Debug Sandwich](/_assets/zzh-debugger-devpack.jpg)

(The Debug Sandwich: CC-DEVPACK-DEBUG on top of the zzh-debug-adapter on top of zzh.)
