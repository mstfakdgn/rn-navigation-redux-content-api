import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import  CategoryScreen  from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator  ()  {
  return (
    <Drawer.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor:'#351401'
      },
      headerTintColor:'white',
      sceneContainerStyle: {
        backgroundColor:'#3f2f25'
      },
      drawerContentStyle: { backgroundColor:'#351401'},
      drawerInactiveTintColor:'white',
      drawerActiveTintColor:'#351401',
      drawerActiveBackgroundColor: '#e4baa1'
    }}>
      <Drawer.Screen name='categories' component={CategoryScreen} 
        options={{title:"All Categories",drawerIcon:({color, size}) => <Ionicons name='list' color={color} size={size}/>
      }} />
      <Drawer.Screen name='favorites' component={FavoritesScreen} 
        options={{title:"Favorites", drawerIcon:({color, size}) => <Ionicons name='star' color={color} size={size}/>
      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        {/* <FavoritesContextProvider> For context*/}
          <NavigationContainer>
            <Stack.Navigator
              screenOptions = {{
                headerStyle: {
                  backgroundColor:'#351401'
                },
                headerTintColor:'white',
                contentStyle: {
                  backgroundColor:'#351401'
                }
              }}
            >
              <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{
                headerShown:false
              }}/>
              <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
                // options = {({route, navigation}) => {
                //   const catId = route.params.categoryId;
                //   return {
                //     title:catId
                //   };
                // }}
              />
              <Stack.Screen name="MealsDetails" component={MealDetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        {/* </FavoritesContextProvider> For context*/} 
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
