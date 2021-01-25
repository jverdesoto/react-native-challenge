/**
 * Genome Code Challenge React Native
 * By: Javier Verdesoto
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Animated, View, Text, Image, StyleSheet} from 'react-native';

export default class User extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        profileImage: require('../resource/profilePhoto.png'),
        userName: 'Lottie Curtis',
        // productCount: props.carouselItems.count,
        productCount: 0,
      });
  }
  render() {
    return (
      <View style={styles.profileContainer}>
        <Image source={this.state.profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>{this.state.userName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    paddingTop: 20,
    paddingBottom: 20,
    position: 'relative',
  },
  profileName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});
