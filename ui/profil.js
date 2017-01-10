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
  List,
  ListItem,
  Thumbnail
  } from 'native-base';

import myTheme from '../Themes/mytheme';

import { Actions } from 'react-native-router-flux';

const profilPhoto = require('../img/Pierre_Girard.jpg');

  class profil extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (//{title: 'Second Scene', index: 1}
      <Content theme={myTheme}>
      <View style={{marginTop:55}}>
        <List>
        <ListItem>
          <Thumbnail square size={100} source={profilPhoto} style={{marginTop:10}}/>
          <Text style={{color:'#376092', fontWeight: 'bold', marginTop:30}}>PierreG</Text>
        </ListItem>
        <InputGroup borderType='regular'>
          <Input inlineLabel label="Nom" placeholder='Girard' />
        </InputGroup>
        <InputGroup borderType='regular'>
          <Input inlineLabel label="Prénom" placeholder='Pierre' />
        </InputGroup>
        <InputGroup borderType='regular'>
          <Input inlineLabel label="Adresse" placeholder='45 rue de château 28456 Chartres' />
        </InputGroup>
        <InputGroup borderType='regular'>
          <Input inlineLabel label="E-mail" placeholder='girardpierre@gmail.com' />
        </InputGroup>
        <InputGroup borderType='regular'>
          <Input inlineLabel label="Date de naissance" placeholder='16/05/1987' />
        </InputGroup>
        <InputGroup borderType='regular'>
          <Input inlineLabel label="Téléphone" placeholder='0998876543' />
        </InputGroup>
        <InputGroup borderType='regular'>
          <Input inlineLabel label="Mot de passe" placeholder='*********' />
        </InputGroup>
        </List>
      </View>
    </Content>

      )
    }
  }
  // <View><Text onPress={() => {
  //   this.props.navigator.push({title: 'Second Scene', index: 1});
  // }}>VUE 1</Text></View>

  module.exports = profil;
