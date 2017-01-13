import React, { Component } from 'react';
import {
  AsyncStorage,
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
import { Actions } from 'react-native-router-flux';

const profil = require('../img/Pierre_Girard.jpg');

  class messages extends Component {

    constructor(props) {
      super(props);
    }

    componentWillMount() {
      AsyncStorage.getItem('token').then((token) => {
        if(!token){
          Actions.login();
        }
      })
    }

    render() {
      return (//{title: 'Second Scene', index: 1}
      <Content style={{marginTop: 55}} >
      <List>
        <ListItem>
          <Thumbnail square size={80} iconRight source={profil}/>
          <Icon name='ios-chatbubbles' onPress={Actions.messages}/>
          <Text>PierreG</Text>
          <Text note>Bonjour, ou serait vous placé ?</Text>
        </ListItem>
        <ListItem>
        <Thumbnail square size={80} iconRight source={profil}/>
        <Icon name='ios-chatbubbles' onPress={Actions.messages}/>
          <Text>PierreG</Text>
          <Text note>Bonjour, il fait beau chez vous ?</Text>
        </ListItem>
        <ListItem>
        <Thumbnail square size={80} iconRight source={profil}/>
        <Icon name='ios-chatbubbles' onPress={Actions.messages}/>
          <Text>PierreG</Text>
          <Text note>Bonjour, je voudrais négocier ?</Text>
        </ListItem>
        </List>
      </Content>
      )
    }
  }
  // <View><Text onPress={() => {
  //   this.props.navigator.push({title: 'Second Scene', index: 1});
  // }}>VUE 1</Text></View>
  module.exports = messages;
