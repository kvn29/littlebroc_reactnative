
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
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dataSource: new ListView.DataSource({
  //       rowHasChanged: (row1, row2) => row1 !== row2
  //     })
  //   };
  // }

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

  toggleSwitch(name) {


    // var clone = this.state.dataSource._dataBlob.s1;
    var clone = this.state.db.slice();

    for(var item in clone) {
      // console.log(clone[item]);
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
            <TouchableHighlight onPress={() => this.toggleSwitch(item.name)}>
                <View>
                    <View style={Styles.container}>
                        <View style={Styles.rightContainer}>
                            <Text>{item.name}</Text>
                            <CheckBox checked={item.checked} onPress={() => this.toggleSwitch(item.name)} />
                        </View>
                    </View>
                    <View style={Styles.separator} />
                </View>
            </TouchableHighlight>
       );
     }

    render() {
      if(this.state.typeList != "checkbox") {
        return (
          <View style={{marginTop:60, flex:1}}>
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderBook.bind(this)}
                      style={Styles.listView}
            />
          </View>
        )
      }
      else {
        return (
          <View style={{marginTop:60}} >
            <Text>HELLO</Text>
          </View>
        );
      }
    }
}

// Définition du style
const Styles = StyleSheet.create({
  listView: {
    backgroundColor: '#F5FCFF',
    height:200,
    width:200
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 10
  },
  rightContainer: {
      flex: 1
  }
});
module.exports = typeBrocante;
