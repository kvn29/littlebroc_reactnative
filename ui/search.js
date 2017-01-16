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
      startatindex: 0,
      key: 0, // <- On créé un élément avec valeur à 0, il va servir a actualisé le composant GridAnnounce
      searchEngine: {
        titre: "",
        categorie: "",
        idbroc: ""
      }
    };

    // Ici on défini la fonction qui au clic sur la loupe, montrer la vue moteur de recherche
    EXCHANGE.showSearchEngine = function() {
      Actions.announce();
    };
  }

  componentWillReceiveProps(nextProps) {
    // C'est ici que sont recu les nouvelles données provenant de la vue moteur de recherche
    // Ici on recoit les critères de recherche pour une nouvelle recherche
    let newSearchRequest = nextProps.newSearchRequest;

    this.setState({
      startatindex: 0,
      annonces: [],
      searchEngine: {
        titre: typeof newSearchRequest.titre === 'undefined' ? "" : newSearchRequest.titre,
        categorie: typeof newSearchRequest.categorie === 'undefined' ? "" : newSearchRequest.categorie
      }
    }, () => {
      this.loadMore(0);
    });
    console.log('Nouveaux critères de recherche :', nextProps.newSearchRequest);
  }

  loadMore(startIndex) {
    fetch("https://littlebrocapi.herokuapp.com/api/annonce?limit=8"+
      "&startatindex="+startIndex+
      "&titre="+this.state.searchEngine.titre+
      "&categorie="+this.state.searchEngine.categorie)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      let copyannonces = this.state.annonces.slice();
      copyannonces = copyannonces.concat(json);

      this.setState({
        annonces: copyannonces,
        showLoadingMessage: false,
        key: Math.random() // <- Ici en changeant la valeur de key on force React A reafficher la grid, mais avec les données en plus
      }, () => {
        loadMoreViewAntiFlood = false;
        this.forceUpdate();
      });
    });
  }

  componentWillMount() {
    // Au démarrage de la vue, la valeur passé est 0
    this.loadMore(this.state.startatindex);
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
        loadingMessage = <GridAnnounce annonces={this.state.annonces} key={this.state.key}/>;
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

              if( windowHeight + offset >= height ){
                  if(!loadMoreViewAntiFlood) {
                    loadMoreViewAntiFlood = true;
                    this.setState({
                      showLoadingMessage: false,
                      startatindex: this.state.startatindex+8
                    }, () => {
                      this.loadMore(this.state.startatindex);
                    });
                  }
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
