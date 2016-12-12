import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Platform
} from 'react-native';

import {
  List,
  ListItem,
  Thumbnail,
  InputGroup,
  Icon,
  Input,
  Grid,
  Col,
  Picker
  } from 'native-base';

  const Item = Picker.Item;

  class favoris extends Component {

    constructor(props) {
      super(props);
      this.state = {
         selectedItem: undefined,
         selected1: 'key0',
         results: {
           items: [],
         },
       };
    }

    onValueChange(value: string) {
      this.setState({
        selected1: value,
      });
    }


    render() {
      return (
        <View style={{marginTop:55}}>
        <Picker
            iosHeader="Filtres"
            mode="dropdown"
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)} // eslint-disable-line
            style={{ marginLeft: (Platform.OS === 'android') ? 0 : -25 }}
          >
            <Item label="Tri par :" value="key0" />
            <Item label="Prix croissant" value="key1" />
            <Item label="Prix décroissant" value="key2" />
            <Item label="Date" value="key3" />
            <Item label="Distance" value="key4" />
        </Picker>
        <Grid>
          <Col>
            <View style={{maxWidth: 200, height: 180, backgroundColor: 'blue', margin: 2}}>
            <Text style={{color: 'white', alignSelf: 'center'}}>Table</Text>
            <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 20 €</Text>
            <Icon style={{alignSelf: 'center'}} name='ios-remove-circle-outline' />
            </View>
            <View style={{maxWidth: 200, height: 180, backgroundColor: 'blue', margin: 2}}>
            <Text style={{color: 'white', alignSelf: 'center'}}>Dictionnaire</Text>
            <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 10 €</Text>
            <Icon style={{alignSelf: 'center'}} name='ios-remove-circle-outline' />
            </View>
            <View style={{maxWidth: 200, height: 180, backgroundColor: 'blue', margin: 2}}>
            <Text style={{color: 'white', alignSelf: 'center'}}>CD ACDC</Text>
            <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 40 €</Text>
            <Icon style={{alignSelf: 'center'}} name='ios-remove-circle-outline' />
            </View>
          </Col>
          <Col>
            <View style={{maxWidth: 200, height: 180, backgroundColor: 'blue', margin: 2}}>
            <Text style={{color: 'white', alignSelf: 'center'}}>Blouson en Cuir</Text>
            <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 60 €</Text>
            <Icon style={{alignSelf: 'center'}} name='ios-remove-circle-outline' />
            </View>
            <View style={{maxWidth: 200, height: 180, backgroundColor: 'blue', margin: 2}}>
            <Text style={{color: 'white', alignSelf: 'center'}}>Assiettes</Text>
            <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 5 €</Text>
            <Icon style={{alignSelf: 'center'}} name='ios-remove-circle-outline' />
            </View>
            <View style={{maxWidth: 200, height: 180, backgroundColor: 'blue', margin: 2}}>
            <Text style={{color: 'white', alignSelf: 'center'}}>Benzai</Text>
            <Text style={{color: 'white', alignSelf: 'center'}}>Prix : 43 €</Text>
            <Icon style={{alignSelf: 'center'}} name='ios-remove-circle-outline' />
            </View>
          </Col>
        </Grid>
      </View>
      )
    }
  }

  module.exports = favoris;
