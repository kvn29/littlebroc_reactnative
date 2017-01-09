import React, { Component } from 'react';
import {
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

import { Actions } from 'react-native-router-flux';

import myTheme from '../Themes/myTheme';

  class setting extends Component {

    constructor(props) {
      super(props);
      this.state = {
        annonces: {},
        memberID : '583566431a9f1105ae1fd658'
      };
    }

    componentWillMount() {
      fetch('https://littlebrocapi.herokuapp.com/api/member/' + this.state.memberID ).then((response) => response.json()).then((json) => {
        this.setState({
          annonces: json
        });
      });
    }
    render() {
      return (//{title: 'Second Scene', index: 1}
<<<<<<< HEAD
        <Content theme={myTheme} style={styles.margin}>
          <Card contentContainerStyle={styles.list} style={{marginTop: 60}} dataArray={this.state.annonces} renderRow={(item) =>
            <CardItem style={styles.item} onPress={this.openAnnounce}>
              <Image style={{ resizeMode: 'cover', width: null }} source={{uri : item.photoUrl}}>
              <Text id="id" >{item._id}</Text>
              <Text>{item.annonceTitle}</Text>
              <Text>{item.annoncePrice} €</Text>
              </Image>
            </CardItem>
            }>
          </Card>
=======
        <Content style={styles.margin}>
              <Image style={{ resizeMode: 'cover', width: 100, height: 100 }} source={{uri : this.state.annonces.photo}}></Image>
>>>>>>> 068ccd3b8f0e0fe0a599c0844a8e6c400268816c
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
           </View>
        </Content>

        )
      }
    }
    const styles = StyleSheet.create({
      margin: {
        marginTop: 70,
      },
      center: {
        alignSelf: 'center'
      },
      centerBtn: {
        alignSelf: 'center',
        marginTop: 20,
        width: 200,
        backgroundColor:  '#376092',
  },
    });
    module.exports = setting;
