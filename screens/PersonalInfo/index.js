import React, { useContext } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import ThemeContext from "../../config/ThemeContext";
import { styles } from "./styles";

const PersonalInfo = () => {
  const theme = useContext(ThemeContext);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/Selfie.jpeg")}
        />
      </View>
      <Text style={[styles.text, { color: theme.color }]}>Ezeluaku David</Text>
      <Text style={[styles.text, { color: theme.color }]}>
        Mobile Application Developer
      </Text>
      <Text style={[styles.text, { color: theme.color }]}>
        A.K.A Juggernaut.dev
      </Text>
    </ScrollView>
  );
};

export default PersonalInfo;
