import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class createMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo : "",
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
          'Content-Type': 'application/json'
        },
      	body: JSON.stringify({
          pseudo : user.pseudo,
          lastName : user.lastName,
          firstName : user.firstName,
          email : user.email,
          phone: user.phone,
          password: user.password
        })
      })
      Actions.login();
    }

  render() {
      return (
        <View style={{marginTop:62}}>
          <TextInput onChangeText={(pseudo) => this.setState({pseudo})} value={this.state.pseudo} placeholder='Votre pseudo' style={Styles.inputs}/>
          <TextInput onChangeText={(firstName) => this.setState({firstName})} value={this.state.firstName} placeholder='Votre prénom' style={Styles.inputs}/>
          <TextInput onChangeText={(lastName) => this.setState({lastName})} value={this.state.lastName} placeholder='Votre nom' style={Styles.inputs}/>
          <TextInput onChangeText={(email) => this.setState({email})} value={this.state.email} placeholder='Votre e-mail' style={Styles.inputs}/>
          <TextInput onChangeText={(phone) => this.setState({phone})} value={this.state.phone} placeholder='Votre numéro de téléphone' style={Styles.inputs}/>
          <TextInput onChangeText={(password) => this.setState({password})} value={this.state.password} placeholder='Votre mot de passe' style={Styles.inputs}/>
          <Button title="Valider" onPress={() => this.newUser(this.state)} />
        </View>
      )
  }
}

const Styles = StyleSheet.create({
    inputs: {
      height: 40
    }
});

module.exports = createMember;
