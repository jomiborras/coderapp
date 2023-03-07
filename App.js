import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { titleStyle } from './src/constants/TextStyles';

import Main from "./src/screens/Main";

import Loading from './src/screens/Loading';
import Book from './src/screens/Book';

export default function App() {

  const [loaded] = useFonts({
    'weatpoint': require('./assets/fonts/weatpoint.regular.ttf'),
  });

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

  }, [loaded]);

  const [books, setBooks] = useState([
    {
      id: 1,
      name: 'Aqui no hay reglas',
      author: 'Erin Meyer',
      pages: 500,
      read: true,
      image: require('./assets/books/aqui.png'),
      rate: 5
    },
    {
      id: 2,
      name: 'El Punto Clave',
      author: 'Malcolm Gadwell',
      pages: 500,
      read: false,
      image: require('./assets/books/clave.png'),
      rate: 4
    },
    {
      id: 3,
      name: 'El Mapa Cultural',
      author: 'Erin Meyer',
      pages: 500,
      read: false,
      image: require('./assets/books/cultural.png'),
      rate: 3
    },
    {
      id: 4,
      name: 'La Galaxia Gutemberg',
      author: 'Marshall McLuhan',
      pages: 500,
      read: false,
      image: require('./assets/books/gutemberg.png'),
      rate: 1
    },
    {
      id: 5,
      name: 'Lean Startup',
      author: 'Eric Ries',
      pages: 500,
      read: false,
      image: require('./assets/books/lean.png'),
      rate: 2
    },
    {
      id: 6,
      name: 'La Estrategia del Oceano Azul',
      author: 'Chan Kim',
      pages: 500,
      read: false,
      image: require('./assets/books/oceano.png'),
      rate: 5
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const [bookScreen, setBookScreen] = useState(false);
  const [searchScreen, setSearchScreen] = useState(false);

  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const bookUnit = (itemId) => {
    if (!bookScreen) {
      setBookScreen(true);
      const selected = books.find(item => item.id === itemId);
      setSelectedItem(selected);
    } else {
      setSearchScreen({});
      setBookScreen(false);
    }
  }

  const openBook = (item) => {
    setSelectedItem(item);
  };

  const onReadBook = (id) => {
    setBooks(books.map((book) =>
      book.id === id ? { ...book, read: !book.read } : book
    )
    );
  };

  const onDeleteBook = (id) => {
    setBookScreen(false);
    setBooks((oldArray) => oldArray.filter((item) => item.id !== id));
    setSelectedItem({});
  };

  if (isLoading) {
    return (
      <Loading />
    );
  }  else {

    return (
      // MAIN SCREEN
      <View style={styles.screen}>
        {
          bookScreen ?

            <Book
              close={bookUnit}
              selected={selectedItem}
              deleteBook={onDeleteBook}
              readBook={onReadBook}
            /> :
            <Main
              books={books}
              showBook={bookUnit}
              openBook={openBook}
            />
        }

      </View>
    );

  }
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 25,
    padding: 3,
    flex: 1,
    backgroundColor: "#FFCF09"
  },
  textStyle: {
    ...titleStyle
  }
});
