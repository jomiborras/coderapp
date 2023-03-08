import { View, Pressable, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import COLORS from '../constants/Colors';

import Icon from 'react-native-vector-icons/Feather';
import ActionButton from '../components/ActionButton';
import Title from '../components/Title';
import Colors from '../constants/Colors';

// import '../../assets/books'

const Book = ({ close, selected, deleteBook, readBook }) => {

    const renderStars = (numStars) => {
        const stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push(
                <Icon
                    name='star'
                    size={20}
                    color={COLORS.primary}
                    key={i}
                />
            );
        }
        return stars;
    };

    return (
        <View styles={styles.container}>
            <View styles={styles.header}>
                <Pressable
                    onPress={() => close()}>
                    <Icon
                        name={"chevron-left"}
                        size={25}
                        color={COLORS.primary}
                    />
                </Pressable>
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
                    <Text>{`Author: ${selected.author}`}</Text>
                    <View style={styles.rate}>
                        {renderStars(selected.rate)}
                    </View>
                </View>
                <View style={styles.infoStatus}>
                    {/* EL TITLE NO PUEDE SER UN ICONO HACER REFACTOR A PRESSABLE*/}
                    <ActionButton
                        title={
                            <Icon
                                name={selected.read ? "book" : "book-open"}
                                size={25}
                                color={COLORS.primary}
                                style={[styles.button, selected.read ? styles.read : styles.reading]}
                            />}
                        buttonFunction={() => readBook(selected.id)}
                    />
                    {/* EL TITLE NO PUEDE SER UN ICONO HACER REFACTOR A PRESSABLE*/}
                    <ActionButton
                        title={
                            <Icon
                                name={"trash-2"}
                                size={25}
                                color={COLORS.primary}
                                style={[styles.button, styles.danger]}
                            />}
                        buttonFunction={() => deleteBook(selected.id)}
                    />
                </View>
            </View>

        </View>
    )
}

export default Book;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: undefined,
        aspectRatio: 3 / 4,
        resizeMode: 'contain',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    infoContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {
        marginLeft: 10,
        justifyContent: 'start',
    },
    infoStatus: {
        flexDirection: 'row',
    },
    rate: {
        flexDirection: 'row',
    },
    button: {
        padding: 10,
        borderRadius: '50%'
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

