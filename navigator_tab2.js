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
import { Router, Scene } from 'react-native-router-flux';

import View3 from './ui/view3.js'
import View4 from './ui/view4.js'

class Navigator_Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigator: this.props.navigator
    }
  }
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="PageThree" component={View3} title="PageThree" initial={true} />
          <Scene key="PageFour" component={View4} title="PageFour" />
        </Scene>
      </Router>
    );
  }
}

module.exports = Navigator_Tab2;
