import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';



class GridAnnounce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annonces: this.props.annonces
    };

  }


  render() {
    return (<View><Text>aaa</Text></View>);
  }
}

module.exports = GridAnnounce;
