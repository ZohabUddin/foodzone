//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, FONTFAMILY, FONTS} from '../theme/theme';

// create a component
const LargeCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.imgStyling} source={props.img1} />
        <Text style={styles.text1}>{props.text1}</Text>
        <Text style={styles.text2}>
          {props.text2a} | {props.text2b}
        </Text>
        <Text style={styles.text3}>{props.text3} $</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.imgStyling} source={props.img2} />
        <Text style={styles.text1}>{props.text4}</Text>
        <Text style={styles.text2}>
          {props.text5a} | {props.text5b}
        </Text>
        <Text style={styles.text3}>{props.text6} $</Text>
      </View>

      {/* <View></View> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imgStyling: {
    height: FONTS.font32 * 4,
    width: FONTS.font32 * 4,
    resizeMode: 'contain',
  },
  card: {
    marginHorizontal: FONTS.font16,
    marginVertical:FONTS.font6,
    justifyContent: 'center',
    alignItems: 'center',
    width: FONTS.font38 * 4,
    padding: FONTS.font6,
    elevation: 15,
    shadowColor: '#aaaaaa',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    height: FONTS.font38 * 6,
  },
  text1: {
    color: COLORS.black,
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '800',
    fontSize: FONTS.font18,
  },
  text2: {
    color: COLORS.grey,
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '500',
    fontSize: FONTS.font12,
  },
  text3: {
    color: COLORS.orange,
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '800',
    fontSize: FONTS.font22,
  },
});

//make this component available to the app
export default LargeCard;
