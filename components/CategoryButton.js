import React, { useContext } from "react";
import { colors } from "../colors";
import { Text, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import ThemeContext from "../config/ThemeContext";

const { width, height } = Dimensions.get("window");

const CategoryButton = ({ onPress, icon, name }) => {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      <Text style={styles.textStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "43%",
    height: height / 3.7 - 2,
    backgroundColor: colors.blue,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    borderRadius: 10,
    marginRight: 10,
  },
  textStyle: {
    marginTop: 8,
    fontSize: 20,
    color: colors.secondary,
  },
});

export default CategoryButton;
