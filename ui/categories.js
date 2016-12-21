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

import CheckBoxCustom from '../ui/checkbox.js'

class categories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      typeList: props.navigationState.typeList,
      category: test.category
    };
  }

  componentWillMount() {
    this.forceUpdate();
  }
  toggleSwitch(name) {
    console.log(this.state.category);

    var clone = this.state.category.slice(0);
    for(var item in clone) {
      // console.log(clone[item]);
      if(clone[item].name === name) {
        console.log("AVANT : ", clone[item].checked);
        clone[item].checked = !clone[item].checked;
        console.log("APRES : ", clone[item].checked);
      }
    }
    clone.push('te');

    this.setState({
      category: clone
    }, () => {
      this.forceUpdate();
      console.log(this.state.category);
      this.render();
      Actions.pop();
    });
    // this.forceUpdate();
    // this.render();
  }
  // componentWillMount() {
  //   setTimeout(() => {
  //     console.log('aa')
  //     this.forceUpdate();
  //   }, 5000);
  // }


  // <List dataArray={this.state.category} renderRow={(item)=>
  //   <ListItem button onPress={this.toggleSwitch.bind(this, item.name)}>
  //     <CheckBoxCustom active={item.checked} />
  //     <Text>{item.name}</Text>
  //   </ListItem>
  //  }>
  //   </List>
  // Ce qu'on veut faire : Lors du clic sur listitem, on coche la case interne.
  // En passant a la checkbox componont le nom de la fonction parent l'enfant peut déclencher une méthode du parent

    render() {
      if(this.state.typeList == "checkbox") {
        return (
          <View style={{marginTop:60}}>
            <List>
            {

              this.state.category.map((item, i) => {
                if(item.name) {
                  console.log('RENDU');
                return (
                  <ListItem key={i} button onPress={this.toggleSwitch.bind(this, item.name)}>
                    <CheckBoxCustom active={item.checked} />
                    <Text>aa</Text>
                  </ListItem>)
                }
              })
            }
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
          </View>
        );
      }
    }
  }

  module.exports = categories;
