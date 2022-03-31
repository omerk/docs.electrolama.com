---
title: Zigbee for Domoticz (Z2D)
---

# Zigbee for Domoticz

[Zigbee for Domoticz](https://github.com/zigbeefordomoticz/Domoticz-Zigbee.git) integration is a python3 plugin for [Domoticz](https://www.domoticz.com/) providing a full support without any middle applications or brokers. It comes with a uniq User Interface to monitor and administrate the plugin and will allow you to use any electrolama coordinator like the zzh adapter.

Z2D depends on the [zigpy python library (plus radio libraries for zigpy)](https://github.com/zigpy/) to support different Zigbee adapters/modules, and the radio library for TI CC chips supports the [same Z-Stack coordinator firmware as Zigbee2mqtt](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator).

## Documentation

Z2D comes with a set of documention for [English](https://zigbeefordomoticz.github.io/wiki/en-eng) and [French](https://zigbeefordomoticz.github.io/wiki/fr-fr) speakers/readers

In addition you can also rely on the Domoticz community though the [English forum](https://www.domoticz.com/forum/viewforum.php?f=68) or the [French forum](https://easydomoticz.com/forum/viewforum.php?f=28)

## Configuration

We assume that you have an up and running Domoticz installation, but for more information you can go to [Domoticz Wiki](https://www.domoticz.com/wiki/Main_Page) for more information. Make sure that you have Domoticz with Python3 ( cross-check [Using Python Plugins](https://www.domoticz.com/wiki/Using_Python_plugins) )

Then you can plug your zzh key, and that should be recognised by the operating system.

Finaly follow the Z2D:

1. [Plugin Installation](https://zigbeefordomoticz.github.io/wiki/en-eng/Plugin_Installation),
1. [Plugin Settings](https://zigbeefordomoticz.github.io/wiki/en-eng/Plugin_Settings.html),
1. [Plugin Configuration](https://zigbeefordomoticz.github.io/wiki/en-eng/Plugin_Configuration.html)
1. [Final Integration](https://zigbeefordomoticz.github.io/wiki/en-eng/Plugin_Integration.html)
