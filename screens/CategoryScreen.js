import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoryScreen = ({navigation}) => {

    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', {categoryId:itemData.item.id});
        }
        return (
            <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor = {(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
} 

export default CategoryScreen;