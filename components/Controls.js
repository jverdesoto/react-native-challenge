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
  PanResponder,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class Controls extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ctaContainer}>
          <TouchableOpacity style={styles.cta}>
            <Image source={require('../resource/category-24px.png')} />
            <Text style={styles.text}>Wearables</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ctaContainer}>
          <TouchableOpacity style={styles.cta}>
            <View style={styles.inactive} />
            <Text style={styles.textInactive}>Wearables</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ctaContainer}>
          <TouchableOpacity style={styles.cta}>
            <View style={styles.inactive} />
            <Text style={styles.textInactive}>Wearables</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    paddingVertical: 10,
    width: win.width,
    position: 'relative',
    bottom: 0,
  },
  ctaContainer: {
    flexDirection: 'column',
  },
  cta: {
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 12,
    paddingTop: 10,
  },
  inactive: {
    width: 18,
    height: 18,
    marginVertical: 2,
    backgroundColor: '#A0A9B8',
    borderRadius: 10,
  },
  textInactive: {
    color: '#A0A9B8',
    fontSize: 12,
    paddingTop: 10,
  },
});
