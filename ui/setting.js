import React, { Component } from 'react';
import {
  AsyncStorage,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image
} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Badge,
  InputGroup,
  Input,
  Grid,
  Col,
  List,
  ListItem,
  Thumbnail,
  Card,
  CardItem
  } from 'native-base';
//import ToggleDisplay from 'react-toggle-display';
import { Actions } from 'react-native-router-flux';
import myTheme from '../Themes/myTheme';

class setting extends Component {

constructor(props) {
  super(props);
  this.state = {
    member: {},
    memberID : '586fc63ec3d59a00118bb0e0',
    isAdmin: false
  };
}

componentWillMount() {
  AsyncStorage.getItem('token').then((token) => {
    if(!token){
      Actions.login();
    }
  })
  fetch('https://littlebrocapi.herokuapp.com/api/member/' + this.state.memberID ).then((response) => response.json()).then((json) => {
    this.setState({
      member: json,
      isAdmin: json.admin
    });
  });
}

render() {
  return (//{title: 'Second Scene', index: 1}
    <Content theme={myTheme} style={styles.margin}>
          <Image style={{ resizeMode: 'cover', width: 100, height: 100 }} source={{uri : this.state.member.img}}></Image>
          <Text> {this.state.member.img} </Text>
      <View style={styles.center} >
         <Button style={styles.centerBtn} onPress={Actions.profil}>
        <Icon name='ios-contact'/>
          <Text style={styles.txtParams}>Mon profil</Text>
         </Button>
         <Button style={styles.centerBtn} onPress={Actions.myAnnounce}>
           <Icon name="ios-photos"/>
           <Text>Mes annonces</Text>
         </Button>
         <Button style={styles.centerBtn} onPress={Actions.messages}>
           <Icon name="ios-mail"/>
           <Text>Mes messages</Text>
         </Button>
         <Button style={styles.centerBtn} >
           <Icon name="ios-print"/>
           <Text>Votre bannière</Text>
         </Button>
         <View style={{opacity: this.state.isAdmin ? 1 : 0}} >
           <Button style={styles.centerBtn}>
             <Icon name="ios-warning"/>
             <Text>Annonces signalée</Text>
           </Button>
        </View>
       </View>
    </Content>
    )
  }
}

const styles = StyleSheet.create({
  margin: {
    marginTop: 70
  },
  center: {
    alignSelf: 'center'
  },
  test: {
    height: 0,
    width: 0

  },
  centerBtn: {
    alignSelf: 'center',
    marginTop: 20,
    width: 200,
    backgroundColor:  '#376092',
  }
});
module.exports = setting;
