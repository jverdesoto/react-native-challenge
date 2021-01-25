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
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselItem from './CarouselItem';

const win = Dimensions.get('window');

export default class ProductCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: props.items,
    };
  }

  _renderItem({item, index}) {
    return <CarouselItem item={item} />;
  }

  get pagination() {
    const {carouselItems, activeIndex} = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#424A93',
        }}
        inactiveDotStyle={{
          backgroundColor: '#A0A9B8',
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  }

  render() {
    return (
      <View style={styles.carousel}>
        <Carousel
          layout={'default'}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          inactiveSlideScale={1}
          inactiveSlideShift={30}
          inactiveSlideOpacity={1}
          sliderWidth={win.width}
          itemWidth={win.width / 1.5}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({activeIndex: index})}
        />
        <View
          style={{
            justifyContent: 'center',
          }}>
          {this.pagination}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    flex: 12,
    justifyContent: 'center',
  },
});
