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

  class setting extends Component {

    constructor(props) {
      super(props);
      this.state = {
        annonces: [],
        annonce: {}
      };
    }
    componentWillMount() {
      fetch('https://littlebrocapi.herokuapp.com/api/member/58306e8982d1ce72659838d5').then((response) => response.json()).then((json) => {
        this.setState({
          annonce: json
        });
      });
    }
    render() {
      return (//{title: 'Second Scene', index: 1}
        <Content style={styles.margin}>
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
           <Button style={styles.centerBtn}>
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
      marginTop: 70
      },
      center: {
          alignSelf: 'center'
      },
      centerBtn: {
    alignSelf: 'center',
    marginTop: 20,
    width: 200,
    backgroundColor:  '#00ffcc'
  },
  txtParams : {

  }
    });
    module.exports = setting;
