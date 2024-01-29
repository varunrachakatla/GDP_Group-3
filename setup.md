# React native environment setup for e-commerce application called storegrab
## Developing OS in Windows
## Target OS in Android
#### Required for developing the front end of the e-commerce application called storegrab
#### for developing front end of e-commerce application we need to install the Android SDK and Android studio
##### create a new application
- Install the react native CLI package
- React Native has a built-in command line interface, which we can use to generate a new project. we can access it without installing anything globally using npx, which ships with Node.js. Let's create a new React Native project called "Storegrab".
> npx react-native@latest init storegrab
- Using a specific version or template
> npx react-native@X.XX.X init storegrab --version X.XX.X
- **Preparing the Android Device**
  - **Using a Physical Device**
    - Enable Debugging over USB
    - Plug in your device via USB
    - Check that your device is properly connecting to ADB, the Android Debug Bridge, by running `adb devices`
      > $ adb devices
    - Run your app
      > npm run android
    - Connecting to the development server
      - There are several ways of accomplishing this, depending on whether you have access to a USB cable or a Wi-Fi network.
      - **Using adb reverse**
        - We can use this method if your device is running Android 5.0 (Lollipop) or newer, it has USB debugging enabled, and it is connected via USB to your development machine.
          > $ adb -s <device name> reverse tcp:8081 tcp:8081
        - For finding device name
          > $ adb devices
      - **Connect via Wi-Fi**
        - We can also connect to the development server over Wi-Fi. You'll first need to install the app on the device using a USB cable, but once that has been done, we can debug wirelessly by following these instructions. You'll need the development machine's current IP address before proceeding.
        - Open the command prompt and type `ipconfig` to find the machine's IP address.
        - Make sure the laptop and phone are on the same Wi-Fi network.
        - Open the React Native app on the device.
        - We'll see a red screen with an error. This is OK. The following steps will fix that.
        - Open the in-app Dev Menu.
        - Go to Dev Settings → Debug server host & port for the device.
        - Type in the machine's IP address and the port of the local dev server (e.g., 10.0.1.1:8081).
        - Go back to the Dev Menu and select Reload JS.
        - We can now enable Live reloading from the Dev Menu. Your app will reload whenever your JavaScript code has changed.
  - **Using a Virtual Device**
    -  If you use Android Studio to open ./AwesomeProject/android, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio. Look for an icon:
    - **Android Studio AVD Manager**
       - If you have recently installed Android Studio, you will likely need to create a new AVD. Select "Create Virtual Device", then pick any Phone from the list and click "Next", then select the Tiramisu API Level 33 image.
       - If you don't have HAXM installed, Install the HAXM, then go back to the AVD Manager.
       - Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.

- **Running your React Native application**
  - Step 1: Start Metro
  - Metro is the JavaScript build tool for React Native. To start the Metro development server, run the following from the project folder:

      > npm start

  - Step 2: Start application
  - Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

      > npm run android

- If everything is set up correctly, we can see the new app running in your Android emulator shortly.

## Developing OS in macOS
## Target OS in iOS
#### Required for developing the front end of the e-commerce application called storegrab
- Install the Node, Watchman, the React Native command line interface, Xcode and CocoaPods, where Xcode is used inorder to set up the necessary tooling to build the project called "Storegrab" for iOS, installing Node and Watchman is done using Homebrew and by running the following commands in a Terminal.
> brew install node <br>
> brew install watchman
- Installing an iOS Simulator in Xcode. To install a simulator, open Xcode > Settings... (or Preferences...) and select the Platforms (or Components) tab. Select a simulator with the corresponding version of iOS.
- For Xcode version 14.0 or greater to install a simulator, open Xcode > Settings > Platforms tab, then click "+" icon and select iOS… option.
- React Native has a built-in command line interface, which can be used to generate a new project called "Storegrab".
> npx react-native@latest init storegrab
- Using a specific version or template
> npx react-native@X.XX.X init storegrab --version X.XX.X

## Running the React Native application:
- Step 1: Start Metro:
Start the Metro development server, by running the following from the project folder:
> npm: npm start
> yarn: yarn start
- Step 2: Start the application:
Open a new terminal inside React Native project folder. Run the following:
> npm: npm run ios
> yarn: yarn ios

Then the new app will start running in the iOS Simulator shortly.
This is one way to run our app. It can also run directly from within Xcode.
## Running on a device:
- The above command will automatically run the app on the iOS Simulator by default. To run the app on an actual physical iOS device, these are the steps.
## Modifying app
- Open App.tsx in user’s text editor of choice and we can edit some lines.
- Hit Cmd + R in user’s iOS Simulator to reload the app and see the changes.
