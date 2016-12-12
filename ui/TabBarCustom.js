import React, { Component } from 'react';

import {
  Text
} from 'react-native';

import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Badge
  } from 'native-base';

class TabBarCustom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTabBarIndex: 0
    };

    var t = this.props;
  }
  ActiveButton(index) {
    // Méthode qui active le button quand on clique sur le bon bouton
    console.log(index);
    if(index === this.state.currentTabBarIndex)
    return true;
    else return false;

  }
  setNavigatorByIndex(index) {
    this.props.main.changeNavigatorByIndex(index);

    this.setState({
      currentTabBarIndex: index
    });

  }
  componentDidMount() {
    console.log('MOUNT');
  }
  render() {
    return (
          <FooterTab>
              <Button onPress={this.setNavigatorByIndex.bind(this, 0)} active={this.ActiveButton.bind(this, 0)} data-test="a">
                  Trouver
                  <Icon name='md-search' />
              </Button>
              <Button onPress={this.setNavigatorByIndex.bind(this, 1)} active={this.ActiveButton.bind(this, 1)} data-test="b">
                  Favoris
                  <Icon name='md-star-outline' />
              </Button>
              <Button onPress={this.setNavigatorByIndex.bind(this, 2)} active={this.ActiveButton.bind(this, 2)} data-test="c">
                  Ajouter
                  <Icon name='md-add' />
              </Button>
              <Button onPress={this.setNavigatorByIndex.bind(this, 3)} active={this.ActiveButton.bind(this, 3)} data-test="d">
                  Wishlist
                  <Icon name='md-heart-outline' />
              </Button>
              <Button onPress={this.setNavigatorByIndex.bind(this, 4)} active={this.ActiveButton.bind(this, 4)} data-test="e">
                  Profil
                  <Icon name='md-reorder' />
              </Button>
          </FooterTab>
    )
  }
}

module.exports = TabBarCustom;
