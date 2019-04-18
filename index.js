/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
YellowBox.ignoreWarnings(["Require cycle:", "Remote debugger", 'WebView']);

AppRegistry.registerComponent(appName, () => App);
