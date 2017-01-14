import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { List, ListItem, Thumbnail, InputGroup, Icon, Input, Grid, Col, Picker, Card, CardItem, Row } from 'native-base';

function ColonneGauche(props) {
  console.log("ici", props.annonces);
  props.annonces.map((annonce) => {
      console.log('LA ?');
      return (
        <Row style={{backgroundColor: 'green'}}>
          <Text>aa</Text>
        </Row>
      )
  });
}

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
    let annoncesPaires = [];
    let annoncesImpaires = [];

    for(var i=0;i<annonces.length;i++) {
      if(i % 2 == 0) annoncesPaires.push(annonces[i]);
      else annoncesImpaires.push(annonces[i]);
    }

    this.state = {
      annoncesPaires: annoncesPaires,
      annoncesImpaires: annoncesImpaires
    };
  }

  //
  // ColonneDroite() {
  //   this.state.annonces.map((annonce) => {
  //     if(annonce.position % 2 != 0) {
  //       return (
  //         <Row style={{backgroundColor: 'green'}}>
  //           <Text>{annonce.position}</Text>
  //         </Row>
  //       )
  //     }
  //   });
  // }


  render() {
    return (<Grid>
      <Col>
        {
          this.state.annoncesPaires.map(function(annonce, i){
            console.log(annonce);
          return <Row key={i} style={{height:100,backgroundColor: 'red', marginBottom:2,marginRight:1}}><Text>{annonce.annonceTitle}</Text></Row>;
          })}
      </Col>
      <Col>
        {
          this.state.annoncesImpaires.map(function(annonce, i){
            console.log(annonce);
          return <Row key={i} style={{height:100,backgroundColor: 'green', marginBottom:2,marginLeft:1}}><Text>{annonce.annonceTitle}</Text></Row>;
          })}
      </Col>
    </Grid>);
  }
}

module.exports = GridAnnounce;
