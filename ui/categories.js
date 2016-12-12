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
  Button
  } from 'native-base';

  class categories extends Component {

    constructor(props) {
      super(props);
      this.state = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
};
    }
    toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1,
    });
  }

  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2,
    });
  }

  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3,
    });
  }

  toggleSwitch4() {
    this.setState({
      checkbox4: !this.state.checkbox4,
    });
}

    render() {
      return (
        <View style={{marginTop:55}}>
          <List>
            <ListItem button onPress={() => this.toggleSwitch1()}>
              <CheckBox checked={this.state.checkbox1} onPress={() => this.toggleSwitch1()} />
              <Text>Livre</Text>
            </ListItem>
            <ListItem button onPress={() => this.toggleSwitch2()}>
              <CheckBox checked={this.state.checkbox2} onPress={() => this.toggleSwitch2()} />
              <Text>Vaisselle</Text>
            </ListItem>
            <ListItem button onPress={() => this.toggleSwitch3()}>
              <CheckBox checked={this.state.checkbox3} onPress={() => this.toggleSwitch3()} />
              <Text>Vêtements</Text>
            </ListItem>
            <ListItem button onPress={() => this.toggleSwitch4()}>
              <CheckBox checked={this.state.checkbox4} onPress={() => this.toggleSwitch4()} />
              <Text>Meuble</Text>
            </ListItem>
          </List>
      <Button style={{marginTop:5, alignSelf: 'center'}}>Valider</Button>
      </View>
      )
    }
  }

  module.exports = categories;
