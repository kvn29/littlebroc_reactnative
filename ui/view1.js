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
  Badge
  } from 'native-base';
import { Actions } from 'react-native-router-flux';

  class View1 extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (//{title: 'Second Scene', index: 1}
      <View style={{width:200, height:200, backgroundColor:'yellow', marginTop:60}}>
  <Text onPress={Actions.pageTwo}>This is PageOne!</Text>
</View>

      )
    }
  }
  // <View><Text onPress={() => {
  //   this.props.navigator.push({title: 'Second Scene', index: 1});
  // }}>VUE 1</Text></View>
  module.exports = View1;
