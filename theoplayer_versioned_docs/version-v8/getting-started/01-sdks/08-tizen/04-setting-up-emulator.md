# Deploying a test app on a Tizen emulator

We strongly recommend using a physical Tizen device. If this is not possible, using an emulator can be a back-up.

## Set up

- If you haven't done so, make sure to install the Tizen TV Emulator:
  - In Tizen Studio: Tools -> Package Manager -> Extension SDK -> TV Extensions 5.5
- Create the emulator by pressing the "Create" button and following the steps.

## Launching

- In Tizen Studio, click right on the project (under Project Explorer). Pick either:
  - Run As -> Tizen Web Simulation Application
  - Debug As -> Tizen Application

## Known limitations of emulators:

- AVPlay is unavailable.
- DRM is unavable due to no Content Decryption Module (CDM)
- manifest.json permissions are ignored for emulators. Make sure to test on a physical device, as they are more strict.
