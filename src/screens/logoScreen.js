import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
});

const LogoScreen = () => (
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} />
    </View>
);

export default LogoScreen;