import { View, FlatList, StyleSheet } from 'react-native';
import { MEALS } from '../../data/dummy-data';

import MealItem from '../../components/MealsList/MealItem';

const MealsList = (props) => {

    const favoriteMeals = MEALS.filter((mealItem) => {
        return  props.mealIds.includes(mealItem.id);
    })

    const renderMealItem = (itemData) => {
        return (
            <MealItem meal={itemData.item}/>
        ); 
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={favoriteMeals}
                keyExtractor = {(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:16
    }
});

export default MealsList;