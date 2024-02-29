//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {FONTS, SIZES, COLORS, FONTFAMILY} from '../theme/theme';

// create a component
const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={styles.imgStyling}
          source={require('../assets/images/welcome.png')}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.para1Styling}>
          Good Food with Fast Delivery. Why not?
        </Text>
        <Text style={styles.para2Styling}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <TouchableOpacity style={styles.btnStyling}>
          <Text style={styles.btnText}>Get Started</Text>
          <Image style={styles.img2Styling} source={require('../assets/images/next.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 0.5,
  },
  container2: {
    flex: 0.5,
    alignItems: 'center',
  },
  imgStyling: {
    resizeMode: 'contain',
    width: SIZES.width / 1.2,
  },
  para1Styling: {
    fontFamily: FONTFAMILY.LatoRegular,
    color: COLORS.black,
    fontSize: FONTS.font36,
    fontWeight: '800',
  },
  para2Styling: {
    fontFamily: FONTFAMILY.LatoRegular,
    color: COLORS.grey,
    fontSize: FONTS.font14,
    fontWeight: '500',
    textAlign: 'center',
    width: SIZES.width / 2,
    marginTop: FONTS.font38,
  },
  btnStyling: {
    backgroundColor: COLORS.orange,
    flexDirection: 'row',
    alignItems:'center',
    padding:FONTS.font14,
    width: SIZES.width / 1.5,
    borderRadius:FONTS.font30,
    marginTop: FONTS.font38,
  },
  btnText:{
    color:COLORS.white,
    fontSize:FONTS.font26,marginLeft:FONTS.font20

  },
  img2Styling:{
    marginLeft:FONTS.font20
  }
});

//make this component available to the app
export default Welcome;
