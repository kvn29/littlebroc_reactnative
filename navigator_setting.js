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
import myAnnounce from './ui/myAnnounce.js'
import messages from './ui/messages.js'

class Navigator_setting extends Component {
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
          <Scene key="setting" component={setting} title="Paramètres" initial={true} />
          <Scene key="profil" component={profil} title="Mon profil" />
          <Scene key="myAnnounce" component={myAnnounce} title="Mes annonces" />
          <Scene key="messages" component={messages} title="Mes messages" />
        </Scene>
      </Router>
    )
  }
}

module.exports = Navigator_setting;
