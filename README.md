# Drawer
To be able to use it you must first install the dependencies in the following order:

npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/drawer
npx expo install react-native-gesture-handler react-native-reanimated

In our App.js it must be imported at the top (Above anything else this must go first), import 'react-native-gesture-handler';

In the babel.config.js file the following plugin must be added:
plugins: ["react-native-reanimated/plugin"],

This avoids the error when compiling, finally we start the project with the following command:
npx expo start -c

The rest of the basic configuration can be reviewed in the project code.
