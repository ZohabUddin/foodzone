import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTS} from '../theme/theme';

const DetailsTile = (props) => {
  return (
    <TouchableOpacity style={styles.detailsTileContainer}>
      <Image
        style={styles.iconStyling}
        source={require('../assets/images/dotIcon.png')}
      />
      <Text style={styles.heading}>{props.heading}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default DetailsTile;

const styles = StyleSheet.create({
  detailsTileContainer: {
    alignItems: 'center',
    borderWidth: 2,
    height: FONTS.font32 * 2.7,
    width: FONTS.font38 * 2.1,
    borderRadius: 20,
    borderColor: COLORS.grey,
  },
  iconStyling: {
    resizeMode: 'contain',
    height: FONTS.font10,
    width: FONTS.font10,
    marginTop: FONTS.font12,
  },
  heading: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '500',
    fontSize: FONTS.font12,
    marginTop: FONTS.font12,
  },
  text: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '800',
    fontSize: FONTS.font16,
    color: COLORS.black,
  },
});
