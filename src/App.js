import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  // similar to ngOnInit in Angular
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBFHHjHf2y7xaPdhmrOQe8AChgc12UD_T4',
      authDomain: 'auth-426a6.firebaseapp.com',
      databaseURL: 'https://auth-426a6.firebaseio.com',
      projectId: 'auth-426a6',
      storageBucket: 'auth-426a6.appspot.com',
      messagingSenderId: '140381376292'
    });
  }

  render() {
    return (
      <View>
        <Header>Authentication</Header>
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
