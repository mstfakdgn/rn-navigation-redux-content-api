// import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text,View } from 'react-native';

import { FavoritesContext } from '../store/context/favorites-context';
import { useContext } from "react";

import MealsList from '../components/MealsList/MealsList';

const FavoritesScreen = () => {
    const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMealIds = favoriteMealsCtx.ids;
    
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