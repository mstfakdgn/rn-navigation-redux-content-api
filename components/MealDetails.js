import {View, Text, StyleSheet} from 'react-native'

const MealDetails = props => {
    return (
        <View style={styles.details}>
            <Text style={[styles.detailItem, props.textStyle]}>{props.duration}</Text>
            <Text style={[styles.detailItem, props.textStyle]}>{props.complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, props.textStyle]}>{props.affordability.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        justifyContent:'center'
    },
    detailItem: {
        marginHorizontal:4,
        fontSize:12
    }
});

export default MealDetails;