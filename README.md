# Expo Constants.deviceName Returns Empty String on Android 11+

This repository demonstrates a bug in Expo's `Constants.deviceName` API where it returns an empty string on some Android 11 (API level 30) and higher devices.  The issue appears to be related to permission restrictions or changes in Android's behavior regarding device name retrieval.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app on an Android device running Android 11 or higher.
4. Observe the output, which may show an empty string instead of the device name.

## Solution

A robust solution involves checking for null or empty strings and providing a fallback mechanism, such as displaying a placeholder or using a different method to identify the device if `Constants.deviceName` fails.  The solution file offers an example.

## Workaround

There is currently no direct fix in Expo's API.  Possible workarounds include using a different library or a native module to get device information.