// Enlève le warning lors d'un clic sur un UITABBARITEM
console.ignoredYellowBox = [
  'Animated:',
];


import Dimensions from 'Dimensions';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
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
  Badge
  } from 'native-base';


import TabBarCustom from './ui/TabBarCustom.js'

import Navigator_search from './navigator_search.js'
import Navigator_favoris from './navigator_favoris.js'
import Navigator_add from './navigator_add.js'
import Navigator_setting from './navigator_setting.js'

export default class test extends Component {
    constructor(props) {
      super(props);

      this.state = {
        currentTabBarIndex: 0
      };

    }



    changeNavigatorByIndex(index) {
      // Cette méthode qui prend un index affiche le bon navigator selon
      // le bouton que l'on a touché dans la tabbar
      this.setState({currentTabBarIndex: index});
      // this.forceUpdate(() => {
      //   console.log('magie '+this.state.currentTabBarIndex);
      // });

    }
    render() {
        return (
          <Container >
            <Content style={Styles.content} bounces={false}>
                <Navigator
                  initialRoute={{title: 'Titre', index: 0 }}
                  renderScene={(route, navigator) => {
                    // Ici on met nos navigateur, un par bouton dans la tabbar (barre du dessous)
                    // this.state.currentTabBarIndex contient l'index actuel, autrement dit
                    // lorsqu'on clique sur le premier button on a 0
                    // En fonction de cet index on charge le navigator correspondant
                    // Lui même aura des sous-vues
                    switch (this.state.currentTabBarIndex) {
                      case 0:
                        return (<Navigator_search />);
                      break;
                      case 1:
                        return (<Navigator_favoris />);
                      break;
                      case 2:
                        return (<Navigator_add />);
                      break;
                      case 4:
                        return (<Navigator_setting />);
                      break;

                    }
                  }}
                  style={Styles.navigator}
                  />
                </Content>
                <Footer>
                  <TabBarCustom main={this} />
                </Footer>
            </Container>
        );
    }
}

// Définition du style
const Styles = StyleSheet.create({
  content: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'red'
  },
  navigator: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-55
  }
});

AppRegistry.registerComponent('test', () => test);
