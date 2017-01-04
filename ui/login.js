import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View } from 'react-native';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = { id : {text: 'Useless Placeholder' }};
  }

  update(text){
    this.setState((id) => {
      return {
        text: text
      };
    });
  }

  render() {
    return (
      <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:55}}
        onChangeText={(text) => this.update({text})}
        value={this.state.id.text}
      />
    <Text>{this.state.id.text}</Text>
    </View>
    );
  }
}

module.exports = login;
