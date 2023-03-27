import { Pressable, View,Text,StyleSheet,Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

const CategoryGridTitle = props => {
    // const navigation = useNavigation();

    return (
        <View style={[styles.gridItem, {backgroundColor:props.color}]}>
            <Pressable android_ripple={{color:'#ccc'}} style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={props.onPress}>
                <View style={[styles.innerContainer, {}]}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem : {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0,height:2},
        shadowRadius:15 ,
        backgroundColor:'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex:1
    },
    buttonPressed: {
        opacity:0.5
    },
    innerContainer: {
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontWeight:'bold',
        fontSize:18
    }
});

export default CategoryGridTitle;