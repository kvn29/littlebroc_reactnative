import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import {
  List,
  ListItem,
  Thumbnail
  } from 'native-base';

  class View2 extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
              <List style={{marginTop:60}}>
                  <ListItem>
                      <Text>Kumar Pratik</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                  </ListItem>
                  <ListItem>
                      <Text>Kumar Sanket</Text>
                      <Text note>Life is one time offer! Use it well</Text>
                  </ListItem>
              </List>
      )
    }
  }

  module.exports = View2;
