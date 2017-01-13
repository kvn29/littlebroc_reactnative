import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { List, ListItem, Thumbnail, InputGroup, Icon, Input, Grid, Col, Picker, Card, CardItem, Row } from 'native-base';


class GridAnnounce extends Component {
  constructor(props) {
    super(props);
    // J'ai besoin d'avoir des clef de position pour chaque annonce dans mon tableau
    // J'ai besoin d'afficher les annonces avec la clef position paire a gauche et impaire à droite
    /* Exemple :
    0 1
    2 3
    4 5
    */
    let annonces = this.props.annonces.slice();

    for(var i=0;i<annonces.length;i++) {
      annonces[i].position = i;
    }

    this.state = {
      annonces: annonces
    };
  }

  arrangement() {
    // Cette fonction
    this.state.annonces.map((data) => {
      return (
        <View><Text>{data.time}</Text></View>
      )
    })

  }


  render() {
    return (<Grid>
      <Col>
        <Row style={{backgroundColor: 'red'}}>
          <Text>a</Text>
        </Row>
      </Col>
      <Col>
        <Row style={{backgroundColor: 'red'}}>
          <Text>a</Text>
        </Row>
      </Col>
    </Grid>);
  }
}

module.exports = GridAnnounce;
