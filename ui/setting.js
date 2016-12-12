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
  List,
  ListItem,
  Thumbnail
  } from 'native-base';
import { Actions } from 'react-native-router-flux';

const profil = require('../img/Pierre_Girard.jpg');

  class setting extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (//{title: 'Second Scene', index: 1}
        <Content style={{marginTop: 55}} >
        <List>
          <ListItem>
            <Thumbnail square size={80} source={profil}/>
            <Text>PierreG</Text>
          </ListItem>
          <InputGroup borderType='regular' iconRight disabled>
            <Icon name='ios-contact' onPress={Actions.profil}/>
            <Input placeholder='Mon profil' />
          </InputGroup>
          <InputGroup borderType='regular' iconRight disabled>
            <Icon name='ios-list-box' onPress={Actions.myAnnounce}/>
            <Input placeholder='Mes annonces' />
          </InputGroup>
          <InputGroup borderType='regular' iconRight disabled>
            <Icon name='ios-chatbubbles' onPress={Actions.messages}/>
            <Input placeholder='Mes messages' />
          </InputGroup>
          <InputGroup borderType='regular' iconRight disabled>
            <Icon name='ios-print'/>
            <Input placeholder='Imprimer une bannière' />
          </InputGroup>
          </List>
        </Content>
      )
    }
  }

  module.exports = setting;
