
import React, { Component } from 'react';
import {
  AsyncStorage,
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
  Thumbnail,
  InputGroup,
  Icon,
  Input,
  CheckBox,
  Radio,
  Button
  } from 'native-base';

import myTheme from '../Themes/myTheme';

import { Actions } from 'react-native-router-flux';
var test = require('../data/brocante.js');
var EXCHANGE = require('../data/exchange.js');

import CheckBoxCustom from '../ui/checkbox.js'

class typeBrocante extends Component {

  constructor(props){
    super(props);

    var ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
        dataSource: ds.cloneWithRows(test.typebrocante),
        db: test.typebrocante
    };
    var _this = this;
    EXCHANGE.backBrocantetypeToAnnonce = function() {
      let getCurrentChecked = "";

      for(var i=0;i<_this.state.db.length;i++) {
        if(_this.state.db[i].checked === true) {
          getCurrentChecked = _this.state.db[i].name;
        }
      }
      // Renvoi le type de brocante à la vue announce
      Actions.pop({refresh: {selectedBrocante: getCurrentChecked}});
    }
  }

  componentDidMount() {
    var data = test.typebrocante;

    var ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.setState({
      dataSource: ds.cloneWithRows(data),
      db : test.typebrocante
    });
  }

  componentWillMount() {
    AsyncStorage.getItem('token').then((token) => {
      if(!token){
        Actions.login();
      }
    })
  }

  toggleSwitch(name) {

    var clone = this.state.db.slice();

    for(var item in clone) {
      clone[item].checked = false; // <- Empeche la multi selection

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
      db: clone
    });

  }
  // Ce qu'on veut faire : Lors du clic sur listitem, on coche la case interne.
  // En passant a la checkbox componont le nom de la fonction parent l'enfant peut déclencher une méthode du parent

  renderBook(item) {
     return (
       <Content theme={myTheme}>
            <TouchableHighlight onPress={() => this.toggleSwitch(item.name)}>
                <View>
                    <View style={Styles.container}>
                        <View style={Styles.rightContainer}>
                            <CheckBox checked={item.checked} onPress={() => this.toggleSwitch(item.name)} />
                            <Text style={{color:'#376092'}}>{item.name}</Text>
                        </View>
                    </View>
                    <View style={Styles.separator} />
                </View>
            </TouchableHighlight>
        </Content>
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
      }
      else {
        return (
          <Content theme={myTheme}>
              <View style={{marginTop:60}} >
                <Text style={{color:'000'}}>HELLO</Text>
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
  },
  separator: {
    height: 1,
    backgroundColor: '#7f7f7f'
  },
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f7f7f7',
      padding: 10
  },
  rightContainer: {
      flex: 1
  }
});
module.exports = typeBrocante;
