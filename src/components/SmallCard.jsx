// //import liraries
// import React, {Component} from 'react';
// import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import {COLORS, FONTFAMILY, FONTS} from '../theme/theme';

// // create a component
// const SmallCard = props => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//       style={{alignItems:'center'}}
//       onPress={props.pressFunc}>
//         <Image style={styles.smallCardImgStyling} source={props.img} />
//         <Text style={styles.smallCardText}>{props.text}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     margin: FONTS.font10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: FONTS.font36 * 2,
//     padding: FONTS.font6,
//     elevation: 15,
//     shadowColor: '#aaaaaa',
//     shadowOffset: {width: 3, height: 2},
//     shadowOpacity: 0.25,
//     shadowRadius: 3,
//     borderRadius: 20,
//     backgroundColor: COLORS.white,
//     height: FONTS.font30 * 3,
//   },
//   smallCardImgStyling: {
//     height: FONTS.font32,
//     width: FONTS.font32,
//     resizeMode: 'contain',
//   },
//   smallCardText: {
//     color: COLORS.black,
//   },
// });

// //make this component available to the app
// export default SmallCard;

import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTFAMILY, FONTS} from '../theme/theme';

const SmallCard = props => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.isSelected && styles.selectedContainer, 
      ]}
      onPress={props.pressFunc}>
      <View style={{alignItems: 'center'}}>
        <Image style={styles.smallCardImgStyling} source={props.img} />
        <Text style={[styles.smallCardText, props.isSelected && styles.selectedText]}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: FONTS.font10,
    justifyContent: 'center',
    alignItems: 'center',
    width: FONTS.font36 * 2,
    padding: FONTS.font6,
    elevation: 15,
    shadowColor: '#aaaaaa',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    height: FONTS.font30 * 3,
  },
  selectedContainer: {
    backgroundColor: COLORS.orange,
  },
  selectedText: {
    color: COLORS.white,
  },
  smallCardImgStyling: {
    height: FONTS.font32,
    width: FONTS.font32,
    resizeMode: 'contain',
  },
  smallCardText: {
    color: COLORS.black,
  },
});

export default SmallCard;
