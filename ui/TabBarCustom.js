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

import myTheme from '../Themes/mytheme';

class TabBarCustom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTabBarIndex: 0
    };
  }

  setNavigatorByIndex(index) {
    this.props.main.changeNavigatorByIndex(index);

    this.setState({
      currentTabBarIndex: index
    });
  }

  render() {
    return (
          <FooterTab theme={myTheme}>
              <Button onPress={this.setNavigatorByIndex.bind(this, 0)} active={this.state.currentTabBarIndex === 0}>
                  Trouver
                  <Icon name='md-search' />
              </Button>
              <Button onPress={this.setNavigatorByIndex.bind(this, 1)} active={this.state.currentTabBarIndex === 1}>
                  Favoris
                  <Icon name='md-star-outline' />
              </Button>
              <Button onPress={this.setNavigatorByIndex.bind(this, 2)} active={this.state.currentTabBarIndex === 2}>
                  Ajouter
                  <Icon name='md-add' />
              </Button>
              <Button onPress={this.setNavigatorByIndex.bind(this, 3)} active={this.state.currentTabBarIndex === 3}>
                  Wishlist
                  <Icon name='md-heart-outline' />
              </Button>
              <Button onPress={this.setNavigatorByIndex.bind(this, 4)} active={this.state.currentTabBarIndex === 4}>
                  Profil
                  <Icon name='md-reorder' />
              </Button>
          </FooterTab>
    )
  }
}

module.exports = TabBarCustom;
