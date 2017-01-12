import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Icon, InputGroup, Input, List } from 'native-base';
import { Actions } from 'react-native-router-flux';
import myTheme from '../Themes/myTheme';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      password: null,
      token: null,
      badLogin: null
    };
  }

  // si le formulaire de connexion est renseigné alors la fonction login est executée
  submitCredentials(user){
    if (user.user !== undefined && user.password !== undefined) {
      this.login({
        username: user.user,
        password: user.password
      }, () => {
        this.setState({ badLogin: true });
      });
    }
  }

  login(user, callback) {
    fetch('https://littlebrocapi.herokuapp.com/api/member/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if (response.token && response.userId) {
        AsyncStorage.multiSet([
          ['token', response.token],
          ['userId', response.userId.toString()]
        ]);
        Actions.pop();
      } else {
        if (callback) { callback(); }
      }
    }).done();
  }

  render() {
    return (
      <Content theme={myTheme}>
      <View style={{marginTop:55}}>
        <TextInput onChangeText={(user) => this.setState({user})} value={this.state.email} placeholder='Votre email' />
        <TextInput onChangeText={(password) => this.setState({password})} value={this.state.password} placeholder='Votre mot de passe' />
        <Button title="Valider" onPress={() => this.submitCredentials(this.state)} />
        <InputGroup borderType='regular' iconRight disabled>
          <Icon name='ios-arrow-forward' onPress={Actions.createMember}/>
          <Input placeholder='Créer un compte' />
        </InputGroup>
      </View>
      </Content>
    );
  }
}

module.exports = login;
