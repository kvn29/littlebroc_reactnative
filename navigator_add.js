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

import announce from './ui/announce.js'
import categories from './ui/categories.js'
import login from './ui/login.js'
import createMember from './ui/createMember.js'
import typeBrocante from './ui/typeBrocante.js'

class Navigator_add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigator: this.props.navigator
    }
  }
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={login} title="Connexion" initial={true} />
          <Scene key="createMember" component={createMember} title="Nouvel utilisateur" />
          <Scene key="announce" component={announce} title="Annonce" />
          <Scene key="categories" component={categories} title="Catégories" typeList="checkbox"/>
          <Scene key="typeBrocante" component={typeBrocante} title="Type de Brocante" typeList="checkbox"/>
        </Scene>
      </Router>
    )
  }
}

module.exports = Navigator_add;
