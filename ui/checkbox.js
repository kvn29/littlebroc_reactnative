import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import {
  CheckBox
} from 'native-base';


class CheckBoxCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.active
    };

  }
  // componentWillUpdate() {
  //   console.log('valeur active2:', this.props.active);
  //   // this.setState({
  //   //   checked: this.props.active
  //   // });
  // // }

  toggleSwitch() {
    this.setState({
      checked: !this.state.checked
    });
  }

  // componentWillReceiveProps() {
  //   console.log("valeur du parametre active : ", this.props.active);
  //   if(this.props.active) {
  //     this.setState({
  //       checked: this.props.active
  //     });
  //   }
  //   this.forceUpdate();
  // }

  render() {
    return (<CheckBox checked={this.state.checked === true} onPress={this.toggleSwitch.bind(this)}/>)
  }
}

module.exports = CheckBoxCustom;
