import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View, Button } from 'react-native';

import { Content, List } from 'native-base';

import myTheme from '../Themes/myTheme';


class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName : "",
      firstName : "",
      email : "",
      phone : "",
      password : ""
    };
  }

  newUser(user) {
      fetch('https://littlebrocapi.herokuapp.com/api/member/', {
      	method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      	body: JSON.stringify({
          lastName : user.lastName,
          firstName : user.firstName,
          email : user.email,
          phone: user.phone,
          password: user.password
        })
      })
    }

  render() {
    return (
    <Content theme={myTheme}>
      <View style={{marginTop:150}}>
        <TextInput style={{marginTop:10}} onChangeText={(lastName) => this.setState({lastName})} value={this.state.lastName} placeholder='Votre nom' />
        <TextInput style={{marginTop:10}} onChangeText={(firstName) => this.setState({firstName})} value={this.state.firstName} placeholder='Votre prénom' />
        <TextInput style={{marginTop:10}} onChangeText={(email) => this.setState({email})} value={this.state.email} placeholder='Votre e-mail' />
        <TextInput style={{marginTop:10}} onChangeText={(phone) => this.setState({phone})} value={this.state.phone} placeholder='Votre numéro de téléphone' />
        <TextInput style={{marginTop:10}} onChangeText={(password) => this.setState({password})} value={this.state.password} placeholder='Votre mot de passe' />
        <Button title="Valider" onPress={() => this.newUser(this.state)} />
      </View>
    </Content>
    );
  }
}

module.exports = login;
