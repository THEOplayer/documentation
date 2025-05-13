---
title: Building Test Applications
slug: /playback/players-sdks/desktop/building-test-applications
---

The Native SDK offers simple test applications for checking whether the SDK installation is correct. The following instructions explain how to build the applications.

## Mac

Use the following commands in the **SDK** folder to build the application:

```shell
mkdir build && cd build

cmake .. -DMillicastSDK_DIR=/path_to_millicastSDK/lib/cmake

cmake --build .
```

## Windows

Use the following commands in the **example** folder to build the application:

```shell
mkdir build && cd build

cmake .. -DMillicastSDK_DIR=/path_to_millicastSDK/lib/cmake

cmake --build . --config Debug
```

Before running, you might want to add the bin directory to your path as it contains the NDI DLLs, which are required in your path environment variable to start the application. After using the command, open the **debug** directory and execute the application.

## Linux x64

### Installing dependencies

#### Ubuntu GNU libstdc++ library

The application requires the following dependencies: X11, Xtst, Xfixes, Xdamage, Xrandr, Xcomposite,  
avahi-common, and avahi-client. You may install them using the following command:

```shell
sudo apt install -y libx11-dev libxfixes-dev libxdamage-dev libxcomposite-dev libxtst-dev \
  libxrandr-dev libavahi-client3 libavahi-common3
```

#### Ubuntu LLVM libc++ library

The application requires the following dependencies: X11, Xtst, Xfixes, Xdamage, Xrandr, Xcomposite,  
avahi-common, and avahi-client. You may install them using the following command:

```shell
sudo apt install -y libx11-dev libxfixes-dev libxdamage-dev libxcomposite-dev libxtst-dev \
  libxrandr-dev libavahi-client3 libavahi-common3
```

Compile with clang to have _libc++-dev_ and _libc++abi-dev_ installed:

```shell
export CC=/usr/bin/clang
export CXX=/usr/bin/clang++
```

#### Debian11 arm-v8a GNU libstdc++ library

Applications built with the `debian11-armv8a-nox11-nopulse` package have no extra dependencies required for the system. They do require the kernel to have V4L2 and ALSA. When run on the Raspberry Pi 3b+ and higher the SDK provides H264 hardware encoding support for applications.

### Building applications

The test applications are built in the same way on all Linux platforms. Build applications using the following commands in the **SDK** folder:

```shell
mkdir build && cd build
cmake .. -DMillicastSDK_DIR=/path_to/MillicastSDK/lib/cmake
make -j4
```
