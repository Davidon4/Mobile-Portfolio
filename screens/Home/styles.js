import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    marginTop: "5%",
    paddingHorizontal: 17,
  },
  image: {
    width: "100%",
    height: height / 4 - 3,
  },
  categoryContainer: {
    flex: 1,
  },
  buttonContainer1: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonContainer2: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
});
