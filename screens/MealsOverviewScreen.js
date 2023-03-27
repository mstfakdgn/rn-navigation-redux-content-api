import { useLayoutEffect } from 'react';
// import { useRoute } from '@react-navigation/native';
import { MEALS,CATEGORIES } from '../data/dummy-data';

import MealsList from '../components/MealsList/MealsList';
import { Text } from 'react-native';

const MealsOverviewScreen = ({route, navigation}) => {
    // const route = useRoute();
    // const categoryId = route.params.categoryId;

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((item) => item.id === categoryId).title;
        navigation.setOptions({
            title:categoryTitle
        });
    },[navigation,categoryId]);

    const categoryId = route.params.categoryId;

    const mealIds = [];

    for (const element of MEALS) {
        if (element.categoryIds.includes(categoryId)) {
            mealIds.push(element.id);
        }
    }
    
    return (
        <MealsList mealIds={mealIds}/>
    );
}

export default MealsOverviewScreen;