import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
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
import categories from './ui/categories.js'
import typeBrocante from './ui/typeBrocante.js'
import { Router, Scene, Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';

var EXCHANGE = require('./data/exchange.js');

import search from './ui/search.js'
import searchengine from './ui/searchengine.js'

class Navigator_search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigator: this.props.navigator
    }
  }
  render() {

    // Bouton (loupe) Search
    const searchButton = (
      <TouchableHighlight onPress={() => Actions.searchengine() }style={Styles.searchScene_iconRight}>
        <View><Icon name="ios-search" size={40} /></View>
      </TouchableHighlight>);
    // Fin Bouton loupe

    return (
      <Router titleStyle={{color:'#376092'}} >
        <Scene key="root" tabs={false}>
          <Scene key="search"
            component={search}
            titleStyle={{fontWeight: 'bold'}}
            title="Les annonces"
            initial={true}
            renderRightButton={() => searchButton}
          />
          <Scene key="searchengine"
            component={searchengine}
            title="Rechercher"
            titleStyle={{fontWeight: 'bold'}}
            onBack={() => {Actions.pop()}}
            hideBackImage={true}
            backTitle="Annuler"
            rightTitle="OK" onRight={() => EXCHANGE.backSearchEngineToSearch()}
            rightButtonTextStyle = {{color: '#376092'}}
            backButtonTextStyle = {{color: '#376092'}}/>
          <Scene key="categories"
            component={categories}
            title="Catégories"
            typeList="checkbox"
            rightTitle="OK"
            rightButtonTextStyle = {{color: '#376092'}}
            onRight={()=>EXCHANGE.backCategorieToAnnonce() }
            onBack={() => Actions.pop()}
            leftButtonIconStyle = {{ tintColor:'#376092'}}
            titleStyle={{fontWeight: 'bold'}}/>
          <Scene key="typeBrocante"
            component={typeBrocante}
            title="Type de Brocante"
            typeList="checkbox"
            rightTitle="OK"
            rightButtonTextStyle = {{color: '#376092'}}
            onRight={()=> EXCHANGE.backBrocantetypeToAnnonce() }
            onBack={() => Actions.pop()}
            leftButtonIconStyle = {{ tintColor:'#376092'}}
            titleStyle={{fontWeight: 'bold'}}/>
        </Scene>
      </Router>
    )
  }
}

// Définition du style
const Styles = StyleSheet.create({
  searchScene_iconRight: {
    width:40,
    height:40,
    right: -5,
    top: 3,
    position: 'absolute'
  }
});
module.exports = Navigator_search;
