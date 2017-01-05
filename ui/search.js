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
      return (
        <Content searchBar rounded style={{marginTop: 62}}>
          <InputGroup searchBar rounded> <Icon name="ios-search" />
            <Input placeholder="Recherche sur My Little Broc" />
          </InputGroup>
          <Button style={{width: 100, alignSelf: 'center', marginTop: 10}} block rounded > Recherche </Button>
          <Grid>
            <Col>
              <View style={{maxWidth: 200, height: 180, backgroundColor: '#d7d7d7', margin: 2}}>
                <Text style={{color: 'white', alignSelf: 'center'}}>Table</Text>
                <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 20 €</Text>
              </View>
              <View style={{maxWidth: 200, height: 180, backgroundColor: '#d7d7d7', margin: 2}}>
                <Text style={{color: 'white', alignSelf: 'center'}}>Dictionnaire</Text>
                <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 10 €</Text>
              </View>
              <View style={{maxWidth: 200, height: 180, backgroundColor: '#d7d7d7', margin: 2}}>
                <Text style={{color: 'white', alignSelf: 'center'}}>CD ACDC</Text>
                <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 40 €</Text>
              </View>
            </Col>
            <Col>
              <View style={{maxWidth: 200, height: 180, backgroundColor: '#d7d7d7', margin: 2}}>
                <Text style={{color: 'white', alignSelf: 'center'}}>Blouson en Cuir</Text>
                <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 60 €</Text>
              </View>
              <View style={{maxWidth: 200, height: 180, backgroundColor: '#d7d7d7', margin: 2}}>
                <Text style={{color: 'white', alignSelf: 'center'}}>Assiettes</Text>
                <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 5 €</Text>
              </View>
              <View style={{maxWidth: 200, height: 180, backgroundColor: '#d7d7d7', margin: 2}}>
                <Text style={{color: 'white', alignSelf: 'center'}}>Benzai</Text>
                <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 43 €</Text>
              </View>
            </Col>
          </Grid>
        </Content>
      )
    }
  }
  const styles = StyleSheet.create({
  buttonToNextVue: {
    marginBottom: 5,
    borderRadius: 0,
    backgroundColor:  '#376092',
    alignSelf: 'stretch',



  },
  red: {
    color: 'red',
  },
});
  // <View><Text onPress={() => {
  //   this.props.navigator.push({title: 'Second Scene', index: 1});
  // }}>VUE 1</Text></View>
  module.exports = search;
