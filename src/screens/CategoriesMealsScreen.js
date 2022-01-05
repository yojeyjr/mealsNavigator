import React from 'react';
import {
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

const CategoriesMealsScreen = ({navigation, route}) => {
  const meals = useSelector(state => state.meals.filteredMeals).filter(
    meal => meal.categoryIds.indexOf(route.params.mealCategoryId) >= 0,
  );

  const favourites = useSelector(state => state.meals.favourties);

  const mealItem = mealItem => {
    let existsInFav = -1;
    if (favourites !== undefined) {
      existsInFav = favourites.findIndex(meal => meal.id === mealItem.item.id);
    }
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
          {existsInFav !== -1 ? (
            <Image
              style={styles.isFavourite}
              source={require('../assets/save-instagram-after.png')}
            />
          ) : (
            <></>
          )}
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
  if (meals.length > 0) {
    return <FlatList data={meals} renderItem={mealItem} numColumns={1} />;
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>No more Meals!</Text>
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
  isFavourite: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 7,
    right: 3,
  },
});

export default CategoriesMealsScreen;
