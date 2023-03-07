import { StyleSheet, Text } from 'react-native';
import React from 'react';
import COLOR from '../constants/Colors';

const Menu = ({title}) => {
    return (
        <Text
            style={[styles.title, {color: COLOR.primary}]}
        >
            {title}
        </Text>
    )
}

export default Menu;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        width: '100%',
        fontSize: 45,
      },
});