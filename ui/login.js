import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Icon, Badge, InputGroup, Input, List } from 'native-base';
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
    if (user.username !== undefined && user.password !== undefined) {
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
      console.log(response);
      if (response.token && response.userId) {
        AsyncStorage.multiSet([
          ['token', response.token],
          ['userId', response.userId.toString()]
        ]);
      } else {
        if (callback) { callback(); }
      }
    }).done();
  }

  // cette fonction vérifie si l'utilisateur est déjà connecté, si oui la page de connexion ne s'affiche pas
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
      }),
      Actions.announce();
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

  // logout(){
  //   fetch(LOGOUT_REQUEST_URL, {
  //     method: 'GET'
  //   }).then(function () {
  //     AsyncStorage.multiRemove(['userId', 'token']);
  //   });
  // }

  render() {
    if (!this.state.token) {
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
    } else {
      return (
        <View style={{marginTop:55}}>
          <Text>Connecté</Text>
        </View>
      );
    }
  }
}

module.exports = login;
