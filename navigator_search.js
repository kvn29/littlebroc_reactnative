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

import home from './ui/listAnnounces.js'
import announce from './ui/announce.js'

class Navigator_search extends Component {
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
          <Scene key="home" component={home} title="My Little Broc" initial={true} />
          <Scene key="announce" component={announce} title="Annonces" />
        </Scene>
      </Router>
    )
  }
}

module.exports = Navigator_search;
