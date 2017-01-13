import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ScrollView,
  ActivityIndicator
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
  Badge,
  InputGroup,
  Input,
  Grid,
  Col,
  ListItem,
  Radio
  } from 'native-base';
import Dimensions from 'Dimensions';

import { Actions } from 'react-native-router-flux';

class search extends Component {

  constructor(props) {
    super(props);
    // States Informations :
    // showLoadingMessage: Boolean:  à montrer ou non la roue de chargement au démarrage
    // annonces: Array: Contient les annonces
    this.state = {
      showLoadingMessage: true,
      annonces: []
    };
  }

  componentWillMount() {
    fetch('https://littlebrocapi.herokuapp.com/api/annonce').then((response) => response.json()).then((json) => {
      this.setState({
        annonces: json,
        showLoadingMessage: false
      });
      console.log(json);
    });
  }

  render() {
    // Définition du message de chargement
    let loadingMessage = null;
    if (this.state.showLoadingMessage) {
      loadingMessage = (
        <View style={{marginTop:120}}>
          <ActivityIndicator animating={true} style={{height: 80}} size="large" />
          <Text style={styles.loadingMessageText}>Chargement en cours</Text>
        </View>);
    } else {
      loadingMessage = null;
    }
    // Fin définition du message de chargement

    return (
      <View style={{paddingTop: 62}}>
        <ScrollView style={{backgroundColor:'white',height:Dimensions.get('window').height-117}} automaticallyAdjustContentInsets={true}>
          {loadingMessage}

        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  loadingMessageText: {
    textAlign:'center',
    fontWeight:'bold',
    color: '#666'
  }
});

module.exports = search;
