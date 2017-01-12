import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ScrollView
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
        <View style={{marginTop: 62}}>
          <ScrollView style={{backgroundColor:'blue',height:Dimensions.get('window').height-117}} automaticallyAdjustContentInsets={true}>
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
            <Text>aa</Text>
              <Text>aa</Text>
              <Text>aa</Text>
              <Text>aa</Text>
              <Text>aa</Text>
              <Text>aa</Text>
              <Text>aa</Text>
              <Text>aa</Text>
              <Text>aa</Text>
              <Text>aa</Text>
                <Text>aa</Text>
                <Text>aa</Text>
                <Text>aa</Text>
                <Text>aa</Text>
                <Text>aa</Text>
                <Text>aa</Text>
                <Text>aa</Text>
                <Text>aa</Text>
                <Text>isa</Text>
            </ScrollView>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
  buttonToNextVue: {
    marginBottom: 5,
    borderRadius: 0,
    backgroundColor:  '#376092',
    alignSelf: 'stretch'
  },
  red: {
    color: 'red',
  },
});
  // <View><Text onPress={() => {
  //   this.props.navigator.push({title: 'Second Scene', index: 1});
  // }}>VUE 1</Text></View>
  module.exports = search;
