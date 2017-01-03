import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Badge, InputGroup, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';

class announce extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (//{title: 'Second Scene', index: 1}
    <View style={{marginTop:55}}>
          <InputGroup borderType='regular' iconRight disabled>
            <Icon name='ios-arrow-forward' onPress={Actions.categories}/>
            <Input placeholder='Catégories' />
          </InputGroup>
          <View style={{alignSelf: 'center', height: 200, width: 200, backgroundColor: 'blue', marginTop:1}}><Icon style={{alignSelf: 'center', marginTop:80}} name='md-camera' /></View>
          <InputGroup borderType='regular' iconRight disabled>
            <Icon name='logo-euro'/>
            <Input placeholder='Prix' />
          </InputGroup>
          <InputGroup borderType='regular' iconRight disabled>
            <Icon name='ios-checkbox-outline'/>
            <Input placeholder='Négociable' />
          </InputGroup>
          <InputGroup borderType='regular'>
            <Input placeholder='Titre' />
          </InputGroup>
          <InputGroup borderType='regular' iconRight disabled>
            <Icon name='ios-calendar'/>
            <Input placeholder='Date' />
          </InputGroup>
          <InputGroup borderType='regular' iconRight disabled>
            <Icon name='ios-locate-outline'/>
            <Input placeholder='Lieu' />
          </InputGroup>
          <InputGroup borderType='regular' iconRight disabled>
            <Icon name='ios-chatbubbles'/>
            <Input placeholder='Auteur' />
          </InputGroup>
        </View>

    )
  }
}
module.exports = announce;
