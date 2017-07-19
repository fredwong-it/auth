import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          // add flexDirection 'row' because Button has flex 1 style
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;   // default size large
    }
  }

  render() {
    return (
      <View>
        <Header>Authentication</Header>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
