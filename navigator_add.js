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
import newAnnounce from './ui/newAnnounce.js'
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
      <Router titleStyle={{color:'#376092'}}>
        <Scene key="root">
          <Scene key="newAnnounce" component={newAnnounce} title="Créer une Annonce" initial={true} titleStyle={{fontWeight: 'bold'}} />
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
        <Scene key="login" component={login} title="Connexion" titleStyle={{fontWeight: 'bold'}}/>
        <Scene key="createMember" component={createMember} title="Créer un compte" titleStyle={{fontWeight: 'bold'}}/>
      </Router>
    )
  }
}

module.exports = Navigator_add;
