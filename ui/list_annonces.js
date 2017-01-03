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
  ListItem
  } from 'native-base';
import { Actions } from 'react-native-router-flux';

class List_Annonces extends Component {

  constructor(props) {
    super(props);
    this.state = {
      annonces: []
    };
  }

  componentWillMount() {

    fetch('https://littlebrocapi.herokuapp.com/api/annonce').then((response) => response.json()).then((json) => {
      this.setState({
        annonces: json
      });
    });

  }

  render() {

    return (
      <List style={{marginTop: 60}} dataArray={this.state.annonces} renderRow={(item) =>
        <ListItem onPress={Actions.pageTwo}>
          <Text>{item.annonceTitle}</Text>
        </ListItem>
        }>
      </List>
    );
  }
}
// <View><Text onPress={() => {
//   this.props.navigator.push({title: 'Second Scene', index: 1});
// }}>VUE 1</Text></View>
module.exports = List_Annonces;
