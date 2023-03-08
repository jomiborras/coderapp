import { StyleSheet, View, Button } from 'react-native';
import React from 'react';

import COLORS from '../constants/Colors';

const ActionButton = ({ title, buttonFunction }) => {
    return (
        <View style={styles.buttonContainer}>
            {/* EL TITLE NO PUEDE SER UN ICONO HACER REFACTOR A PRESSABLE*/}
            <Button
                title={title}
                onPress={() => buttonFunction()}
                color={COLORS.backGround}
            />
        </View>
    )
}

export default ActionButton;

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 15,
        justifyContent: "space-between",
        alignItems: "center",
    },
});