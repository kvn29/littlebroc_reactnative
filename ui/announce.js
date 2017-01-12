import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, StyleSheet, Text, View, Navigator, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Badge, InputGroup, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import myTheme from '../Themes/myTheme';

class announce extends Component {

  constructor(props) {
    super(props);
    this.state = {
      annonce: {}
    };
  }

  // la requete prend pour paramètre l'identifiant de l'annonce sélectionnée dans la liste précédente (listAnnounces)
  componentWillMount() {
    console.log('token',AsyncStorage.getItem('token'));
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

  logout(){
      AsyncStorage.multiRemove(['userId', 'token']);
      Actions.login();
  }

  render() {
    console.log('props :', this.props.selectedBrocante);
    return (//{title: 'Second Scene', index: 1}
    <View style={{marginTop:55}}>
      <InputGroup borderType='regular' iconRight disabled>
        <Icon name='ios-arrow-forward' onPress={() => this.logout()}/>
        <Input placeholder='Déconnexion' />
      </InputGroup>
      <InputGroup borderType='regular' iconRight disabled>
        <Icon name='ios-arrow-forward' onPress={Actions.categories}/>
        <Input placeholder='Catégories' />
      </InputGroup>
      <Image style={{ width: 150, height: 150 }} source={{uri : this.state.annonce.photoUrl}}/>
      <InputGroup borderType='regular' iconRight disabled>
        <Icon name='logo-euro'/>
        <Input placeholder={this.state.annonce.annoncePrice} />
      </InputGroup>
      <InputGroup borderType='regular' iconRight disabled>
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
        <Input placeholder='Type de Brocante' value={this.props.selectedBrocante}/>
      </InputGroup>
      <InputGroup borderType='regular' iconRight disabled>
        <Icon name='ios-locate-outline'/>
        <Input placeholder='Lieu' />
      </InputGroup>
      <InputGroup borderType='regular' iconRight disabled>
        <Icon name='ios-chatbubbles'/>
        <Input placeholder='Auteur' />
      </InputGroup>
    </View>

    )
  }
}
module.exports = announce;
