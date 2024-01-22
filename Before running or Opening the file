Download Node.js in windows
Download Android Studio
- 1. Install Android Studio
-Download and install Android Studio. While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:
- Android SDK
- Android SDK Platform
- Android Virtual Device
- Download Visual Studio
-2. Install the Android SDK
-Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 13 (Tiramisu) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio. To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".
-Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 13 (Tiramisu) entry, then make sure the following items are checked:
-Android SDK Platform 33
-Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
-Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the Android SDK Build-Tools entry, then make sure that 33.0.0 is selected.
- Finally, click "Apply" to download and install the Android SDK and related build tools.
- 3. Configure the ANDROID_HOME environment variable.The React Native tools require some environment variables to be set up in order to build apps with native code.
- Open the Windows Control Panel.
- Click on User Accounts, then click User Accounts again
- Click on Change my environment variables
- Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:
- The SDK is installed, by default, at the following location: %LOCALAPPDATA%\Android\Sdk
- Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.
- Open powershell
- Copy and paste Get-ChildItem -Path Env:\ into powershell
- Verify ANDROID_HOME has been added
- 4. Add platform-tools to Path
- Open the Windows Control Panel.
- Click on User Accounts, then click User Accounts again
- Click on Change my environment variables
- Select the Path variable.
- Click Edit.
- Click New and add the path to platform-tools to the list.
- The default location for this folder is:
- %LOCALAPPDATA%\Android\Sdk\platform-tools
In Command Prompt
- Run administration
- Put In command Prompt the following
- @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
- choco install -y nodejs-lts microsoft-openjdk17
- npm install -g react-native-cli
- 
*Open the VS and android Studio"
Android studio
- run the emulator
In VS
- after getting the code and other file go to terminal
- npm start
- press a
