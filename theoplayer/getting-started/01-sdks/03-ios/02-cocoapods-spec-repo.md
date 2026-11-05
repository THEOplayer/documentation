---
sidebar_label: CocoaPods spec repo
---

# Using the OptiView Player CocoaPods spec repo

The OptiView Player iOS/tvOS SDK and its integrations are published in our public self-hosted CocoaPods spec repo at https://github.com/THEOplayer/cocoapods-specs.

Version 11.15.0 is the last version that is also published to the CocoaPods public spec repo (trunk).
Newer versions are only available from our spec repo.
This change follows [the planned read-only change to the CocoaPods public spec repo](https://blog.cocoapods.org/CocoaPods-Specs-Repo/).

If you use Swift Package Manager, you do not need to change anything.

## Update your Podfile

Add our spec repo as a `source` at the top of your `Podfile`:

```ruby
source 'https://github.com/THEOplayer/cocoapods-specs'
source 'https://cdn.cocoapods.org/'

target 'MyApp' do
  pod 'THEOplayerSDK-core', '~> 11'
end
```

:::warning
When a `Podfile` declares a `source`, CocoaPods no longer uses the CocoaPods public spec repo by default.
Keep `source 'https://cdn.cocoapods.org/'` in your `Podfile` if your app uses any pod from the public spec repo.
This includes dependencies of our integrations, such as the Google IMA SDK and the Google Cast SDK.
:::

CocoaPods searches the sources in the order they are listed.
List our spec repo first, so that the OptiView Player pods are always resolved from it.

## Install the pods

Download our spec repo and install the pods:

```bash
pod install --repo-update
```

CocoaPods clones the spec repo to `~/.cocoapods/repos` the first time.
Afterwards, run `pod repo update` or `pod install --repo-update` to find newly released versions.

To check that the pods come from our spec repo, open `Podfile.lock`. The `SPEC REPOS` section lists the OptiView Player pods under `https://github.com/THEOplayer/cocoapods-specs`:

```yaml
SPEC REPOS:
  https://github.com/THEOplayer/cocoapods-specs:
    - THEOplayerSDK-core
```

## Available pods

Our spec repo contains the following pods:

- `THEOplayerSDK-core`
- `THEOplayer-Integration-GoogleIMA`
- `THEOplayer-Integration-GoogleCast`
- `THEOplayer-Integration-THEOlive`
- `THEOplayer-Integration-THEOads`
- `THEOplayer-Integration-Millicast`
- `THEOplayer-Connector-Comscore`, `THEOplayer-Connector-Conviva`, `THEOplayer-Connector-Nielsen`, `THEOplayer-Connector-SideloadedSubtitle`, `THEOplayer-Connector-Uplynk`, `THEOplayer-Connector-Utilities` and `THEOplayer-Connector-Yospace`
- `MillicastSDK`

## React Native and Flutter apps

React Native and Flutter apps also use CocoaPods for their iOS dependencies.
Add the same `source` lines at the top of `ios/Podfile`, then run `pod install --repo-update` in the `ios` folder.

## Troubleshooting

If `pod install` fails with `Unable to find a specification for THEOplayerSDK-core`, check the following:

- The `Podfile` contains `source 'https://github.com/THEOplayer/cocoapods-specs'`.
- The local copy of the spec repo is up to date. Run `pod repo update`.

If `pod install` fails to find a pod that is not an OptiView Player pod, add `source 'https://cdn.cocoapods.org/'` to your `Podfile`.
