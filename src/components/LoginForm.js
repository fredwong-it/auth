import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { text: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Text>Email:</Text>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
