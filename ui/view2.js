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

  class View2 extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
            <View><Text>VUE 2</Text></View>
      )
    }
  }

  module.exports = View2;
