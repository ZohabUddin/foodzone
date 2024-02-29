//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Splash from './src/screens/Splash';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Coupons from './src/screens/Coupons';
import Favourites from './src/screens/Favourites';
import Profile from './src/screens/Profile';
import Cart from './src/screens/Cart';
import {COLORS, FONTS} from './src/theme/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ItemScreen from './src/screens/ItemScreen';
import Tracking from './src/screens/Tracking';

const NavTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="MyNav"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.black,
        tabBarStyle: {height: FONTS.font30 * 2.5},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('./src/assets/images/homeIcon.png')}
              style={{
                tintColor: color,
                height: FONTS.font26,
                width: FONTS.font26,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Coupons"
        component={Coupons}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('./src/assets/images/couponIcon.png')}
              style={{
                tintColor: color,
                height: FONTS.font26,
                width: FONTS.font26,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                backgroundColor: COLORS.orange,
                width: FONTS.font30 * 2,
                height: FONTS.font30 * 2,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: FONTS.font30,
                position: 'absolute',
                bottom: FONTS.font22 * 2,
              }}>
              <Image
                source={require('./src/assets/images/cartIcon.png')}
                style={{
                  // tintColor: color,
                  height: FONTS.font26,
                  width: FONTS.font26,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('./src/assets/images/favouriteIcon.png')}
              style={{
                tintColor: color,
                height: FONTS.font26,
                width: FONTS.font26,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('./src/assets/images/profileIcon.png')}
              style={{
                tintColor: color,
                height: FONTS.font26,
                width: FONTS.font26,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// create a component
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NavTab"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="NavTab" component={NavTab} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
        <Stack.Screen name="Tracking" component={Tracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
