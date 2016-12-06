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
  class View3 extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
            <View style={{marginTop: 60}}><Text onPress={Actions.PageFour}>Click Me pour aller vers la vue 4</Text></View>
      )
    }
  }

  module.exports = View3;
