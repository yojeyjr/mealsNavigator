import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setFilters} from '../store/actions/meals';

const FilterScreen = () => {
  const [gluterFree, setGluterFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [Vegetarian, setVegetarian] = useState(false);

  const [value, setValue] = useState(false);
  const [filter, setFilter] = useState(false);

  const dispatch = useDispatch();

  const toggleFilter = useCallback(
    (filters, values) => {
      dispatch(setFilters(filters, values));
    },
    [dispatch, filter, value],
  );

  return (
    <View style={styles.filterScreenContainer}>
      <Text style={styles.title}>Available Filters</Text>
      <View style={styles.filters}>
        <View style={styles.row}>
          <View style={styles.label}>
            <Text>Gluten Free</Text>
          </View>
          <View style={styles.switch}>
            <Switch
              value={gluterFree}
              onValueChange={value => {
                setGluterFree(value);
                setValue(value);
                setFilter('glutenFree');
                toggleFilter('glutenFree', value);
              }}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.label}>
            <Text>Lactose Free</Text>
          </View>
          <View style={styles.switch}>
            <Switch
              value={lactoseFree}
              onValueChange={value => {
                setLactoseFree(value);
                setValue(value);
                setFilter('lactoseFree');
                toggleFilter('lactoseFree', value);
              }}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.label}>
            <Text>Vegan</Text>
          </View>
          <View style={styles.switch}>
            <Switch
              value={vegan}
              onValueChange={value => {
                setVegan(value);
                setValue(value);
                setFilter('vegan');
                toggleFilter('vegan', value);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.label}>
          <Text>Vegetarian</Text>
        </View>
        <View style={styles.switch}>
          <Switch
            value={Vegetarian}
            onValueChange={value => {
              setVegetarian(value);
              setValue(value);
              setFilter('vegetarian');
              toggleFilter('vegetarian', value);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterScreenContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 10,
  },
  label: {
    alignItems: 'flex-start',
    flex: 3,
  },
  switch: {
    alignItems: 'flex-end',
    flex: 2,
  },
});

export default FilterScreen;
