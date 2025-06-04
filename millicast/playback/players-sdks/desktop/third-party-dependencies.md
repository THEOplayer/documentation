---
title: Third-Party Dependencies
slug: /playback/players-sdks/desktop/third-party-dependencies
---

All Native SDKs depend on the dynamic Network Device Interface (NDI) library. Although the application does not interface with the NDI library directly, it is a runtime requirement of the Millicast SDK. Windows and Linux builds also depend on the dynamic FFmpeg library. The location of the additional dynamic libraries depends on the platform:

| Platform | Location                    | Requirement                              |
| :------- | :-------------------------- | :--------------------------------------- |
| Linux    | `/usr/libexec/millicastsdk` | Requires the `deb` package installation. |
| Windows  | `bin`                       | Requires unzipping the package.          |
| macOS    | `usr/lib`                   | Requires unzipping the package.          |

## Building the application

When the application uses a native build, and the Millicast SDK is used as-is after unzipping or installing the package, no additional steps are required.

However, when the application is cross-compiled for a different architecture on Linux or the SDK directory layout is changed from the default one after unzipping or installing the SDK, the application build has to ensure that the third-party shared libraries are found when linking the application. This way the linker can verify that all undefined symbols in the Millicast SDK are resolved. To achieve this, you need to add the directory containing the third-party libraries to the linker directory search path or to rpath-link (`-L<path>` or `-Wl,-rpath-link=<path>`).

## Packaging the application

The application that uses the Millicast SDK must not only package or install the Millicast SDK but also its dynamic dependencies in a directory from which they will be loaded by the system. It impacts the location of the libraries:

- On Windows, place the NDI and FFmpeg libraries in the same directory where the Millicast SDK is in the final application installation.
- On macOS, place the NDI library next to MillicastSDK.framework. The Millicast SDK will load it due to relative rpath.
- On Linux, place the NDI and FFmpeg libraries in the `../../libexec/millicastsdk` or `../libexec/millicastsdk` directories relative to the Millicast SDK library location.

On macOS and Linux, the application may be packaged using a completely different directory layout, but then it is the application's responsibility to ensure that the Millicast SDK can load its dependencies. The application itself can be built with a proper rpath or the application might be prepared to be run in the environment where the library path is modified.
