import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorties from '../screens/Favorties';
import {Image, StyleSheet} from 'react-native';
import MealsNavigator from './MealsNavigator';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Categories"
        component={MealsNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.rightIcon}
              source={require('../assets/categorie.png')}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorties"
        component={Favorties}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.rightIcon}
              source={require('../assets/favorite.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  rightIcon: {
    width: 20,
    height: 20,
  },
});

export default BottomNavigator;
