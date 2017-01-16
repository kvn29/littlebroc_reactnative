import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

// import {
//   Container,
//   Header,
//   Title,
//   Content,
//   Footer,
//   FooterTab,
//   Button,
//   Icon,
//   Badge,
//   InputGroup,
//   Input,
//   Grid,
//   Col,
//   ListItem,
//   Radio
//   } from 'native-base';
var EXCHANGE = require('../data/exchange.js');

import { Actions } from 'react-native-router-flux';

class searchengine extends Component {

  constructor(props) {
    super(props);

    EXCHANGE.backSearchEngineToSearch = function () {
      // Renvoi des critères de recherche à la vue précédente (Search (Résultat de recherche))
      Actions.pop({
        refresh: {
          newSearchRequest : {
            titre: "jeu"
          }
        }
      });
    }

  }

  render() {
    return (
      <View style={{paddingTop: 62}}>
        <Text>aa</Text>
          <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
      </View>
    )
  }
}


module.exports = searchengine;
