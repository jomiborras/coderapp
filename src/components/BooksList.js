import { StyleSheet, FlatList, Pressable, Text, Image } from 'react-native';
import React from 'react';

const BookList = ({ books, showBook }) => {

    const noImageIcon = require('../../assets/favicon.png');

    return (
        <FlatList
            numColumns={3}
            data={books}
            renderItem={(itemData) => (
                <Pressable
                    style={styles.imageContainer}
                    onPress={() => showBook(itemData.item.id)}
                >   
                    <Image source={itemData.item.image ? itemData.item.image : noImageIcon} style={styles.image} />
                </Pressable>
            )}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default BookList;

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        marginTop: 1,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
    },
    itemName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    itemAuthor: {
        fontSize: 10,
        color: "#999"
    },
    itemRead: {
        fontSize: 15,
        color: "#1ab35e"
    },
    itemReading: {
        fontSize: 15,
        color: "#2196f3"
    },

    imageContainer: {
        flex: 1,
        margin: 10,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        flex: 1,
        resizeMode: 'contain',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
    },
});