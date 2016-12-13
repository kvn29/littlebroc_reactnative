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
  Badge,
  InputGroup,
  Input,
  Grid,
  Col,
  ListItem,
  Radio
  } from 'native-base';
import { Actions } from 'react-native-router-flux';

  class search extends Component {

    constructor(props) {
     super(props);
     this.state = {
       radio1: false
     };
   }
   toggleRadio1() {
      this.setState({
        radio1: true
      });
    }


    render() {
      return (//{title: 'Second Scene', index: 1}

      <Content style={{marginTop: 62}}>
<InputGroup searchBar rounded>
 <Icon name="ios-search" />
 <Input placeholder="Entrer un mot-clé"/>
</InputGroup>
<Button style={{width: 120,height:50, alignSelf: 'center', margin: 10}}  block rounded >
 Recherche rapide
</Button>
<Button iconRight onPress={Actions.categories}>
    <Icon name='ios-arrow-forward'/>
    Catégorie
</Button>
<Button iconRight onPress={Actions.typeBrocante}>
       <Icon name='ios-arrow-forward'/>
    Type de brocante
   </Button>
   <InputGroup searchBar rounded>
     <Icon name="ios-search" />
     <Input placeholder="Saisir le CP ou la ville" />
   </InputGroup>
   <Text>Date <Icon name="ios-calendar"/></Text>
   <ListItem button onPress={() => this.toggleRadio1()} >
               <Radio selected={this.state.radio1} onPress={() => this.toggleRadio1()} />
               <Text>Ajouter les critéres à ma Wishlist</Text>
   </ListItem>
   <Button style={{width: 110, alignSelf: 'center', marginTop: 10}}  block rounded >
    Rechercher
   </Button>
</Content>
      )
    }
  }
  // <View><Text onPress={() => {
  //   this.props.navigator.push({title: 'Second Scene', index: 1});
  // }}>VUE 1</Text></View>
  module.exports = search;
