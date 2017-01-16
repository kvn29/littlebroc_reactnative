import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ScrollView,
  ActivityIndicator,
  ListView
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
import GridAnnounce from './gridannounce.js';

var EXCHANGE = require('../data/exchange.js');
import { Actions } from 'react-native-router-flux';

var loadMoreViewAntiFlood = false;
class search extends Component {

  constructor(props) {
    super(props);
    // States Informations :
    // showLoadingMessage: Boolean:  à montrer ou non la roue de chargement au démarrage
    // annonces: Array: Contient les annonces

    this.state = {
      showLoadingMessage: true,
      annonces: [],
      startatindex: 0
    };

    // Ici on défini la fonction qui au clic sur la loupe, montrer la vue moteur de recherche
    EXCHANGE.showSearchEngine = function() {
      Actions.announce();
    };
  }

  componentWillReceiveProps(nextProps) {
    // C'est ici que sont recu les nouvelles données provenant de la vue moteur de recherche
    // Ici on recoit les critères de recherche pour une nouvelle recherche
    console.log('Nouveaux critères de recherche :', nextProps.criteresDeRecherche);
  }

  loadMore(startIndex) {
    console.log('LOAD MORE', startIndex);
    fetch('https://littlebrocapi.herokuapp.com/api/annonce?limit=8&startatindex='+startIndex).then((response) => response.json()).then((json) => {
      this.setState({
        annonces: json,
        showLoadingMessage: false
      });

    });
  }

  componentWillMount() {
    this.loadMore(this.state.startIndex);
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
      loadingMessage = <GridAnnounce annonces={this.state.annonces}/>;
    }
    // Fin définition du message de chargement

    return (
      <View style={{paddingTop: 62}}>
        <ScrollView
          style={{backgroundColor:'white',height:Dimensions.get('window').height-117}}
          bounces={true}
          automaticallyAdjustContentInsets={true}
          onScroll={(e)=>{
              var windowHeight = Dimensions.get('window').height,
                  height = e.nativeEvent.contentSize.height,
                  offset = e.nativeEvent.contentOffset.y;
                  // console.log('offset', offset, 'height', height, 'window height', Dimensions.get('window').height);

              if( windowHeight + offset >= height ){
                  if(!loadMoreViewAntiFlood) {
                    console.log('ici');
                    loadMoreViewAntiFlood = true;
                    this.setState({
                      startatindex: 8
                    }, () => {
                      this.loadMore(this.state.startatindex);
                    });

                  }
                  // return;
              }
          }}
          scrollEventThrottle={16}>
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
  },
  list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: 'red',
        margin: 3,
        width: 30
    }
});

module.exports = search;
