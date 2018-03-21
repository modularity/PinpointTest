/**
 * Sample Project utilizing AWS Pinpoint via MobileHub
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PushNotificationIOS
} from 'react-native';
import Amplify from 'aws-amplify';

// aws configuration
import aws_exports from './aws-exports';
import {PushNotification} from 'aws-amplify-react-native';
Amplify.configure(aws_exports);
PushNotification.configure(aws_exports);


var message = "placeholder";
// get notification data
PushNotification.onNotification(data => {
    // object structure will be different from Android and iOS
    console.warn('Notification payload', data);
    message = "Notification received";
});

// get the registration token
PushNotification.onRegister(token => {
    console.warn('in app registration', token);
});

export default class App extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text>{message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
