import { StyleSheet, View, FlatList, Pressable, Text, Image } from 'react-native';
import React from 'react';

import HeaderApp from '../components/HeaderApp';
import BooksList from '../components/BooksList';

const Main = ({ books, showBook, openBook }) => {
    return (
        <View>
            <HeaderApp title={"Book Tracker"}/>
            <BooksList
                books={books}
                showBook={showBook}
                openBook={openBook}
            />            
        </View>
    )
}

export default Main;