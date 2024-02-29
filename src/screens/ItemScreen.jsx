import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {COLORS, FONTFAMILY, FONTS, SIZES} from '../theme/theme';
import DetailsTile from '../components/DetailsTile';

const ItemScreen = () => {
  const data = [
    {text: '150 Cal', heading: 'Calories'},
    {text: 'Large', heading: 'Size'},
    {text: '5-10m', heading: 'Cooked'},
  ];
  const navigate = useNavigation();
  // const route = useRoute()
  // const {item} = route.params
  return (
    // <View>
    //   <Text>ItemScreen</Text>
    //   <Text>{item? <Text>{item.text1}</Text> : <Text>No data</Text>}</Text>
    // </View>
    <View style={styles.container}>
      <View style={styles.section1}>
        <TouchableOpacity
          onPress={() => {
            navigate.navigate('Home');
          }}>
          <Image
            style={styles.imgStyling}
            source={require('../assets/images/backIcon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.imgStyling}
            source={require('../assets/images/addFavouriteIcon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.ImgContainer}>
        <Image
          style={styles.bgImgStyling}
          source={require('../assets/images/burgerImg.png')}
        />
      </View>
      <View style={styles.section2}>
        <View>
          <View style={styles.barContainer}>
            <View style={styles.bar}></View>
          </View>
          <View style={styles.section2a}>
            <View>
              <Text style={styles.section2Heading}>Classic Beef Burger</Text>
            </View>
            <View style={styles.itemQuantityContainer}>
              <TouchableOpacity>
                <Image
                  style={styles.iconStyling}
                  source={require('../assets/images/removeIcon.png')}
                />
              </TouchableOpacity>
              <Text style={styles.quantityText}>4</Text>
              <TouchableOpacity>
                <Image
                  style={styles.iconStyling}
                  source={require('../assets/images/addIcon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemDetailsContainer}>
            {data.map((item, index) => {
              return (
                <DetailsTile
                  heading={item.heading}
                  text={item.text}
                  key={index}
                />
              );
            })}
          </View>
        </View>
        <View style={[styles.descritptionTextContainer, styles.shadow]}>
          <Text style={styles.descritptionText}>
            A burger is a patty of ground beef grilled and placed between two
            halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise,
            and other ingredients add flavor.
          </Text>
        </View>
        <View style={styles.section3}>
          <Text style={styles.section3Text}>40 $</Text>
          <TouchableOpacity style={styles.section3Btn} onPress={()=>{navigate.navigate('Tracking')}}>
            <Text style={styles.section3BtnText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: FONTS.font20,    
    flex:1
  },
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: FONTS.font20,    
    marginBottom:FONTS.font38*1.1
    
  },
  imgStyling: {
    resizeMode: 'contain',
    height: FONTS.font38,
    width: FONTS.font38,
  },
  ImgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImgStyling: {
    resizeMode: 'contain',
    height: SIZES.height / 3,
    width: SIZES.width,
  },
  section2: {
    backgroundColor: COLORS.white,

    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: COLORS.grey,
    elevation: 5,

    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  section2a: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: FONTS.font14,
  },
  bar: {
    width: SIZES.width / 3,
    height: FONTS.font6,
    backgroundColor: COLORS.grey,
    borderRadius: 15,
    marginTop: FONTS.font14,
  },
  barContainer: {
    alignItems: 'center',
    marginTop: FONTS.font10,
  },
  section2Heading: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '800',
    fontSize: FONTS.font18,
    color: COLORS.black,
  },
  itemQuantityContainer: {
    flexDirection: 'row',
    width: FONTS.font38 * 1.6,
    justifyContent: 'space-between',
    padding: FONTS.font6,
    borderRadius: 15,

    elevation: 10,
    shadowColor: COLORS.black,
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    backgroundColor: COLORS.white,

    alignItems: 'center',
  },
  iconStyling: {
    resizeMode: 'contain',
    height: FONTS.font10,
    width: FONTS.font10,
  },
  quantityText: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '800',
    fontSize: FONTS.font14,
    color: COLORS.black,
  },
  itemDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: FONTS.font10,
    marginTop:FONTS.font20
  },
  descritptionTextContainer: {
    backgroundColor: COLORS.white,
  },
  descritptionText: {
    padding: FONTS.font28,
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '500',
    fontSize: FONTS.font14,
  },
  section3: {    

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: FONTS.font18,
    paddingVertical: FONTS.font12,

    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,

  },
  shadow: {
    elevation: 10,
    shadowColor: COLORS.black,
    shadowOffset: {width: FONTS.font20, height: FONTS.font20},
    shadowOpacity: 1,
    shadowRadius: 12,
  },
  section3Text: {
    color: COLORS.orange,
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '800',
    fontSize: FONTS.font26,
  },
  section3Btn: {
    backgroundColor: COLORS.orange,
    paddingHorizontal: FONTS.font38 * 1.2,
    paddingVertical: FONTS.font10,
    borderRadius: 10,
  },
  section3BtnText: {color: COLORS.white,
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '700',
    fontSize: FONTS.font16,
  },
});
