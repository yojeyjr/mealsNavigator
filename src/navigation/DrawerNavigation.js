import React, {useCallback} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MealsNavigator from './MealsNavigator';
import {Button, Image, StyleSheet, View} from 'react-native';
import BottomNavigator from './BottomNavigator';
import {NavigationContainer} from '@react-navigation/native';
import Favorties from '../screens/Favorties';
import FilterScreen from '../screens/FilterScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {selectFilter} from '../store/actions/meals';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const dispatch = useDispatch();
  const saveFilters = useCallback(() => {
    dispatch(selectFilter());
  }, [dispatch]);
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Categories Screen">
        <Drawer.Screen
          options={{headerShown: false}}
          name="Categories Screen"
          component={BottomNavigator}
        />
        <Drawer.Screen
          name="Filter Screen"
          component={FilterScreen}
          options={{
            headerRight: () => (
              <TouchableOpacity onPress={() => saveFilters()}>
                <Image
                  style={styles.rightIcon}
                  source={require('../assets/diskette-after.png')}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  rightIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
});

export default DrawerNavigation;
