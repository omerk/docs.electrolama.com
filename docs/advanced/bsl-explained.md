---
title: BSL Explained
---

## Backdoor

The BSL "backdoor" is very simple mechanism: If the chip is blank or if the backdoor trigger pin is at the expected signal level (both defined in `CCFG:BL_CONFIG`) when power is applied then the processor enters the BSL mode.

A summary of when the bootloader is invoked can be seen in this flowchart below:

![bsl flowchart](/_assets/bsl-flowchart.png)

Refer to the ["CC2538/CC26x0/CC26x2 Serial Bootloader Interface"](http://www.ti.com/lit/an/swra466c/swra466c.pdf) as reference.

The de facto (see [here](https://github.com/Koenkk/Z-Stack-firmware/issues/210)) backdoor enable level is `LOW` and pins defined are:

  - `DIO_13` for  CC2652R (zzh)
  - `DIO_15` for CC1352P/CC2652P (zzhp/zzhp-lite/zoe2)

All Electrolama boards have a pushbutton on these pins, labelled "BSL".

<ins>If you flash a firmware on your stick that moves this backdoor pin, this will effectively disable BSL and you will need an <a href="/advanced/flash-jtag">external debugger</a> to flash your stick again.</ins>


## Auto-BSL

zzhp and zzhp-lite use a different USB-Serial converter chip than zzh, which exposes extra signals that are used to control the `BSL` and `RESET` pins of the wireless microcontroller. These pins are connected in the following manner:

  - Computer side `DTR` - WMCU `BSL`
  - Computer side `RTS` - WMCU `RESET`

Purpose of this arrangement is to get the device into BSL mode by cleverly toggling these pins in a special sequence so that automatic firmware updates could be done with, say, zigbee2mqtt without the need to unplug the coordinator board used. cc2538-bsl.py already supports this, so you don't actually have to press the BSL button to enter BSL mode on zzhp and zzhp-lite.


## CCFG Configuration

If you're building firmware yourself and would like to keep BSL working on Electrolama boards, make sure that the following settings are applied to the project when you're building it:

  - **Enable Bootloader:** Checked
  - **Enable Bootloader Backdoor:** Checked
  - **Bootloader Backdoor DIO:** 13 (for zzh only) or 15 (for zzhp/zzhp-lite/zoe2)
  - **Trigger level of Bootloader Backdoor:** Active Low

If the settings are different, then you won't be able to use the BSL pushbutton on your board to enter the BSL mode and will need a debugger to flash your boards (details [here](/advanced/flash-jtag/)).