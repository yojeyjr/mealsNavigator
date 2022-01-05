import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryList from "../components/CategoryList";
import { Categories } from "../data/Categories";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (renderCategoryItem) => {
    return <CategoryList navigation={navigation} item={renderCategoryItem} />;
  };
  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index}
        data={Categories}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
