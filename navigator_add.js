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
          <Scene key="announce" component={announce} title="Annonce" initial={true} />
          <Scene key="categories" component={categories} title="Catégories" />
        </Scene>
      </Router>
    )
  }
}

module.exports = Navigator_search;
