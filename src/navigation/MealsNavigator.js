import React, {useCallback, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavourite} from '../store/actions/meals';

const Stack = createNativeStackNavigator();

const MealsNavigator = ({navigation, route}) => {
  const [favourite, setFavourite] = useState('');
  const dispatch = useDispatch();
  const markAsFavourute = useCallback(
    id => {
      dispatch(toggleFavourite(id));
    },
    [dispatch, favourite],
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories Screen"
        component={CategoriesScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={styles.rightIcon}
                source={require('../assets/menu.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Categories Meals Screen"
        component={CategoriesMealsScreen}
        options={({route}) => ({title: route.params.mealCategoryTitle})}
      />
      <Stack.Screen
        name="Meals Details Screen"
        component={MealsDetailsScreen}
        options={({route}) => ({
          title: route.params.mealTitle,
          headerRight: () => {
            const favIndex = useSelector(state => state.meals.favourties).find(
              meal => meal.id === route.params.mealId,
            );
            let imageUrl = '';
            if (favIndex != undefined) {
              imageUrl = require('../assets/save-instagram-after.png');
            } else {
              imageUrl = require('../assets/save-instagram-before.png');
            }
            return (
              <TouchableOpacity
                onPress={() => {
                  setFavourite(route.params.mealId);
                  markAsFavourute(route.params.mealId);
                }}>
                <Image style={styles.rightIcon} source={imageUrl} />
              </TouchableOpacity>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  rightIcon: {
    width: 20,
    height: 20,
  },
});

export default MealsNavigator;
