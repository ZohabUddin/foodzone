//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {COLORS, FONTFAMILY, FONTS, SIZES} from '../theme/theme';
import SearchBar from '../components/SearchBar';
import SmallCard from '../components/SmallCard';
import LargeCard from '../components/LargeCard';
import HorizontalCard from '../components/HorizontalCard';
import { useNavigation } from '@react-navigation/native';

// create a component
const Home = () => {
  const navigation = useNavigation();
  const [choice, setChoice] = useState('Popular Items');
  const [foodData, setFoodData] = useState(null);

  useEffect(() => {
    if (choice === 'Burgers') {
      setFoodData(Burgers);
    } else if (choice === 'Pizza') {
      setFoodData(Pizza);
    } else if (choice === 'Steaks') {
      setFoodData(Steaks);
    } else if (choice === 'Drinks') {
      setFoodData(Drinks);
    } else if (choice === 'Desserts') {
      setFoodData(Desserts);
    }
  }, [choice]);

  const DATA1 = [
    {id: 1, text: 'Burgers', img: require('../assets/images/burger.png')},
    {id: 2, text: 'Pizza', img: require('../assets/images/pizza.png')},
    {id: 3, text: 'Steaks', img: require('../assets/images/steak.png')},
    {id: 4, text: 'Drinks', img: require('../assets/images/soda.png')},
    {id: 5, text: 'Desserts', img: require('../assets/images/dessert.png')},
  ];
  const DATA2 = [
    {
      id: 1,
      img1: require('../assets/images/pepperoni.png'),
      text1: 'Pepperoni',
      text2a: '20 min',
      text2b: '150 sell',
      text3: '8.5',
      img2: require('../assets/images/beefBurger.png'),
      text4: 'Beef Burger',
      text5a: '30 min',
      text5b: '350 sell',
      text6: '7.5',
    },
    {
      id: 2,
      img1: require('../assets/images/beefSteak.png'),
      text1: 'Beef Steak',
      text2a: '20 min',
      text2b: '150 sell',
      text3: '8.5',
      img2: require('../assets/images/strawberryJuice.png'),
      text4: 'Strawberry Juice',
      text5a: '30 min',
      text5b: '350 sell',
      text6: '7.5',
    },
  ];

  const Burgers = [
    {
      id: 1,
      img: require('../assets/images/burger1.png'),
      text1: 'Classic Beef Burger',
      text2a: '10 min',
      text2b: '350 sell',
      text3: '10',
    },
    {
      id: 2,
      img: require('../assets/images/burger2.png'),
      text1: 'Beef Double Patty',
      text2a: '20 min',
      text2b: '500 sell',
      text3: '25',
    },
    {
      id: 3,
      img: require('../assets/images/burger3.png'),
      text1: 'Grilled Beef Double',
      text2a: '20 min',
      text2b: '400 sell',
      text3: '28',
    },
    {
      id: 4,
      img: require('../assets/images/burger4.png'),
      text1: 'Pulled Beef Burger',
      text2a: '09 min',
      text2b: '189 sell',
      text3: '22',
    },
  ];
  const Pizza = [
    {
      id: 1,
      img: require('../assets/images/pizza1.png'),
      text1: 'Veg Mushroom Pizza',
      text2a: '10 min',
      text2b: '350 sell',
      text3: '15',
    },
    {
      id: 2,
      img: require('../assets/images/pizza2.png'),
      text1: 'Ground Beef Pizza',
      text2a: '20 min',
      text2b: '560 sell',
      text3: '30',
    },
    {
      id: 3,
      img: require('../assets/images/pizza3.png'),
      text1: 'Pepperoni Pizza',
      text2a: '12 min',
      text2b: '250 sell',
      text3: '20',
    },
    {
      id: 4,
      img: require('../assets/images/pizza4.png'),
      text1: 'Pepperoni Small Pizza',
      text2a: '07 min',
      text2b: '360 sell',
      text3: '10',
    },
  ];
  const Steaks = [
    {
      id: 1,
      img: require('../assets/images/burger1.png'),
      text1: 'Classic Beef Burger',
      text2a: '10 min',
      text2b: '500 sell',
      text3: '10',
    },
    {
      id: 2,
      img: require('../assets/images/burger1.png'),
      text1: 'Classic Beef Burger',
      text2a: '10 min',
      text2b: '500 sell',
      text3: '10',
    },
    {
      id: 3,
      img: require('../assets/images/burger1.png'),
      text1: 'Classic Beef Burger',
      text2a: '10 min',
      text2b: '500 sell',
      text3: '10',
    },
    {
      id: 4,
      img: require('../assets/images/burger1.png'),
      text1: 'Classic Beef Burger',
      text2a: '10 min',
      text2b: '500 sell',
      text3: '10',
    },
  ];
  const Drinks = [
    {
      id: 1,
      img: require('../assets/images/burger1.png'),
      text1: 'Classic Beef Burger',
      text2a: '10 min',
      text2b: '500 sell',
      text3: '10',
    },
    {
      id: 2,
      img: require('../assets/images/burger1.png'),
      text1: 'Classic Beef Burger',
      text2a: '10 min',
      text2b: '500 sell',
      text3: '10',
    },
    {
      id: 3,
      img: require('../assets/images/burger1.png'),
      text1: 'Classic Beef Burger',
      text2a: '10 min',
      text2b: '500 sell',
      text3: '10',
    },
    {
      id: 4,
      img: require('../assets/images/burger1.png'),
      text1: 'Classic Beef Burger',
      text2a: '10 min',
      text2b: '500 sell',
      text3: '10',
    },
  ];
  const Desserts = [
    {
      id: 1,
      img: require('../assets/images/burger1.png'),
      text1: 'Classic Beef Burger',
      text2a: '10 min',
      text2b: '500 sell',
      text3: '10',
    },
    {
      id: 2,
      img: require('../assets/images/burger1.png'),
      text1: 'Classic Beef Burger',
      text2a: '10 min',
      text2b: '500 sell',
      text3: '10',
    },
    {
      id: 3,
      img: require('../assets/images/burger1.png'),
      text1: 'Classic Beef Burger',
      text2a: '10 min',
      text2b: '500 sell',
      text3: '10',
    },
    {
      id: 4,
      img: require('../assets/images/burger1.png'),
      text1: 'Classic Beef Burger',
      text2a: '10 min',
      text2b: '500 sell',
      text3: '10',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <View style={styles.section1a}>
          <Text style={styles.section1aText1}>Hi Mustufa</Text>
          <Text style={styles.section1aText2}>Hungry Now? 🔥</Text>
        </View>
        <View style={styles.section1b}>
          <Image
            style={styles.avatarStyling}
            source={require('../assets/images/user.png')}
          />
        </View>
      </View>
      <SearchBar />

      {/* small cards */}
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA1}
          renderItem={({item}) => (
            <SmallCard
              isSelected={item.text === choice}
              img={item.img}
              text={item.text}
              pressFunc={() => {
                setChoice(item.text);
              }}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.popularHeading}>
        <Text style={styles.popularHeadingText}>{choice}</Text>
        <Text>See all</Text>
      </View>

      {foodData ? (
        <View style={{flex: 1}}>
          <FlatList
            data={foodData}
            renderItem={({item}) => (
              <HorizontalCard
                img={item.img}
                text1={item.text1}
                text2a={item.text2a}
                text2b={item.text2b}
                text3={item.text3}
                text4={item.text4}
                pressFunc={()=>{
                  navigation.navigate('ItemScreen', {item})
                }}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            data={DATA2}
            renderItem={({item}) => (
              <LargeCard
                img1={item.img1}
                img2={item.img2}
                text1={item.text1}
                text2a={item.text2a}
                text2b={item.text2b}
                text3={item.text3}
                text4={item.text4}
                text5a={item.text5a}
                text5b={item.text5b}
                text6={item.text6}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroudColor: COLORS.white,
  },
  avatarStyling: {
    width: FONTS.font32 * 2,
    height: FONTS.font32 * 2,
    resizeMode: 'contain',
  },
  section1: {
    paddingTop: FONTS.font30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  section1a: {},
  section1b: {},
  section1aText1: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '500',
    fontSize: FONTS.font16,
  },
  section1aText2: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '800',
    fontSize: FONTS.font30,
    color: COLORS.black,
  },
  popularHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: FONTS.font10,
    margin: FONTS.font10,
    alignItems: 'center',
  },
  popularHeadingText: {
    fontFamily: FONTFAMILY.LatoRegular,
    fontWeight: '800',
    fontSize: FONTS.font24,
    color: COLORS.black,
  },
});

//make this component available to the app
export default Home;
