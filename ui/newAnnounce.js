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
  Radio,
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
class newAnnounce extends Component {

  constructor(props) {
    super(props);

    this.state = {
      annonce: {},
      texte: "",
      checkbox1:false
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
  toggleSwitch(){
    this.setState({
      checkbox1: !this.state.checkbox1
    })

  }


  logout(){
      AsyncStorage.multiRemove(['userId', 'token']);
      Actions.login();
  }

  render() {
    return (//{title: 'Second Scene', index: 1}`
    <Content theme={myTheme}>
    <View style={Styles.form}>
      <List>
        <ListItem>
            <Input inlineLabel placeholder="Titre annonce" onChangeText={(texte) => this.setState({texte})} value={this.state.texte} />
        </ListItem>
        <ListItem>
          <Input inlineLabel
          placeholder="Description"
          onChangeText={(texte) => this.setState({texte})} value={this.state.texte}/>
      </ListItem>

        <ListItem>
            <InputGroup borderType='underline' iconRight disabled>
              <Icon name='ios-arrow-forward' onPress={Actions.categories}/>
              <Input placeholder='Catégories' value={this.state.selectedCategory}/>
            </InputGroup>
        </ListItem>

        <ListItem>
            <Button
             onPress={this.testest.bind(this)}
             style={{width:100, height:100 }}><Icon name="ios-image"/></Button>
        </ListItem>

        <ListItem iconRight disabled>
              <Icon name='logo-euro'/>
              <Input inlineLabel placeholder="Prix" onChangeText={(texte) => this.setState({texte})} value={this.state.texte}/>
        </ListItem>

        <ListItem onPress={() => this.toggleSwitch()}>
          <Radio selected={this.state.checkbox1} onPress={() => this.toggleSwitch()} />
          <Text style={{color:'#376092', fontStyle:'italic'}}>Négociable</Text>
        </ListItem>

        <ListItem>
          <InputGroup borderType='underline' iconRight disabled>
            <Icon name='ios-arrow-forward' onPress={Actions.typeBrocante}/>
            <Input placeholder='Type de Brocante' value={this.state.selectedBrocante}/>
          </InputGroup>
        </ListItem>

        <ListItem iconRight disabled>
              <Icon name='ios-locate-outline' />
              <Input inlineLabel placeholder="Nom Brocante"
              onChangeText={(texte) =>
              this.setState({texte})}
              value={this.state.texte}/>
              <Input inlineLabel placeholder="Adresse"
              onChangeText={(texte) =>
              this.setState({texte})}
              value={this.state.texte}/>
              <Input inlineLabel placeholder="CP et Ville"
              onChangeText={(texte) =>
              this.setState({texte})}
              value={this.state.texte}/>
        </ListItem>

          <ListItem iconRight disabled>
                <Icon name='ios-calendar'/>
                <Input inlineLabel placeholder="Date de la Brocante"
                onChangeText={(texte) =>
                this.setState({texte})}
                value={this.state.texte}/>
          </ListItem>
          <Button style={{marginTop: 20}}>Valider</Button>

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
module.exports = newAnnounce;
