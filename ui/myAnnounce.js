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
  Badge,
  InputGroup,
  Input,
  Grid,
  Col
  } from 'native-base';
import { Actions } from 'react-native-router-flux';

  class myAnnounce extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (//{title: 'Second Scene', index: 1}
      <View style={{marginTop:55}}>
      <Grid>
        <Col>
          <View style={{maxWidth: 200, height: 180, backgroundColor: 'blue', margin: 2}}>
          <Text style={{color: 'white', alignSelf: 'center'}}>Table</Text>
          <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 20 €</Text>
          <Icon style={{alignSelf: 'center'}} name='ios-remove-circle-outline' />
          <Text style={{color: 'white', alignSelf: 'center'}}>Vendu ?</Text>
          <Icon style={{alignSelf: 'center'}} name='ios-checkbox-outline' />
          <Text style={{color: 'white', alignSelf: 'center'}}>Nb vues : 4</Text>
          </View>
          <View style={{maxWidth: 200, height: 180, backgroundColor: 'blue', margin: 2}}>
          <Text style={{color: 'white', alignSelf: 'center'}}>Dictionnaire</Text>
          <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 10 €</Text>
          <Icon style={{alignSelf: 'center'}} name='ios-remove-circle-outline' />
          <Text style={{color: 'white', alignSelf: 'center'}}>Vendu ?</Text>
          <Icon style={{alignSelf: 'center'}} name='ios-checkbox-outline' />
          <Text style={{color: 'white', alignSelf: 'center'}}>Nb vues : 22</Text>
          </View>
          <View style={{maxWidth: 200, height: 180, backgroundColor: 'blue', margin: 2}}>
          <Text style={{color: 'white', alignSelf: 'center'}}>CD ACDC</Text>
          <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 40 €</Text>
          <Icon style={{alignSelf: 'center'}} name='ios-remove-circle-outline' />
          <Text style={{color: 'white', alignSelf: 'center'}}>Vendu ?</Text>
          <Icon style={{alignSelf: 'center'}} name='ios-checkbox-outline' />
          <Text style={{color: 'white', alignSelf: 'center'}}>Nb vues : 14</Text>
          </View>
        </Col>
        <Col>
          <View style={{maxWidth: 200, height: 180, backgroundColor: 'blue', margin: 2}}>
          <Text style={{color: 'white', alignSelf: 'center'}}>Blouson en Cuir</Text>
          <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 60 €</Text>
          <Icon style={{alignSelf: 'center'}} name='ios-remove-circle-outline' />
          <Text style={{color: 'white', alignSelf: 'center'}}>Vendu ?</Text>
          <Icon style={{alignSelf: 'center'}} name='ios-checkbox-outline' />
          <Text style={{color: 'white', alignSelf: 'center'}}>Nb vues : 5</Text>
          </View>
          <View style={{maxWidth: 200, height: 180, backgroundColor: 'blue', margin: 2}}>
          <Text style={{color: 'white', alignSelf: 'center'}}>Assiettes</Text>
          <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 5 €</Text>
          <Icon style={{alignSelf: 'center'}} name='ios-remove-circle-outline' />
          <Text style={{color: 'white', alignSelf: 'center'}}>Vendu ?</Text>
          <Icon style={{alignSelf: 'center'}} name='ios-checkbox-outline' />
          <Text style={{color: 'white', alignSelf: 'center'}}>Nb vues : 7</Text>
          </View>
          <View style={{maxWidth: 200, height: 180, backgroundColor: 'blue', margin: 2}}>
          <Text style={{color: 'white', alignSelf: 'center'}}>Benzai</Text>
          <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 43 €</Text>
          <Icon style={{alignSelf: 'center'}} name='ios-remove-circle-outline' />
          <Text style={{color: 'white', alignSelf: 'center'}}>Vendu ?</Text>
          <Icon style={{alignSelf: 'center'}} name='ios-checkbox-outline' />
          <Text style={{color: 'white', alignSelf: 'center'}}>Nb vues : 56</Text>
          </View>
        </Col>
      </Grid>
    </View>
      )
    }
  }
  // <View><Text onPress={() => {
  //   this.props.navigator.push({title: 'Second Scene', index: 1});
  // }}>VUE 1</Text></View>
  module.exports = myAnnounce;
