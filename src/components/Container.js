import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = ({ children }) => <View style={ styles.container }>{ children }</View>

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "flex-start",
        paddingBottom: 50,
        backgroundColor: "white",
        paddingTop: 20
    }
});

export default Container;