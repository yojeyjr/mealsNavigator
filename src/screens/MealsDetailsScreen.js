import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';

const MealsDetailsScreen = ({navigation, route}) => {
  const meals = useSelector(state => state.meals.meals);
  const meal = meals.find(meal => meal.id === route.params.mealId);
  return (
    <TouchableOpacity>
      <ImageBackground style={styles.mealImage} source={{uri: meal.imageUrl}}>
        <View style={styles.mealHeader}>
          <Text style={styles.mealBgTitle}>{meal.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.mealDetails}>
        <View style={[styles.mealDetailItem, {alignItems: 'flex-start'}]}>
          <Text style={styles.mealDetail}>{meal.duration}</Text>
        </View>
        <View style={[styles.mealDetailItem, {alignItems: 'center'}]}>
          <Text style={styles.mealDetail}>{meal.complexity}</Text>
        </View>
        <View style={[styles.mealDetailItem, {alignItems: 'flex-end'}]}>
          <Text style={styles.mealDetail}>{meal.affordability}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealContainer: {
    width: '100%',
    height: 200,
    paddingHorizontal: 20,
    marginBottom: 40,
    borderRadius: 15,
  },
  mealImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealBgTitle: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
  mealHeader: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 5,
  },
  mealDetails: {
    width: '100%',
    flexDirection: 'row',
    padding: 4,
    backgroundColor: '#c5c5c5',
    paddingHorizontal: 10,
  },
  mealDetailItem: {
    flex: 1,
  },
  mealDetail: {},
});

export default MealsDetailsScreen;
