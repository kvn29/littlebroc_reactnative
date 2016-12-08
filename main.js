// Enlève le warning lors d'un clic que un UITABBARITEM
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

import Navigator_Tab1 from './navigator_tab1.js'
import Navigator_Tab2 from './navigator_tab2.js'

import View1 from './ui/view1.js'
import View2 from './ui/view2.js'


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
            <Content style={Styles.content} scrollEnabled={false}>
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
                        return (<Navigator_Tab1 />);
                      break;
                      case 1:
                        return (<Navigator_Tab2 />);
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
    height: Dimensions.get('window').height-200,
    backgroundColor: 'black'
  },
  navigator: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});

AppRegistry.registerComponent('test', () => test);

// // Enlève le warning lors d'un clic que un UITABBARITEM
// console.ignoredYellowBox = [
//   'Animated:',
// ];
//
// import { Router, Scene } from 'react-native-router-flux';
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Navigator
// } from 'react-native';
// import {
//   Container,
//   Header,
//   Title,
//   Content,
//   Footer,
//   FooterTab,
//   Button,
//   Icon,
//   Badge
//   } from 'native-base';
//
//
// import TabBarCustom from './ui/TabBarCustom.js'
//
// import Navigator_Tab1 from './navigator_tab1.js'
// import Navigator_Tab2 from './navigator_tab2.js'
//
//
// export default class test extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         currentTabBarIndex: 0
//       };
//     }
//     changeNavigatorByIndex(index) {
//       // Cette méthode qui prend un index affiche le bon navigator selon
//       // le bouton que l'on a touché dans la tabbar
//       this.setState({currentTabBarIndex: index});
//       // this.forceUpdate(() => {
//       //   console.log('magie '+this.state.currentTabBarIndex);
//       // });
//
//     }
//     render() {
//         return (
//             <Container>
//               <Header>
//                 <Title>Bonjour</Title>
//               </Header>
//
//                 <Navigator
//                   initialRoute={{title: 'Titre', index: 0 }}
//                   renderScene={(route, navigator) => {
//                     // Ici on met nos navigateur, un par bouton dans la tabbar (barre du dessous)
//                     // this.state.currentTabBarIndex contient l'index actuel, autrement dit
//                     // lorsqu'on clique sur le premier button on a 0
//                     // En fonction de cet index on charge le navigator correspondant
//                     // Lui même aura des sous-vues
//                     // switch (this.state.currentTabBarIndex) {
//                     //   case 0:
//                     //     return (<Navigator_Tab1></Navigator_Tab1>);
//                     //   break;
//                     //   case 1:
//                     //     return (<Navigator_Tab2 />);
//                     //   break;
//                     //
//                     // }
//                     return (<Text style={{marginTop:100}}>hello</Text>);
//                   }}
//                   style={Styles.navigator}
//                   />
//
//
//               <Footer style={Styles.tabbar}>
//                 <TabBarCustom main={this}/>
//               </Footer>
//
//             </Container>
//         );
//     }
// }
//
// // Définition du style
// const Styles = StyleSheet.create({
//   navigator: {
//     position: 'absolute',
//     top: 0,
//     left:0,
//     right:0,
//     height:200,
//     backgroundColor: 'red'
//   },
//   tabbar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0
//   }
// });
//
// AppRegistry.registerComponent('test', () => test);
