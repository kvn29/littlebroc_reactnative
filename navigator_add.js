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

import announce from './ui/announce.js'
import categories from './ui/categories.js'
import login from './ui/login.js'
import createMember from './ui/createMember.js'
import typeBrocante from './ui/typeBrocante.js'

class Navigator_add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigator: this.props.navigator,
      dataFromTypeBrocante: "Type de Brocante"
    }
  }
  updateSelectedTypeBrocante() {
    console.log('aaa')
    this.setState({
  //    dataFromTypeBrocante:item.checked
  });
    this.forceUpdate();
  }
  render() {
    console.log('RENDU ICI', this.state.dataFromTypeBrocante);
    return (
      <Router titleStyle={{color:'#376092'}}>
        <Scene key="root">
          <Scene key="login" component={login} title="Connexion" />
          <Scene key="createMember" component={createMember} title="Nouvel utilisateur" />
          <Scene key="announce" selectedBrocante={this.state.dataFromTypeBrocante} component={announce} title="Annonce" initial={true} />
          <Scene key="categories" mother={this} component={categories} title="Catégories" typeList="checkbox"
            rightTitle="OK" onRight={()=>Actions.pop({})}
            onBack={() =>  Actions.pop({ refresh: {} })} backTitle="Back"/>
          <Scene key="typeBrocante" mother={this} component={typeBrocante} title="Type de Brocante" typeList="checkbox"
            rightTitle="OK" onRight={()=>Actions.pop({})}
            onBack={() =>  Actions.pop({ refresh: {} })} backTitle="Back"/>
        </Scene>
      </Router>
    )
  }
}

module.exports = Navigator_add;
