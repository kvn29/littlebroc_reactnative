import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Platform, Image } from 'react-native';
import { List, ListItem, Thumbnail, InputGroup, Icon, Input, Grid, Col, Picker, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

class listAnnounces extends Component {

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

    // récuperation de l'identifiant de l'annonce sélectionnée et redirection vers la page annonce
    openAnnounce(item) {
        Actions.announce({annonceId : item._id});
    }

    render() {

      return (
        <Card contentContainerStyle={styles.list} style={{marginTop: 60}} dataArray={this.state.annonces} renderRow={(item) =>
          <CardItem style={styles.item} onPress={() => this.openAnnounce(item)}>
            <Image style={{ resizeMode: 'cover', width: null }} source={{uri : item.photoUrl}}>
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
