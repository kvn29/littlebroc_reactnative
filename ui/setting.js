import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, StyleSheet, Text, View, Navigator, Image } from 'react-native';
import { Container, Content, Button, Icon, Badge } from 'native-base';
import { Actions } from 'react-native-router-flux';
import myTheme from '../Themes/myTheme';

  class setting extends Component {

    constructor(props) {
      super(props);
      this.state = {
        member: {},
        memberID : '586fc63ec3d59a00118bb0e0'
      };
    }

    componentWillMount() {
      console.log(AsyncStorage.getItem('token'));
      fetch('https://littlebrocapi.herokuapp.com/api/member/' + this.state.memberID ).then((response) => response.json()).then((json) => {
        this.setState({
          member: json
        });
      });
    }
    render() {
      return (//{title: 'Second Scene', index: 1}
        <Content theme={myTheme} style={styles.margin}>
              <Image style={{ resizeMode: 'cover', width: 100, height: 100 }} source={{uri :this.state.member.img}}></Image>
              <Text> {this.state.member.img}</Text>
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
        backgroundColor:  '#376092',
  }
    });
    module.exports = setting;
