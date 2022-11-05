import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 15,
  },
  image: {
    width: "100%",
    height: height / 1.2,
    borderRadius: 15,
    marginVertical: 20,
  },
  imageContainer: {
    borderRadius: 15,
    marginHorizontal: 5,
  },
});
