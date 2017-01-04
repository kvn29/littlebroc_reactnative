import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, StyleSheet, Text, View, Navigator, Image, TextInput } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Badge, InputGroup, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';

class login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: null,
      user: { username: 'Utilisateur', password : 'Mot de passe'},
      badLogin: null
    };
  }

  submitCredentials(user){
    if (user.username !== undefined && user.password !== undefined) {
      this.login({
        username: user.username,
        password: user.password
      }, () => {
        this.setState({ badLogin: true });
      });
    }
  }

  login(user, callback) {
    fetch('https://littlebrocapi.herokuapp.com/api/member/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if (response.token && response.user) {
        AsyncStorage.multiSet([
          ['token', response.token],
          ['userId', response.user.id.toString()]
        ]);
      } else {
        if (callback) { callback(); }
      }
    }).done();
  }

  componentWillMount() {
    var token;
    AsyncStorage.multiGet(['token', 'userId']).then((data) => {
      if (data[0][1]) {
        token = data[0][1];
        return this.getUser(data[1][1]);
      }
    }).then((user) => {
      return user.json();
    }).then((user) => {
      this.setState({
        user: user,
        token: token
      })
    })
  }

  getUser(userId) {
    return fetch('https://littlebrocapi.herokuapp.com/api/member/' + userId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  logout(){
    fetch(LOGOUT_REQUEST_URL, {
      method: 'GET'
    }).then(function () {
      AsyncStorage.multiRemove(['userId', 'token']);
    });
  }

  render() {
    if (!this.state.token) {
      return (
        <View style={{marginTop:55}}>
          <TextInput onChangeText={(user.username) => this.setState({user.username})} value={this.state.user.username} />
          <TextInput onChangeText={(user.password) => this.setState({user.password})} value={this.state.user.password} />
          <Button onPress={this.submitCredentials(this.state.user)} title="Valider" />
        </View>
      );
    } else {
      return (
        //insert component that renders when user has valid login here
        <View style={{marginTop:55}}>
          <Text>Connecté</Text>
        </View>
      );
    }
  }
}

module.exports = login;
