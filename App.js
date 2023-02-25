import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  FlatList,
  Modal,
  Pressable,
} from "react-native";

export default function App() {

  const [books, setBooks] = useState([
    {
      id: 1,
      name: 'La Galaxia Gutemberg',
      author: 'Marshall McLuhan',
      read: false
    },
    {
      id: 2,
      name: 'Del Codigo a la Venta',
      author: 'Nicolas Elizarraga',
      read: true
    }
  ]);

  const [addModal, setAddModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");

  const onChangeBookName = (text) => {
    setBookName(text);
  };

  const onChangeBookAuthor = (text) => {
    setBookAuthor(text);
  };

  const openNewBookModal = () => {
    setAddModal(true);
  }

  const addBook = () => {
    setBooks((oldArray) => [...oldArray, { id: Date.now(), name: bookName, author: bookAuthor, read: false }]);
    setBookName("");
    setBookAuthor("");
    setAddModal(!addModal);
  };

  const closeAddBook = () => {
    setAddModal(!addModal);
    setBookName("");
    setBookAuthor("");
  }
  

  const openBook = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedItem({});
  };

  const readBook = (id) => {
    setModalVisible(!modalVisible);
    books.find(item => item.id === id).read = true;
    setSelectedItem({});
  }

  const onDeleteBook = (id) => {
    setModalVisible(!modalVisible);
    setBooks((oldArray) => oldArray.filter((item) => item.id !== id));
    setSelectedItem({});
  };

  return (
    // MAIN SCREEN
    <View style={styles.screen}>
      <Text style={styles.title}>BOOK TRACKER</Text>
      <View style={styles.addItemInputContainer}>
        <Button title="Agregar Libro a la Lista" onPress={openNewBookModal} />
      </View>
      <FlatList
        style={styles.flatList}
        data={books}
        renderItem={(itemData) => (
          <Pressable
            style={styles.itemContainer}
            onPress={() => {
              openBook(itemData.item);
            }}
          >
            <Text style={styles.itemName}>{itemData.item.name}</Text>
            <Text style={styles.itemAuthor}>{itemData.item.author}</Text>
            <Text style={itemData.item.read ? styles.itemRead : styles.itemReading}>{itemData.item.read ? "Leido" : "Leyendo"}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalMainView}>
          <View style={styles.modalView}>
            {/* Boton Cerrar Modal */}
            <View style={styles.buttonClose}>
              <Pressable
                onPress={onCancelModal}
              >
                <Text style={[styles.button, styles.close]}>X</Text>
              </Pressable>
            </View>
            {/* Titulo del libro */}
            <Text style={styles.modalTitle}>{selectedItem.name}</Text>
            {/* Informacion */}
            <View style={styles.modalBody}>
              <Text style={styles.modalText}>
                <Text>Autor: </Text>
                <Text style={styles.modalBoldText}>{selectedItem?.author}</Text>
              </Text>
              <Text style={styles.modalText}>
                <Text>Estado: </Text>
                <Text style={styles.modalBoldText}>{selectedItem.read ? "Leído" : "Leyendo"}</Text>
              </Text>
            </View>
            {/* Acciones */}
            <View style={styles.modalActions}>
              <Pressable
                style={[styles.button, styles.buttonCancel, selectedItem.read && styles.disabledButton]}
                onPress={() => {
                  readBook(selectedItem.id);
                }}
                disabled={selectedItem.read}
              >
                <Text style={[styles.textStyle, selectedItem.read && styles.disabledButton]}>Leer</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonDelete]}
                onPress={() => {
                  onDeleteBook(selectedItem.id);
                }}
              >
                <Text style={styles.textStyle}>Eliminar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal animationType="fade" transparent={true} visible={addModal}>
        <View style={styles.modalMainView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Agregar Libro</Text>
            <View style={styles.addItemInputContainerModal}>
              <TextInput
                placeholder="Titulo"
                style={styles.input}
                onChangeText={onChangeBookName}
                value={bookName}
              />
              <TextInput
                placeholder="Autor"
                style={styles.input}
                onChangeText={onChangeBookAuthor}
                value={bookAuthor}
              />
            </View>
            <View style={styles.modalActions}>
              <Pressable
                style={[styles.button, styles.buttonDelete]}
                onPress={() => closeAddBook()}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={() => {
                  addBook();
                }}
              >
                <Text style={styles.textStyle}>Agregar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 25,
    padding: 3,
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    textAlign: 'center',
    width: '100%',
    fontSize: 45,
    color: "#212121"
  },
  flatList: {
    borderTopColor: "#ccc",
    borderTopWidth: 1
  },
  addItemInputContainer: {
    margin: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  addItemInputContainerModal: {
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 10
  },
  itemContainer: {
    padding: 10,
    marginTop: 1,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  item: {
    padding: 10,
    textAlign: "start",
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
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalBody: {
    alignItems: "flex-start",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  buttonCancel: {
    backgroundColor: "#2196F3",
  },
  disabledButton : {
    backgroundColor: "#ccc",
    color: "#c2c2c2",
  },
  buttonDelete: {
    backgroundColor: "#f44336",
  },
  buttonClose: {
    position: "absolute",
    right: 0,
    top: 10,
  },
  close: {
    backgroundColor: "#ccc",
  },
});
