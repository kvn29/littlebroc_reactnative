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
  Col
  } from 'native-base';
import { Actions } from 'react-native-router-flux';

  class typeBrocante extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (//{title: 'Second Scene', index: 1}
      <Content>

      </Content>
      )
    }
  }
  // <View><Text onPress={() => {
  //   this.props.navigator.push({title: 'Second Scene', index: 1});
  // }}>VUE 1</Text></View>
  module.exports = typeBrocante;
