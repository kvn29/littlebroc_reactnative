import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ListView,
  TouchableHighlight
} from 'react-native';

import {
  Content,
  List,
  ListItem,
  CheckBox,
  Radio
  } from 'native-base';

import myTheme from '../Themes/myTheme';

import { Actions } from 'react-native-router-flux';
var test = require('../data/categoryData.js');
var EXCHANGE = require('../data/exchange.js');


class categories extends Component {

  constructor(props){
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(test.category),
      db: test.category
    };
    var _this = this;
    EXCHANGE.backCategorieToAnnonce = function(){
      let getCurrentChecked = "";

      for(var i=0;i<_this.state.db.length;i++) {
        if(_this.state.db[i].checked === true) {
          getCurrentChecked =_this.state.db[i].name;
        }
      }
      //Renvoi le type de catégorie à la vue announce
      Actions.pop({refresh: {selectedCategory: getCurrentChecked}});
    }
  }


  componentDidMount(){
    var data = test.category;

    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,

    });
    this.setState({
      dataSource: ds.cloneWithRows(data),
      db : test.category
    });
  }

  toggleSwitch(name) {

    var clone = this.state.db.slice();

    for(var item in clone) {
      clone[item].checked = false; // <- Empêche la multi-sélection

      if(clone[item].name === name) {
        //console.log("AVANT : ", clone[item].checked);
        clone[item].checked = !clone[item].checked;
        //console.log("APRES : ", clone[item].checked);
      }
    }
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.setState({
      dataSource: ds.cloneWithRows(clone),
      db : clone
    });
  }


  // Ce qu'on veut faire : Lors du clic sur listitem, on coche la case interne.
  // En passant a la checkbox componont le nom de la fonction parent l'enfant peut déclencher une méthode du parent
    renderBook(item) {
      return(
        <TouchableHighlight onPress={() => this.toggleSwitch(item.name)}>
          <View>
            <List>
              <ListItem onPress={() => this.toggleSwitch(item.name)}>
                {/*<CheckBox checked={item.checked} onPress={() => this.toggleSwitch(item.name)} />*/}
                <Radio selected={item.checked} onPress={() => this.toggleSwitch(item.name)}/>
                <Text style={{color:'#376092'}}>{item.name}</Text>
              </ListItem>
            </List>
          </View>
        </TouchableHighlight>
      );
    }
    render() {
      if(this.state.typeList != "checkbox") {
        return (
          <Content theme={myTheme}>
          <View style={{marginTop:60, flex:1}}>
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderBook.bind(this)}
                      style={Styles.listView}
            />
          </View>
        </Content>
        )
      } else {
          return(
          <Content theme={myTheme}>
            <View style={{marginTop:60}}>
              <Text style={{color:'000'}}>Hello</Text>
            </View>
          </Content>
          );
      }
    }
}

// Définition du style
const Styles = StyleSheet.create({
  listView: {
    backgroundColor: '#f7f7f7',
  }
});
module.exports = categories;
