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
<<<<<<< HEAD
var test = require('./data/categoryData.js');
=======
import typeBrocante from './ui/typeBrocante.js'
>>>>>>> c77ee3d9777e6bcc4adc1c310ce5008dfdfeb58b

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
<<<<<<< HEAD
          <Scene key="categories" component={categories} title="Catégories" typeList="checkbox" donnees={test.category}/>
=======
          <Scene key="categories" component={categories} title="Catégories" typeList="checkbox"/>
          <Scene key="typeBrocante" component={typeBrocante} title="Type de Brocante" typeList="checkbox"/>
>>>>>>> c77ee3d9777e6bcc4adc1c310ce5008dfdfeb58b
        </Scene>
      </Router>
    )
  }
}

module.exports = Navigator_search;
