import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import Title from '../components/Title';
import COLORS from '../constants/Colors';
import { titleStyle } from '../constants/TextStyles';

const Loading = () => {
    return (
        <View style={styles.loading}>
            <Image source={require('../../assets/favicon.png')} style={styles.image} />
            <Title
                title={'Book Tracker'}
            />
            <ActivityIndicator
                size="large"
                color={COLORS.primary}
            />
            <Text color={COLORS.primary}>Loading...</Text>
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFCF09'
    },
    title: {
        fontSize: 50,
        alignItems: 'center',
        ...titleStyle,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});