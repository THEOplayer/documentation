# Deploying a test app on a physical Tizen device

Both the physical Tizen device as the development computer must be on the same network.

## Set-up[​](#set-up "Direct link to Set-up")

### Tizen device[​](#tizen-device "Direct link to Tizen device")

* Go to the home menu (home button) and navigate to apps. Launch it.

* Use the 123-key (or numbers) to type 12345. A menu will prompt.

* Enable Developer mode.

  <!-- -->

  * Type in the local IP-address of the laptop you want to deploy a build from. They must be on the same network.
  * Reboot Tizen device by long-pressing (about 2 seconds) the power button on the remote.

### Set-up on development device[​](#set-up-on-development-device "Direct link to Set-up on development device")

* Go to Tizen Studio. Open Tools -> Device Manager.

* Open Remote Device Manager (the icon with a pc and a smart tv)

  <!-- -->

  * Add Tizen device via its IP-address, connect and confirm.
  * The Tizen IP-address can be found under Settings -> General -> Network -> Network Status -> IP Settings.
  * Enable connection with remote device.

## Launching on a physical Tizen device[​](#launching-on-a-physical-tizen-device "Direct link to Launching on a physical Tizen device")

* Ensure the connection is established. You can check this under Tools → Devices.
* In Tizen Studio, click right on the project (under Project Explorer). Pick either "Run as" or "Debug as".
