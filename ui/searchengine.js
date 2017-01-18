import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import {
  InputGroup,
  Icon,
  Input
  } from 'native-base';
var EXCHANGE = require('../data/exchange.js');

import { Actions } from 'react-native-router-flux';

class searchengine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      brocante: "",
      categorie: ""
    };

    EXCHANGE.backSearchEngineToSearch = () => {
      // Renvoi des critères de recherche à la vue précédente (Search (Résultat de recherche))
      Actions.pop({
        refresh: {
          newSearchRequest : {
            titre: this.state.titre,
            brocante: this.state.brocante,
            categorie: this.state.categorie
          }
        }
      });
    }

  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      brocante: nextProps.selectedBrocante,
      categorie: nextProps.selectedCategory
    })
  }

  render() {
    return (
      <View style={{paddingTop: 62}}>
        <InputGroup>
          <Input placeholder='Titre' onChangeText={(titre) => this.setState({titre})} value={this.state.titre}/>
        </InputGroup>
        <InputGroup iconRight disabled>
          <Icon name='ios-arrow-forward' onPress={Actions.categories}/>
          <Input placeholder='Catégories' value={this.state.categorie}/>
        </InputGroup>
        <InputGroup iconRight disabled>
          <Icon name='ios-arrow-forward' onPress={Actions.typeBrocante}/>
          <Input placeholder='Type de brocante' value={this.state.brocante} />
        </InputGroup>
      </View>
    )
  }
}


module.exports = searchengine;
