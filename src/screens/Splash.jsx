//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../theme/theme';

// create a component
const Splash = () => {
    return (
        <View style={styles.container}>
            <View>
            <Image source={require('../assets/images/splash.png')} />
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
        backgroundColor: COLORS.orange,
    },
});

//make this component available to the app
export default Splash;
