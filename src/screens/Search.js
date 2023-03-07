import { View, Text, StyleSheet, Image } from 'react-native';
import COLORS from '../constants/Colors';

const Search = () => {
    return (
        <View style={styles.loading}>
            <Text style={styles.title}>Book Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFCF09'
    },
    title: {
       fontSize: 50,
       alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});

export default Search;