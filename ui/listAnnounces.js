import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Platform, Image } from 'react-native';
import { List, ListItem, Thumbnail, InputGroup, Icon, Input, Grid, Col, Picker, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

import announce from './announce.js'

class listAnnounces extends Component {

    constructor(props) {
      super(props);
      this.state = {
        annonces: [],
        annonce: {}
      };
    }

    componentWillMount() {
      fetch('https://littlebrocapi.herokuapp.com/api/annonce').then((response) => response.json()).then((json) => {
        this.setState({
          annonces: json
        });
      });
    }

    openAnnounce(event) {
        event.preventDefault();
        this.setState({
          annonce: {
            id : document.getElementById('id').value
          }
        });
        navigator.jumpTo(announce);
    }

    render() {

      return (
        <Card contentContainerStyle={styles.list} style={{marginTop: 60}} dataArray={this.state.annonces} renderRow={(item) =>
          <CardItem style={styles.item} onPress={this.openAnnounce}>
            <Image style={{ resizeMode: 'cover', width: null }} source={{uri : item.photoUrl}}>
            <Text id="id" >{item._id}</Text>
            <Text>{item.annonceTitle}</Text>
            <Text>{item.annoncePrice} €</Text>
            </Image>
          </CardItem>
          }>
        </Card>
      );
    }
  }

  var styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: '#CCC',
        margin: 5,
        width: 150,
        height: 150
    }
});
module.exports = listAnnounces;
