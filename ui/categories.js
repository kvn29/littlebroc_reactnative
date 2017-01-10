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


import CheckBoxCustom from '../ui/checkbox.js'

class categories extends Component {

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
        dataSource: ds.cloneWithRows(this.props.donnees),
        db: this.props.donnees
    };
  }
  // componentWillReceiveProps( nextProps ) {
  //   this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows( nextProps.donnees )
  //   });
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dataSource: new ListView.DataSource({
  //       rowHasChanged: (row1, row2) => row1 !== row2
  //     })
  //   };
  // }

  componentDidMount() {

    var ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
        dataSource: ds.cloneWithRows(this.props.donnees),
        db: this.props.donnees
    };
  }


  toggleSwitch(name) {


    // var clone = this.state.dataSource._dataBlob.s1;
    var clone = this.state.db.slice();

    for(var item in clone) {
      // console.log(clone[item]);
      if(clone[item].name === name) {
        console.log("AVANT : ", clone[item].checked);
        clone[item].checked = !clone[item].checked;
        this.renderItem(clone[item]);

        console.log("APRES : ", clone[item].checked);
      }
    }
    var ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(clone),
      db: clone
    });
    this.forceUpdate();

  }
  // Ce qu'on veut faire : Lors du clic sur listitem, on coche la case interne.
  // En passant a la checkbox componont le nom de la fonction parent l'enfant peut déclencher une méthode du parent
  renderItem(item) {
    console.log('RENDER-ROW ICI');
     return (
        <TouchableHighlight onPress={this.toggleSwitch.bind(this, item.name)}>
            <View>
                <View style={Styles.container}>
                    <View style={Styles.rightContainer}>
                        <Text>{item.name} {item.checked.toString()}</Text>
                        <CheckBox checked={item.checked} />
                    </View>
                </View>
                <View style={Styles.separator} />
            </View>
        </TouchableHighlight>
      );
  }

    render() {
      if(this.state.typeList != "checkbox") {
        console.log('aaaa');
        return (
          <View style={{marginTop:60, flex:1}}>
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderItem.bind(this)}
                      style={Styles.listView}
                      removeClippedSubViews={false}
            />
          </View>
        )
      }
      else {
        return (
          <View style={{marginTop:60}}>
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
module.exports = categories;
