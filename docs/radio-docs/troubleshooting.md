# Troubleshooting and FAQ

## I don't know where to start

The [Quick Start](/radio-docs/) should give you a step by step overview of what is required to set up your stick with the common Home Automation use case.


## The LED on my stick is blinking continously

Each stick is shipped with a test firmware that blinks the on-board LED, on and off continously. This is a "sanity check", to show that the device has survived its journey to you but it does not mean that it is ready for use. You will need to flash the correct firmware before your stick can be used, please refer to the [Quick Start guide](/radio-docs/).


## How can I check if I've flashed the firmware correctly?

To check if the [coordinator firmware](/radio-docs/#step-2-download-the-correct-firmware-for-your-stick) is working correctly on your stick, grab a copy of the [znp-uart-test.py Python script](https://gist.github.com/omerk/0ee0e447a9e36786b4ff71d8f8126a23) and run it, changing the serial port to match yours.

If you get the `ModuleNotFoundError: No module named 'serial'` error message, install pyserial: `sudo pip3 install pyserial`

This script sends a ZNP command and checks that you get the expected response back. A `PASS` result means that you've sucessfully flashed your stick with the coordinator firmware. A `FAIL` result could either mean you have not flashed your stick properly, or you might not have specified the correct serial port (especially if you have multiple devices connected to you computer).


## What USB port/extension cable should I be using?

Your USB RF stick consumes a miniscule amount of power (in the order of a few milliamps) and communication speed is fairly slow too so it can be plugged into any USB2 or USB3 port. However, it is always a good idea to try and separate USB devices as far away from each other to minimise potential issues caused by electrical noise.

If you're having issues due to electrical noise, moving your stick away from the host (and other devices) might be a good idea. This will only work if you are using a good quality, **shielded** USB extension lead. USB extension leads sold as USB 3.0 compatible and a little thicker than standard USB cables are generally of the shielded variety. You can use a USB3 extension lead even if you will plug it into a USB2 port.


## Why does my USB RF stick keep disconnecting and connecting again?

If you're observing the following behaviour in your logs (Issue `dmesg`):

```bash
[529924.506975] usb 1-1.5: ch341-uart converter now attached to ttyUSB0
[536040.852447] ch341-uart ttyUSB0: usb_serial_generic_read_bulk_callback - urb stopped: -32
[536040.852561] ch341-uart ttyUSB0: usb_serial_generic_read_bulk_callback - urb stopped: -32
[536040.941546] usb 1-1.5: USB disconnect, device number 9
[536040.942029] usb 1-1.5: failed to send control message: -19
[536040.946057] ch341-uart ttyUSB0: ch341-uart converter now disconnected from ttyUSB0
[536040.946333] ch341 1-1.5:1.0: device disconnected
[536135.956160] usb 1-1.4: new full-speed USB device number 10 using dwc_otg
[536136.089224] usb 1-1.4: New USB device found, idVendor=1a86, idProduct=7523, bcdDevice= 2.64
[536136.089242] usb 1-1.4: New USB device strings: Mfr=0, Product=2, SerialNumber=0
[536136.089256] usb 1-1.4: Product: USB Serial
[536136.092867] ch341 1-1.4:1.0: ch341-uart converter detected
[536136.096225] usb 1-1.4: ch341-uart converter now attached to ttyUSB0
[536184.791572] ch341-uart ttyUSB0: usb_serial_generic_read_bulk_callback - urb stopped: -32
[536184.791678] ch341-uart ttyUSB0: usb_serial_generic_read_bulk_callback - urb stopped: -32
[536184.813545] usb 1-1.4: USB disconnect, device number 10
[536184.814004] usb 1-1.4: failed to send control message: -19
[536184.818018] ch341-uart ttyUSB0: ch341-uart converter now disconnected from ttyUSB0
[536184.818939] ch341 1-1.4:1.0: device disconnected
```

This suggests that your stick is having trouble with its USB connection, most probably due to power and/or noise (in the [EMC](https://en.wikipedia.org/wiki/Electromagnetic_compatibility) sense) issues.

In all of the few reported cases (with zzh), a Raspberry Pi with an external SSD on a USB adapter was used. SSDs can be quite power hungry (especially "peak" values wise) and USB-to-SSD adapters are known to be noisy, so there are a few things you can try if you do have a similar setup:

  - Make sure you are powering your RPi with a decent power supply, rated for at least 3A: This will solve your potential power related issues. If in doubt, just purchase the official Raspberry Pi power supply (5.1V, 3A).
  - Move your USB RF stick away from the external SSD, using a decent quality shielded USB extension lead: If the problem is electrical noise related, moving your stick away from the offender might solve your issue. This will only work if you are using a good quality, **shielded** USB extension lead. USB extension leads sold as USB 3.0 compatible and a little thicker than standard USB cables are generally of the shielded variety.
  - Use a powered USB hub for your USB RF Stick and position it away from the offender: This is a combination of the two other recommendations.

Please note that this is not a zzh specific issue, a [quick Google search](https://www.google.com/search?q=raspberry+pi+usb+disconnect+ssd) will lead to many forum threads/blog posts discussing the same issue and recommendations.


## Can I use Zigbee and Bluetooth on zzh at the same time?

While the chip used on zzh is a multiprotocol device (CC2652R), the standard ZNP coordinator firmware only makes use of Zigbee. We are not aware of any firmware development that utilises both Zigbee and Bluetooth. If you're interested in developing Bluetooth applications with zzh you might find the [official SDK from TI helpful](https://www.ti.com/tool/SIMPLELINK-CC13X2-26X2-SDK)


## I can get everything but "Device X" working, how do I fix that?

zzh is sold as a general purpose development board and while we can offer support to get you up and running with flashing firmware and communicating with your stick, we can not help you with specific software or device queries.

For specific device instructions, we find the [zigbee2mqtt Supported Devices](https://www.zigbee2mqtt.io/information/supported_devices.html) page quite useful. If instructions there don't fix your problem, we suggest raising an issue on relevant forums/issue trackers for the particular software you are using.


## Is there a guarantee that your stick will improve my network over other coordinators?

The performance and more importantly, the range of your Zigbee network depend very heavily on the environment that you are operating in. External factors such as wireless interference from devices and networks around you and even the materials your walls are made out of will have impact on your network. It is therefore impossible to make any guarantees.

Having said all that, [reviews from existing customers](https://www.tindie.com/products/electrolama/zzh-cc2652r-multiprotocol-rf-stick/#product-reviews) comparing zzh to other or older generation coordinators are quite favourable. We suggest giving them a read if you're not sure whether zzh is right for you or not.


## cc2538-bsl.py Issues

**"ERROR: Timeout waiting for ACK / NACK after ‘Synch (0x55 0x55)’**

This error is almost always seen when the device is not put into BSL mode correctly. Please follow the [instructions here](/radio-docs/bsl/#how-to-enter-bsl-mode) and try again.



## zigbee2mqtt Issues

**Frequently asked questions**

Please refer to the [zigbee2mqtt FAQ](https://www.zigbee2mqtt.io/information/FAQ.html) for the most common issues.

**Error: "Failed to connect to the adapter (Error: SRSP - SYS - ping after 6000ms)"**

This is a general error if there is a communication problems with the adapter used.

A checklist to go through if you get this error message:

  * Make sure you have the correct serial port and `rtscts: false` option set in your `configuration.yaml`
  * Make sure you have the correct firmware burned on your adapter. **Remember, Electrolama boards do not ship with RF firmware** so you will need to burn the appropriate firmware before using it with any application (see [here](/radio-docs/#step-2-download-the-correct-firmware-for-your-stick)).
  * Are you using any virtualisation/container pass-through for the USB device? There have been reports of these potentially causing problems so for debugging purposes try communicating with the adapter directly from the host OS it is connected to (i.e: see if it works without the bypass)
  * Make sure that there aren't any concurrent serial port access issues (i.e: multiple pieces of software all trying to communicate with the same serial port at the same time)
  * Make sure you are using an up-to-date version of Zigbee2mqtt on the host and firmware on the adapter.


**Error: "Coordinator failed to start, probably the panID is already in use, try a different panID or channel"**

This error can appear when migrating an existing installation of zigbee2mqtt to use zzh. Changing the Zigbee channel used or Personal Area Network Identifier (PAN ID) should be sfficient to prevent conflicts with previous configurations. This can be accomplished by editing [`configuration.yaml`](https://www.zigbee2mqtt.io/information/configuration.html), specifying a custom `channel` or `pan_id` under the `advanced` section. Valid channels are in the range 11 to 26, however channels in the Zigbee Light Link (ZLL) range are recommended; channel 11 (default), 15, 20, or 25. PAN ID can by any 16-bit value (default: `0x1a62`). Note that these changes will require re-pairing of existing devices.



## ZHA Issues

(tbd)
