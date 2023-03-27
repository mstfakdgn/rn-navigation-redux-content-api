import {View, Text, StyleSheet,Pressable, Image,Platform} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import MealDetails from '../MealDetails';

const MealItem = (props) => {
    const navigation = useNavigation();

    const detailPressHandler = () => {
        navigation.navigate('MealsDetails', {mealId:props.meal.id});
    }
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}} style={({pressed}) =>  pressed ? styles.buttonPressed : null} onPress={detailPressHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: props.meal.imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{props.meal.title}</Text>
                    </View>
                    <MealDetails duration={props.meal.duration} complexity={props.meal.complexity} affordability={props.meal.affordability}/>
                </View>
            </Pressable>
        </View> 
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin:16,
        borderRadius:7,
        overflow:'hidden',
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0,height:2},
        shadowRadius:15 ,
        backgroundColor:'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius:8,
        overflow:'hidden'
    },
    image: {
        width:'100%',
        height:200
    },
    title: {
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8
    },
    details: {
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        justifyContent:'center'
    },
    detailItem: {
        marginHorizontal:4,
        fontSize:12
    },
    buttonPressed: {
        opacity:0.5
    }
});

export default MealItem;