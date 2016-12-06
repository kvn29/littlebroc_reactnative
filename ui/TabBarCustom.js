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


    var t = this.props;
  }
  setNavigatorByIndex(index) {
    this.props.main.changeNavigatorByIndex(index);
    console.log(index);
  }
  render() {
    return (
          <FooterTab>
              <Button onPress={this.setNavigatorByIndex.bind(this, 0)} active>
                  Ajouter
                  <Icon name='md-add' />
              </Button>
              <Button onPress={this.setNavigatorByIndex.bind(this, 1)}>
                  Favoris
                  <Icon name='md-star-outline' />
              </Button>
              <Button onPress={this.setNavigatorByIndex.bind(this, 2)}>
                  Trouver
                  <Icon name='md-search' />
              </Button>
              <Button onPress={this.setNavigatorByIndex.bind(this, 3)}>
                  Wishlist
                  <Icon name='md-heart-outline' />
              </Button>
              <Button onPress={this.setNavigatorByIndex.bind(this, 4)}>
                  Profil
                  <Icon name='md-reorder' />
              </Button>
          </FooterTab>
    )
  }
}

module.exports = TabBarCustom;
