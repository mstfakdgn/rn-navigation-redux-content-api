import { useLayoutEffect } from 'react'
import {View, Text, StyleSheet, Image,ScrollView, Button} from 'react-native'
import { MEALS } from '../data/dummy-data';
import { useContext } from "react";
import { FavoritesContext } from '../store/context/favorites-context';

import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

const MealDetailScreen = ({props, route, navigation}) => {
    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId;

    const meal = MEALS.find((mealItem) => {
        return  mealItem.id === mealId
    })

    const isMealFavorite = favoriteMealsCtx.ids.includes(mealId);

    const changeFavoriteStatusHandler = () => {
        if (isMealFavorite) {
            favoriteMealsCtx.removeFavorite(mealId);
        } else {
            favoriteMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight : () => {
                // return <Button title='Tap' onPress={headerButtonPressHandler}/>
                return <IconButton icon={isMealFavorite ? "star" : "star-outline"} onPress={changeFavoriteStatusHandler} color="white"/>
            }
        })
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.root}>
            <Image source={{uri:meal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{meal.title}</Text>
            <MealDetails duration={meal.duration} complexity={meal.complexity} affordability={meal.affordability} textStyle={styles.detailText}/>
            <View style={styles.outerContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={meal.ingredients}></List>
                    <Subtitle>Steps</Subtitle>
                    <List data={meal.steps}></List>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        marginBottom:32
    },
    image: {
        width:'100%',
        height:350
    },
    title: {
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white'
    },
    detailText: {
        color:'white'
    },
    subtitle: {
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    },
    subtitleContainer: {
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        marginHorizontal:24,
        marginVertical:4
    },
    listContainer: {
        width:'80%'
    },
    outerContainer: {
        width:'100%',
        alignItems:'center'
    }
});

export default MealDetailScreen;