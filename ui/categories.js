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
  Thumbnail,
  InputGroup,
  Icon,
  Input,
  CheckBox,
  Radio,
  Button
  } from 'native-base';

  import { Actions } from 'react-native-router-flux';
  var test = require('../data/categoryData.js');


  class categories extends Component {

    constructor(props) {
      super(props);
      this.state = {
        typeList: props.navigationState.typeList,
        checkbox: false,
        radio: false,
        category: test.category
      };

    }

  toggleSwitch() {
    this.setState({
      checkbox: !this.state.checkbox
    });
  }

  toggleRadio() {
    this.setState({
      radio: !this.state.radio
    })
  }

  componentWillMount() {
    this.forceUpdate();
  }

    render() {
      if(this.state.typeList == "checkbox") {
        return (
          <View style={{marginTop:60}} >
            <List dataArray={this.state.category} renderRow={(item)=>
              <ListItem button onPress={this.toggleSwitch.bind(this)}>
                <CheckBox checked={this.state.checkbox === true} />
                <Text>{item}</Text>
              </ListItem>
                }>
            </List>
        <Button style={{marginTop:5, alignSelf: 'center'}}>Valider</Button>
        </View>
        )
      }
      else {
        return (
          <View style={{marginTop:60}} >
            <List dataArray={this.state.category} renderRow={(item)=>
              <ListItem button on Press={this.toggleRadio.bind(this)}>
                <Radio selected={this.state.radio === true} />
                <Text>{item}</Text>
              </ListItem>
              }>
            </List>
          <Button style={{marginTop:5, alignSelf: 'center'}}>Valider</Button>
          </View>
        );
      }
    }
  }

  module.exports = categories;
