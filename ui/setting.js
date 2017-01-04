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

import myTheme from '../Themes/mytheme';

import { Actions } from 'react-native-router-flux';

const profil = require('../img/Pierre_Girard.jpg');

  class setting extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (//{title: 'Second Scene', index: 1}
        <Content style={styles.margin}>
          <InputGroup>
             <Icon name="ios-search" />
             <Input placeholder="Search" />
             <Icon name="ios-people" />
           </InputGroup>
           <View style={styles.center}>
           <Button style={styles.centerBtn} onPress={Actions.profil}>
          <Icon name='ios-contact'/>
            <Text style={styles.txtParams}>Mon profil</Text>
           </Button>
           <Button style={styles.centerBtn} onPress={Actions.myAnnounce}>
             <Icon name="ios-photos"/>
             <Text>Mes annonces</Text>
           </Button>
           <Button style={styles.centerBtn} onPress={Actions.messages}>
             <Icon name="ios-mail"/>
             <Text>Mes messages</Text>
           </Button>
           <Button style={styles.centerBtn} >
             <Icon name="ios-print"/>
             <Text>Votre bannière</Text>
           </Button>
           </View>
        </Content>

        )
      }
    }
    const styles = StyleSheet.create({
          margin: {
          marginTop: 20
      },
      center: {
          alignSelf: 'center'
      },
      centerBtn: {
          alignSelf: 'center',
          marginTop: 20,
          width: 200,
          backgroundColor: '#00ffcc'
  },
    });
    module.exports = setting;
