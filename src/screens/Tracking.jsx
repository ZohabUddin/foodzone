import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTFAMILY, FONTS, SIZES} from '../theme/theme';

const Tracking = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImg}
        resizeMode="cover"
        source={require('../assets/images/map.png')}>
        <View style={styles.bgInside}>
          <TouchableOpacity
            onPress={() => {
              navigate.navigate('ItemScreen');
            }}>
            <Image
              style={styles.imgStyling}
              source={require('../assets/images/backIcon.png')}
            />
          </TouchableOpacity>
          <Text style={styles.section1Heading}>Order Track</Text>
        </View>
      </ImageBackground>
      <View style={styles.section2}>
        <View style={styles.barContainer}>
          <View style={styles.bar}></View>
        </View>
        <View style={styles.riderDetailsContainer}>
          <View>
            <Image
              style={styles.riderImgStyling}
              source={require('../assets/images/riderImg.png')}
            />
          </View>
          <View>
            <Text style={styles.riderNameText}>Steve Smith</Text>
            <Text style={styles.riderIDText}>DK 4601AC</Text>
          </View>
          <View style={styles.riderDetailsContainerSection3}>
            <Image
              style={styles.imgStyling}
              source={require('../assets/images/chatIcon.png')}
            />
            <Image
              style={styles.imgStyling}
              source={require('../assets/images/phoneIcon.png')}
            />
          </View>
        </View>
        <View style={styles.separatorContainer}>
          <View style={styles.separator}></View>
        </View>

        <View style={styles.riderDetailsContainer2}>
          <View>
            <Image
              style={styles.imgStyling}
              source={require('../assets/images/locationIcon.png')}
            />
          </View>
          <View style={styles.reachingDetailsContainer}>
            <View style={styles.reachingDetails}>
              <Text style={styles.riderStatus}>On the way</Text>
              <Text style={styles.riderTime}>20 min</Text>
            </View>
            <View>
              <Text style={styles.address}>
                Taha street shadman town # 2 14-B
              </Text>
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.receiveBtnContainer}>
            <Text style={styles.receiveBtnText}>Order Received</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Tracking;

const styles = StyleSheet.create({
  container: {},
  bgImg: {
    paddingHorizontal: FONTS.font10,

    height: SIZES.height / 1.68,
  },
  bgInside: {
    marginTop: FONTS.font10,
    flexDirection: 'row',
  },
  section1Heading: {
    width: SIZES.width / 1.5,
    textAlign: 'center',
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '500',
    fontSize: FONTS.font22,
    color: COLORS.black,
    marginTop: FONTS.font6,
  },
  section2: {
    backgroundColor: COLORS.white,
    height: SIZES.height / 2,
  },
  riderDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: FONTS.font20,
  },
  riderDetailsContainerSection1: {},
  riderDetailsContainerSection2: {},
  riderDetailsContainerSection3: {
    flexDirection: 'row',
  },
  bar: {
    width: SIZES.width / 3,
    height: FONTS.font6,
    backgroundColor: COLORS.grey,
    borderRadius: 15,
    marginTop: FONTS.font4,
  },
  barContainer: {
    alignItems: 'center',
    marginTop: FONTS.font10,
  },
  riderImgStyling: {
    borderRadius: 40,
    height: FONTS.font36 * 2,
    width: FONTS.font36 * 2,
  },
  riderNameText: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '800',
    fontSize: FONTS.font22,
    color: COLORS.black,
  },
  riderIDText: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '500',
    fontSize: FONTS.font14,
  },
  separatorContainer: {
    alignItems: 'center',
    marginTop: FONTS.font10,
  },
  separator: {
    width: SIZES.width / 1.1,
    height: FONTS.font2,
    backgroundColor: COLORS.grey,
    borderRadius: 15,
    marginTop: FONTS.font4,
  },
  riderDetailsContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: FONTS.font20,
  },
  reachingDetailsContainer: {
    marginLeft: FONTS.font20,
  },
  reachingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width / 2,
  },
  riderStatus: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '800',
    fontSize: FONTS.font22,
    color: COLORS.black,
  },
  riderTime: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '500',
    fontSize: FONTS.font16,
    color: COLORS.orange,
  },
  address: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '500',
    fontSize: FONTS.font14,
  },
  receiveBtnContainer: {
    alignItems:'center',    
  },
  receiveBtnText: {
    width:SIZES.width/1.2,
    padding:FONTS.font16,
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '800',
    fontSize: FONTS.font22,
    color:COLORS.white,
    backgroundColor:COLORS.orange,
    textAlign:'center',
    borderRadius: 20

  },
});
