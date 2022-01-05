import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

const Favorties = ({navigation}) => {
  const favouriteMeals = useSelector(state => state.meals.favourties);
  const favoriteMealsItem = mealItem => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Meals Details Screen', {
            mealId: mealItem.item.id,
            mealTitle: mealItem.item.title,
          })
        }
        style={styles.mealContainer}>
        <ImageBackground
          style={styles.mealImage}
          source={{uri: mealItem.item.imageUrl}}>
          <View style={styles.mealHeader}>
            <Text style={styles.mealBgTitle}>{mealItem.item.title}</Text>
          </View>
        </ImageBackground>
        <View style={styles.mealDetails}>
          <View style={[styles.mealDetailItem, {alignItems: 'flex-start'}]}>
            <Text style={styles.mealDetail}>{mealItem.item.duration}</Text>
          </View>
          <View style={[styles.mealDetailItem, {alignItems: 'center'}]}>
            <Text style={styles.mealDetail}>{mealItem.item.complexity}</Text>
          </View>
          <View style={[styles.mealDetailItem, {alignItems: 'flex-end'}]}>
            <Text style={styles.mealDetail}>{mealItem.item.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  if (favouriteMeals.length > 0) {
    return (
      <FlatList
        keyExtractor={(index, item) => item}
        data={favouriteMeals}
        renderItem={favoriteMealsItem}
      />
    );
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>No more favourties!</Text>
      </View>
    );
  }
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

export default Favorties;
