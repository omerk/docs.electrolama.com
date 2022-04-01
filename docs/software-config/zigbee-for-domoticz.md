---
title: Zigbee for Domoticz (Z4D)
---

# Zigbee for Domoticz

[Zigbee for Domoticz](https://github.com/zigbeefordomoticz/Domoticz-Zigbee.git) integration is a python3 plugin for [Domoticz](https://www.domoticz.com/) providing a full support without any middle applications or brokers. It comes with a unique User Interface to monitor and administrate the plugin and will allow you to use any electrolama coordinators like the zzh adapter.

Z4D depends on the [zigpy python library (plus radio libraries for zigpy)](https://github.com/zigpy/) to support different Zigbee adapters/modules, and the radio library for TI CC chips supports the [same Z-Stack coordinator firmware as Zigbee2mqtt](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator).

## Documentation

Z4D comes with a set of documention for [English](https://zigbeefordomoticz.github.io/wiki/en-eng) and [French](https://zigbeefordomoticz.github.io/wiki/fr-fr) speakers/readers

## Configuration

We assume that you have an up and running Domoticz installation. You can use [Domoticz Wiki](https://www.domoticz.com/wiki/Main_Page) for more information. Make sure that you have Domoticz with Python3 ( cross-check [Using Python Plugins](https://www.domoticz.com/wiki/Using_Python_plugins) )

Then you can plug your zzh key, and that should be recognised by the operating system.

Finaly follow the Z4D [Installation Steps](https://zigbeefordomoticz.github.io/wiki/en-eng/#installation)

## Troubleshooting

You can rely on the Domoticz community though the [English forum](https://www.domoticz.com/forum/viewforum.php?f=68) or the [French forum](https://easydomoticz.com/forum/viewforum.php?f=28)
