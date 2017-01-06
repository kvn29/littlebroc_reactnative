import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View, Button } from 'react-native';
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
      <View style={{marginTop:55}}>
        <TextInput onChangeText={(lastName) => this.setState({lastName})} value={this.state.lastName} placeholder='Votre nom' />
        <TextInput onChangeText={(firstName) => this.setState({firstName})} value={this.state.firstName} placeholder='Votre prénom' />
        <TextInput onChangeText={(email) => this.setState({email})} value={this.state.email} placeholder='Votre e-mail' />
        <TextInput onChangeText={(phone) => this.setState({phone})} value={this.state.phone} placeholder='Votre numéro de téléphone' />
        <TextInput onChangeText={(password) => this.setState({password})} value={this.state.password} placeholder='Votre mot de passe' />
        <Button title="Valider" onPress={() => this.newUser(this.state)} />
      </View>
    </Content>
    );
  }
}

module.exports = login;
