import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const CategoryList = (props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("Categories Meals Screen", {
          mealCategoryId: props.item.item.id,
          mealCategoryTitle: props.item.item.title,
        })
      }
      style={[
        styles.categoryItemGrid,
        { backgroundColor: props.item.item.color },
      ]}
    >
      <View>
        <Text style={styles.title}>{props.item.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItemGrid: {
    flex: 1,
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 3,
    height: 150,
    borderRadius: 4,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  title: {
    fontWeight: "600",
    fontSize: 17,
  },
});

export default CategoryList;
