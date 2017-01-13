import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Badge
  } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';

import setting from './ui/setting.js'
import profil from './ui/profil.js'
import myAnnounce from './ui/listAnnounces.js'
import messages from './ui/messages.js'
import login from './ui/login.js'
import createMember from './ui/createMember.js'

class Navigator_setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigator: this.props.navigator
    }
  }
  render() {
    return (
      <Router titleStyle={{color:'#376092'}}>
        <Scene key="root">
          <Scene key="login" component={login} title="Connexion" titleStyle={{fontWeight: 'bold'}}/>
          <Scene key="createMember" component={createMember} title="Nouvel utilisateur" titleStyle={{fontWeight: 'bold'}}/>
          <Scene key="setting" component={setting} title="Paramètres" initial={true} titleStyle={{fontWeight: 'bold'}}/>
          <Scene key="profil" component={profil} title="Mon profil" titleStyle={{fontWeight: 'bold'}}/>
          <Scene key="myAnnounce" component={myAnnounce} title="Mes annonces" titleStyle={{fontWeight: 'bold'}}/>
          <Scene key="messages" component={messages} title="Mes messages" titleStyle={{fontWeight: 'bold'}}/>
        </Scene>
      </Router>
    )
  }
}

module.exports = Navigator_setting;
