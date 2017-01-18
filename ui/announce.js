import React, { Component } from 'react';
import {
  AsyncStorage,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image ,
  Platform,
  ImagePickerIOS
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  List,
  ListItem,
  Icon,
  Badge,
  InputGroup,
  Input
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import myTheme from '../Themes/myTheme';
var EXCHANGE = require('../data/exchange.js');
var ImagePicker = require('react-native-image-picker');
class announce extends Component {

  constructor(props) {
    super(props);

    this.state = {
      annonce: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log('là array', nextProps.selectedCategory);
    this.setState({
      selectedBrocante: nextProps.selectedBrocante,
      selectedCategory: nextProps.selectedCategory
    })
  }
  // la requete prend pour paramètre l'identifiant de l'annonce sélectionnée dans la liste précédente (listAnnounces)
  componentWillMount() {
    AsyncStorage.getItem('token').then((token) => {
      if(!token){
        Actions.login();
      }
    })
    fetch('https://littlebrocapi.herokuapp.com/api/annonce/' + this.props.annonceId).then((response) => response.json()).then((json) => {
      this.setState({
        annonce: json
      });
    });
  }
  testest() {
    if (Platform.OS === 'ios') {
      ImagePickerIOS.openSelectDialog({}, imageUri => {

      }, error => console.error(error));
    }
    else
      ImagePicker.showImagePicker();
  }

  logout(){
      AsyncStorage.multiRemove(['userId', 'token']);
      Actions.login();
  }

  render() {
    return (//{title: 'Second Scene', index: 1}`
    <Content theme={myTheme} style={Styles.form}>
    <View>
      <List>
      <Button onPress={this.testest.bind(this)}>a</Button>
      <InputGroup borderType='regular' iconRight disabled>
        <Icon name='ios-arrow-forward' onPress={Actions.categories}/>
        <Input placeholder='Catégories' value={this.state.selectedCategory}/>
      </InputGroup>
      <Image style={{ width: 150, height: 150 }} source={{uri : this.state.annonce.photoUrl}}/>
      <InputGroup borderType='regular' iconRight disabled>
        <Icon name='logo-euro'/>
        <Input placeholder={this.state.annonce.annoncePrice} />
      </InputGroup>
      <InputGroup borderType='regular' iconRight disabled >
        <Icon name='ios-checkbox-outline'/>
        <Input placeholder='Négociable' />
      </InputGroup>
      <InputGroup borderType='regular'>
        <Input placeholder={this.state.annonce.annonceTitle} />
      </InputGroup>
      <InputGroup borderType='regular' iconRight disabled>
        <Icon name='ios-calendar'/>
        <Input placeholder={this.state.annonce.dateChange} />
      </InputGroup>
      <InputGroup borderType='regular' iconRight disabled>
        <Icon name='ios-arrow-forward' onPress={Actions.typeBrocante}/>
        <Input placeholder='Type de Brocante' value={this.state.selectedBrocante}/>
      </InputGroup>
      <InputGroup borderType='regular' iconRight disabled>
        <Icon name='ios-locate-outline'/>
        <Input placeholder='Lieu' />
      </InputGroup>
      <InputGroup borderType='regular' iconRight disabled>
        <Icon name='ios-chatbubbles'/>
        <Input placeholder='Auteur' />
      </InputGroup>
      <InputGroup borderType='regular' iconRight disabled>
        <Icon name='ios-arrow-forward' onPress={() => this.logout()}/>
        <Input placeholder='Déconnexion' />
      </InputGroup>
    </List>
    </View>
  </Content>
    )
  }
}

const Styles = StyleSheet.create({
  form : {
  ...Platform.select({
    ios: {
      marginTop: 70
    },
    android: {
      marginTop: 58
    },
  }),
  }
});
module.exports = announce;
