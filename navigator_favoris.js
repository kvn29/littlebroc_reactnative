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

import favoris from './ui/listAnnounces.js'
import announce from './ui/announce.js'
import login from './ui/login.js'
import createMember from './ui/createMember.js'

class Navigator_favoris extends Component {
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
          <Scene key="favoris" component={favoris} title="Favoris" initial={true} titleStyle={{fontWeight: 'bold'}}/>
          <Scene key="announce" component={announce} title="Annonce" titleStyle={{fontWeight: 'bold'}}/>
        </Scene>
      </Router>
    );
  }
}

module.exports = Navigator_favoris;
