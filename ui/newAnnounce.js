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
import CheckBox from 'react-native-checkbox';
import myTheme from '../Themes/myTheme';
var EXCHANGE = require('../data/exchange.js');
var ImagePicker = require('react-native-image-picker');
class newAnnounce extends Component {

  constructor(props) {
    super(props);

    this.state = {
      annonce: {},
      texte: ""
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
    <Content theme={myTheme}>
    <View>
      <List style={{}}>
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
             style={{width:200, height:200}}><Icon name="ios-image" style={{fontSize:100, marginTop:20}}/></Button>
        </ListItem>

        <ListItem iconRight disabled>
            <InputGroup borderType='underline' iconRight disabled>
              <Icon name='logo-euro'/>
              <Input inlineLabel placeholder="Prix" onChangeText={(texte) => this.setState({texte})} value={this.state.texte}/>
            </InputGroup>
        </ListItem>

        <ListItem>
            <InputGroup borderType='underline' iconRight disabled>
              <CheckBox
                label="Négociable"
                checked={true}
                onChange={(checked) => console.log('I am checked', checked)}/>
            </InputGroup>
        </ListItem>



        <ListItem iconRight disabled>
              <Icon name='ios-locate-outline' />
              <Input inlineLabel placeholder="Nom Brocante"
              onChangeText={(texte) =>
              this.setState({texte})}
              value={this.state.texte}/>
        </ListItem>

        <ListItem>
          <InputGroup borderType='underline' iconRight disabled>
            <Icon name='ios-arrow-forward' onPress={Actions.typeBrocante}/>
            <Input placeholder='Type de Brocante' value={this.state.selectedBrocante}/>
          </InputGroup>
        </ListItem>


        <ListItem iconRight disabled>
              <Icon name='ios-locate-outline'/>
              <Input inlineLabel placeholder="Adresse"
              onChangeText={(texte) =>
              this.setState({texte})}
              value={this.state.texte}/>
        </ListItem>
        <ListItem iconRight disabled>
            <Icon name='ios-locate-outline'/>
            <Input inlineLabel placeholder="CP et Ville"
            onChangeText={(texte) =>
            this.setState({texte})}
            value={this.state.texte}/>
        </ListItem>

          <ListItem iconRight disabled>
                <Icon name='ios-calendar'/>
                <Input inlineLabel placeholder="Date"
                onChangeText={(texte) =>
                this.setState({texte})}
                value={this.state.texte}/>
          </ListItem>

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
