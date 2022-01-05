import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {createStore, combineReducers} from 'redux';
import mealsReducer from './src/store/reducers/meals';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  );
}
