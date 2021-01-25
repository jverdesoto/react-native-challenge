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
  Alert,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function CarouselItem(props) {
  const item = props.item;
  const showAlert = () =>
    Alert.alert(
      'Go to Add Product Screen',
      'This will send you to the add Product Screen',
    );
  if (item.type === 'product') {
    return (
      <View style={styles.card}>
        <Image source={item.img} style={styles.cardImage} />
        <View>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardContent}>{item.text}</Text>
        </View>
        <TouchableOpacity style={styles.cta}>
          <Text style={styles.textCta}>View</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.addCard}>
        <TouchableOpacity style={styles.addCta} onPress={showAlert}>
          <Icon name={'plus'} size={24} color="#fff" />
        </TouchableOpacity>
        <View>
          <Text style={styles.cardTitle}>Add a Wearable</Text>
          <Text style={styles.cardContent}>
            Don’t See One You Like? Choosing the Best Gemstone for Your Necklace
            and Jewelry
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 50,
    position: 'relative',
    marginTop: 60,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  addCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 50,
    position: 'relative',
    marginTop: 60,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  cardImage: {
    position: 'absolute',
    top: -90,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 30,
    color: '#4E5B76',
    textAlign: 'center',
  },
  cardContent: {
    fontSize: 14,
    color: '#A0A9B8',
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 20,
  },
  cta: {
    backgroundColor: '#303371',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  addCta: {
    backgroundColor: '#303371',
    borderRadius: 50,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textCta: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});

export default CarouselItem;
