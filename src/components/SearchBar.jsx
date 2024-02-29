//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, FONTFAMILY, FONTS, SIZES} from '../theme/theme';

// create a component
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <View style={styles.section1a}>
          <Image
            style={styles.img1Styling}
            source={require('../assets/images/searchIcon.png')}
          />
          <Text style={styles.section1Text}>Search</Text>
        </View>
        <View style={styles.section1b}>
          <Image
            style={styles.img2Styling}
            source={require('../assets/images/filter.png')}
          />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: FONTS.font16,
    padding: FONTS.font6,
    elevation: 15,
    shadowColor: '#aaaaaa',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  section1a: {flexDirection: 'row', padding: FONTS.font10},
  section1Text: {
    marginHorizontal: FONTS.font8,
    fontFamily: FONTFAMILY.LatoRegular,
    fontSize: FONTS.font14,
    fontWeight: '500',
    color:COLORS.black
  },
  section1b: {padding: FONTS.font10},
  img1Styling: {
    height: FONTS.font16,
    width: FONTS.font16,
    resizeMode: 'contain',
  },
  img2Styling: {
    height: FONTS.font16,
    width: FONTS.font26,
    resizeMode: 'contain',
  },
});

//make this component available to the app
export default SearchBar;
