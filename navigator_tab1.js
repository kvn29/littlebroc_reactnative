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

import View1 from './ui/view1.js'
import View2 from './ui/view2.js'

class Navigator_Tab1 extends Component {
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
          <Scene key="pageOne" component={View1} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={View2} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}

module.exports = Navigator_Tab1;
