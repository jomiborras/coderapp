import { StyleSheet, View, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Title from './Title';

import COLOR from '../constants/Colors';

const HeaderApp = ({ title }) => {

    return (
        <View style={styles.container}>
            <Pressable>
                <Icon
                    name={"menu"}
                    size={25}
                    color={COLOR.primary}

                />
            </Pressable>
            <View style={styles.titleContainer}>
                <Title
                    title={title}
                />
            </View>
            <View style={styles.iconContainer}>
                <Pressable>
                    <Icon
                        name={"search"}
                        size={25}
                        color={COLOR.primary}
                    />
                </Pressable>
            </View>
        </View>
    )
}

export default HeaderApp;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 64,
        elevation: 4,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    iconContainer: {
        alignItems: 'flex-end',
    },
});