// import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text,View } from 'react-native';

import MealsList from '../components/MealsList/MealsList';
import { useDispatch, useSelector } from 'react-redux';

const FavoritesScreen = () => {

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    
    if (favoriteMealIds.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>There is no favorite food</Text>
            </View>
        );
    }

    return (
        <MealsList mealIds={favoriteMealIds}/>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
});

export default FavoritesScreen;