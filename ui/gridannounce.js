import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { List, ListItem, Thumbnail, InputGroup, Icon, Input, Grid, Col, Picker, Card, CardItem, Row } from 'native-base';
import Dimensions from 'Dimensions';

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


  render() {
    return (<Grid>
      <Col>
        {
          this.state.annoncesPaires.map(function(annonce, i){
          return (<Row key={i} style={{height:Dimensions.get('window').width/2,backgroundColor: 'white', marginBottom:1,marginRight:0.5}}>
          <Image source={{uri: annonce.photoUrl}} style={{ flex:1,justifyContent: 'center', alignItems:'center', width:null, height: null}}>
            <View style={{backgroundColor: 'rgba(0,0,0,.5)', width: Dimensions.get('window').width/2, flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <Text style={Styles.annonceTitle} ellipsizeMode={'tail'} numberOfLines={2}>{annonce.annonceTitle}</Text>
              <Text style={Styles.annoncePrice}>{annonce.annoncePrice} €</Text>

              <View style={Styles.iconeLike}>
                <Icon name='ios-thumbs-up' style={{color:'white', fontSize:20, marginRight: 5}} />
                <Text style={{color:'white', fontSize: 15}}>{annonce.like}</Text>
              </View>

              <View style={Styles.iconeVue}>
                <Text style={{color:'white', fontSize: 15}}>{annonce.views}</Text>
                <Icon name='ios-eye' style={{color:'white', fontSize:25, marginLeft: 5}} />
              </View>

            </View>
          </Image>
              </Row>);
          })}
      </Col>
      <Col>
        {
          this.state.annoncesImpaires.map(function(annonce, i){
            console.log(annonce);
            return (<Row key={i} style={{height:Dimensions.get('window').width/2,backgroundColor: 'white', marginBottom:1,marginLeft:0.5}}>
            <Image source={{uri: annonce.photoUrl}} style={{ flex:1,justifyContent: 'center', alignItems:'center', width:null, height: null}}>
              <View style={{backgroundColor: 'rgba(0,0,0,.5)', width: Dimensions.get('window').width/2, flex: 1, justifyContent: 'center', alignItems:'center'}}>

                <Text style={Styles.annonceTitle} ellipsizeMode={'tail'} numberOfLines={2}>{annonce.annonceTitle}</Text>
                <Text style={Styles.annoncePrice}>{annonce.annoncePrice} €</Text>

                <View style={Styles.iconeLike}>
                  <Icon name='ios-thumbs-up' style={{color:'white', fontSize:20, marginRight: 5}} />
                  <Text style={{color:'white', fontSize: 15}}>{annonce.like}</Text>
                </View>

                <View style={Styles.iconeVue}>
                  <Text style={{color:'white', fontSize: 15}}>{annonce.views}</Text>
                  <Icon name='ios-eye' style={{color:'white', fontSize:25, marginLeft: 5}} />
                </View>

              </View>
            </Image>
                </Row>);
          })}
      </Col>
    </Grid>);
  }
}

const Styles = StyleSheet.create({
  annonceTitle: {
    fontSize: 22,
    padding:25,
    color:'white',
    textAlign: 'center'
  },
  annoncePrice: {
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 30,
    left:0,
    textAlign: 'center',
    width: Dimensions.get('window').width/2
  },
  iconeLike: {
    position: 'absolute',
    bottom: 5,
    left:8,
    flexDirection:'row',
    flexWrap:'wrap',
    opacity: 0.85
  },
  iconeVue: {
    position: 'absolute',
    bottom: 0,
    right:8,
    flexDirection:'row',
    flexWrap:'wrap',
    opacity: 0.85
  }
});

module.exports = GridAnnounce;
