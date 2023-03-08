import { View, Pressable, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';

import ActionButton from '../components/ActionButton';
import Title from '../components/Title';
import Colors from '../constants/Colors';

// import '../../assets/books'

const Book = ({ close, selected, deleteBook, readBook }) => {

    return (
        <View styles={styles.container}>
            <View styles={styles.header}>
                {/* <Pressable onPress={() => close()}>
                    <Text>Volver</Text>
                </Pressable> */}
                <Title
                    title={selected.name}
                    style={styles.title}
                />
            </View>

            <View style={styles.imageContainer}>
                <Image source={selected.image} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.info}>
                    <Text>{selected.author}</Text>
                </View>
                <View style={styles.infoStatus}>

                    <ActionButton
                        title={"Volver"}
                        buttonFunction={() => close()}
                    />

                    <ActionButton
                        title={"Borrar"}
                        buttonFunction={() => deleteBook(selected.id)}danger
                    />
                </View>
            </View>

        </View>
    )
}

export default Book;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    },
    title: {
        fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    },
    button: {
        marginLeft: 10,
    },
    spacer: {
        width: 25,
    },
    imageContainer: {
        // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    image: {
        width: 200,
    height: 300,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    infoContainer: {
        flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    },
    info: {
        flex: 1,
    },
    infoStatus: {
        flexDirection: 'row',
    },
    rate: {
        flexDirection: 'row',
    },
    button: {
        paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    },
    read: {
        backgroundColor: '#3A85E3',
    },
    reading: {
        backgroundColor: '#377E47',
    },
    danger: {
        backgroundColor: '#E3504F',
    }

});

