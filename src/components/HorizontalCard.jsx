//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTFAMILY, FONTS, SIZES} from '../theme/theme';

// create a component
const HorizontalCard = props => {
  return (
    <TouchableOpacity onPress={props.pressFunc}>
      <View style={styles.container}>
        <View style={styles.section1}>
          <Text style={styles.Text1}>{props.text1}</Text>
          <Text style={styles.Text2}>
            {props.text2a} | {props.text2b}
          </Text>
          <View style={styles.section1Sub}>
            <Text style={styles.Text3}>{props.text3} $</Text>
            <Text style={styles.Text4}>Read more</Text>
          </View>
        </View>
        <View style={styles.section2}>
          <Image style={styles.imgStyling} source={props.img} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: FONTS.font10,
    width: SIZES.width / 1.1,
    padding: FONTS.font16,
    elevation: 15,
    shadowColor: '#aaaaaa',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    height: FONTS.font30 * 3,
  },
  imgStyling: {
    width: FONTS.font38 * 2,
    height: FONTS.font38 * 2,
    resizeMode: 'contain',
  },
  section1: {},
  section2: {},
  section1Sub: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: FONTS.font2,
  },
  Text1: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '700',
    fontSize: FONTS.font16,
    color: COLORS.black,
  },
  Text2: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '500',
    fontSize: FONTS.font12,
    marginTop: FONTS.font2,
  },
  Text3: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '800',
    fontSize: FONTS.font16,
    color: COLORS.orange,
  },
  Text4: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '700',
    fontSize: FONTS.font12,
    color: COLORS.orange,
    textDecorationLine: 'underline',
  },
});

//make this component available to the app
export default HorizontalCard;
