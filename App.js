/**
 * Genome Code Challenge React Native
 * By: Javier Verdesoto
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Animated,
  Easing,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import ProductCarousel from './components/ProductCarousel';
import User from './components/User';
import Controls from './components/Controls';

const backgroundImage = require('./resource/colors.png');
const blueImage = require('./resource/darkestBlue.png');
const whiteImage = require('./resource/White.png');

const win = Dimensions.get('window');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      SlideBg: new Animated.Value(0),
      SlideWhite: new Animated.Value(0),
      SlideContent: new Animated.Value(0),
      fadeValue: new Animated.Value(0),
      carouselItems: [
        {
          title: 'Moonstone Keychain',
          text: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
          img: require('./resource/rock_1.png'),
          type: 'product',
        },
        {
          title: 'Sapphire Keychain',
          text: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
          img: require('./resource/rock_2.png'),
          type: 'product',
        },
        {
          title: '',
          text: '',
          img: '',
          type: 'last',
        },
      ],
    };
  }

  _start = () => {
    return Animated.parallel([
      Animated.timing(this.state.SlideBg, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        delay: 500,
        easing: Easing.quad,
      }),
      Animated.timing(this.state.SlideWhite, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        delay: 500,
        easing: Easing.quad,
      }),
      Animated.timing(this.state.SlideContent, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        delay: 800,
        easing: Easing.quad,
      }),
      Animated.timing(this.state.fadeValue, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        delay: 1000,
        easing: Easing.quad,
      }),
    ]).start();
  };

  componentDidMount() {
    this._start();
  }

  render() {
    let {SlideBg, SlideWhite, fadeValue, SlideContent} = this.state;

    return (
      <View style={styles.container}>
        <Animated.Image
          source={backgroundImage}
          style={{
            resizeMode: 'cover',
            flex: 1,
            position: 'absolute',
            width: win.width,
            height: win.height,
            zIndex: -1,
            transform: [
              {
                translateY: SlideBg.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -95],
                }),
              },
            ],
          }}
        />
        <Image source={blueImage} style={styles.imgBlue} />
        <Animated.Image
          source={whiteImage}
          style={{
            position: 'absolute',
            bottom: -400,
            right: 0,
            width: win.width,
            height: win.height,
            resizeMode: 'contain',
            zIndex: 1,
            transform: [
              {
                translateY: SlideWhite.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, -220],
                }),
              },
            ],
          }}
        />
        <Animated.View
          style={{
            opacity: fadeValue,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 50,
            height: win.height,
            transform: [
              {
                translateY: SlideContent.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -20],
                }),
              },
            ],
          }}>
          <User />
          <Text style={styles.cart}>
            You have {this.state.carouselItems.length - 1}{' '}
            {this.state.carouselItems.length - 1 == 1 ? 'Product' : 'Products'}{' '}
          </Text>
          <ProductCarousel items={this.state.carouselItems} />
          <Controls />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: win.height,
  },
  cart: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 14,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 15,
    marginBottom: 30,
    borderRadius: 20,
  },
  imgBlue: {
    position: 'absolute',
    bottom: 0,
    width: win.width,
    resizeMode: 'contain',
    zIndex: 0,
  },
});
