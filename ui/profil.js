import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, StyleSheet, Text, Button, View, Navigator } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Icon, Badge, InputGroup, Input, List, ListItem, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import myTheme from '../Themes/myTheme';

class profil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: null,
      memberID: null,
      member: {},
      pseudo : null,
      lastName : null,
      firstName : null,
      email : null,
      phone: null,
      password: null
    };
  }

  componentWillMount() {
    AsyncStorage.multiGet(['token', 'userId']).then((data) => {
      if(!data[0][1]){
        Actions.login();
      } else {
        this.setState({
          token: data[0][1],
          memberID: data[1][1]
        });
        fetch('https://littlebrocapi.herokuapp.com/api/member/' + this.state.memberID).then((response) => response.json()).then((json) => {
          this.setState({
            member: json
          });
        });
      }
    });
  }

  updateMember(user){
    fetch('https://littlebrocapi.herokuapp.com/api/member/' + this.state.memberID, {
    	method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    	body: JSON.stringify({
        lastName : user.lastName
      })
    })
  }

  render() {
    return (//{title: 'Second Scene', index: 1}
    <Content theme={myTheme}>
    <View style={{marginTop:55}}>
      <List>
      <ListItem>
        <Thumbnail square size={100} source={{uri : this.state.member.img}} style={{marginTop:10}}/>
        <Input style={{color:'#376092', fontWeight: 'bold', marginTop:30}} placeholder={this.state.member.pseudo} />
      </ListItem>
      <InputGroup borderType='regular'>
        <Input onChangeText={(lastName) => this.setState({lastName})} value={this.state.lastName} placeholder={this.state.member.lastName} />
      </InputGroup>
      <InputGroup borderType='regular'>
        <Input placeholder={this.state.member.firstName} />
      </InputGroup>
      <InputGroup borderType='regular'>
        <Input placeholder={this.state.member.email} />
      </InputGroup>
      <InputGroup borderType='regular'>
        <Input placeholder={this.state.member.phone} />
      </InputGroup>
      <InputGroup borderType='regular'>
        <Input placeholder="Nouveau mot de passe" />
      </InputGroup>
      </List>
    </View>
    <Button title="Modifier" onPress={() => this.updateMember(this.state)} />
  </Content>

    )
  }
}

module.exports = profil;
