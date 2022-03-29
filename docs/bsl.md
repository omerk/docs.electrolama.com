---
title: Enter "BSL" Mode
---

# ROM Bootloader (BSL)

One of the nice things about the new chips from TI is the inclusion of a serial bootloader in the ROM. Enabled by default and available unless explicitly modified by the application, you can flash code without needing an external debugger/programmer.

<p class="warn">⚠️ <b>WARNING:</b> Given that the bootloader is configurable, it is crucial that you download the correct firmware for your stick as using the wrong firmware will disable the BSL and you will need an external debugger/programmer to flash your stick again. Instructions for that can be found <a href="/advanced/flash-jtag/">here</a>.</p>


## How to enter BSL mode

To trigger the ROM bootloader, follow these steps:

  - Unplug your stick from the host
  - Press the `BSL` pushbutton and keep holding while plugging the device back into the host:

![zzh BSL pushbutton](/_assets/zzh-bsl-button.jpg)

  - Give it a few seconds for the device to settle and set up and release the BSL button
  - Your stick should now be in ROM bootloader mode

<ins>It is imperative that you press and hold the BSL pushbutton **before** plugging it in to the host and release it **after a few seconds**.</ins>

If you're doing this on a newly-received board that still has the factory test firmware running on it (LED blinking continously): When the device gets into BSL mode, the LED should stop blinking as the MCU would be running the BSL code as opposed to what the firmware tells the processor to do. If the LED is still flashing, this suggests that the stick is not entering the BSL mode.

If you're using zzhp or zzhp-lite with software that supports "auto-BSL" (cc2538-bsl.py only, for now), then you don't need to press the BSL button. See [here](#auto-bsl) for an explanation.


