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

import { Router, Scene, Actions } from 'react-native-router-flux';
var EXCHANGE = require('./data/exchange.js');
import announce from './ui/announce.js'
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
      <Router titleStyle={{color:'#376092'}}>
        <Scene key="root">
          <Scene key="announce" component={announce} title="Annonce" initial={true}  />
          <Scene key="categories"
            component={categories}
            title="Catégories"
            typeList="checkbox"
            rightTitle="OK"
            onRight={()=>Actions.pop({})}
            onBack={() =>  Actions.pop()}
            backTitle="Back"
            backTitleStyle = {{ color:'red'}}
            leftButtonIconStyle = {{ tintColor:'#376092'}}/>
          <Scene key="typeBrocante"
            component={typeBrocante}
            title="Type de Brocante"
            typeList="checkbox"
            rightTitle="OK"
            onRight={()=> EXCHANGE.backBrocantetypeToAnnonce() }
            onBack={() => Actions.pop()}
            leftButtonIconStyle = {{ tintColor:'#376092'}}/>
        </Scene>
      </Router>
    )
  }
}
module.exports = Navigator_search;
