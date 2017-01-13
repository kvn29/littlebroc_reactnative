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
import Dimensions from 'Dimensions';

import listAnnounces from './ui/listAnnounces.js'
import announce from './ui/announce.js'
import search from './ui/search.js'
import categories from './ui/categories.js'
import typeBrocante from './ui/typeBrocante.js'

class Navigator_search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigator: this.props.navigator
    }
  }
  render() {
    return (
      <Router titleStyle={{color:'#376092'}} >
        <Scene key="root" tabs={false}>
          <Scene key="announce" component={announce} title="Annonces" />
          <Scene key="search"
            component={search}
            title="Resultat de recherche"
            initial={true}
          />
          <Scene key="categories" component={categories} title="Liste de categorie"/>
          <Scene key="typeBrocante" component={typeBrocante} title ="Types de brocante"/>
        </Scene>
      </Router>
    )
  }
}
module.exports = Navigator_search;
