import { StyleSheet, Modal, View, FlatList, Pressable, Text } from 'react-native';
import React from 'react';

import ActionButton from './ActionButton';

const ActionModal = ({ visible, closeModal, title }) => {
    console.log(visible);
    console.log(closeModal);
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.modalMainView}>
                <View style={styles.modalView}>
                    <View style={styles.buttonClose}>
                        {/* <Pressable
                            onPress={() => closeModal()}
                        >
                            <Text style={[styles.button, styles.close]}>X</Text>
                        </Pressable> */}
                        <ActionButton
                            title={'X'}
                            buttonFunction={closeModal}
                        />
                    </View>
                    <View>
                        <Text>{title}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ActionModal;

const styles = StyleSheet.create({
    modalMainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});