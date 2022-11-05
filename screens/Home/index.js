import React, { useContext } from "react";
import { View, ScrollView, Image } from "react-native";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../config/ThemeContext";

import CategoryButton from "../../components/CategoryButton";
import { styles } from "./styles";

const Home = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/Image.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.buttonContainer1}>
          <CategoryButton
            onPress={() => navigation.navigate("PersonalInfo")}
            name="Personal Info"
            icon={<FontAwesome5 name="info" size={36} color="white" />}
          />
          <CategoryButton
            onPress={() => navigation.navigate("About")}
            name="About"
            icon={<FontAwesome5 name="user-alt" size={36} color="white" />}
          />
        </View>
        <View style={styles.buttonContainer2}>
          <CategoryButton
            onPress={() => navigation.navigate("SocialMedia")}
            name="Social Media"
            icon={<Ionicons name="md-phone-portrait" size={36} color="white" />}
          />
          <CategoryButton
            onPress={() => navigation.navigate("Experience")}
            name="Experience"
            icon={<MaterialIcons name="work" size={36} color="white" />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
