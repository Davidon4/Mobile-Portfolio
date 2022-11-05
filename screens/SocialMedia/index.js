import React, { useContext } from "react";
import { View, Text, Linking, ScrollView } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import ThemeContext from "../../config/ThemeContext";
import CategoryButton from "../../components/CategoryButton";
import { styles } from "./styles";

const twitterLink = () => {
  const url = `https://twitter.com/JuggernautMain`;
  Linking.openURL(url);
};
const githubLink = () => {
  const url = `https://github.com/Davidon4`;
  Linking.openURL(url);
};
const linkedInLink = () => {
  const url = `https://www.linkedin.com/in/ezeluaku-david-538201236`;
  Linking.openURL(url);
};
const instagramLink = () => {
  const url = `https://www.instagram.com/juggernaut.dev`;
  Linking.openURL(url);
};

const SocialMedia = () => {
  const theme = useContext(ThemeContext);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: theme.color }]}>
          Check me out on the following platform:
        </Text>
      </View>
      <View style={styles.buttonContainer1}>
        <CategoryButton
          onPress={() => twitterLink()}
          name="Twitter"
          icon={<Entypo name="twitter" size={36} color="white" />}
        />
        <CategoryButton
          onPress={() => githubLink()}
          name="Github"
          icon={<AntDesign name="github" size={36} color="white" />}
        />
      </View>
      <View style={styles.buttonContainer2}>
        <CategoryButton
          onPress={() => linkedInLink()}
          name="LinkedIn"
          icon={<Entypo name="linkedin" size={36} color="white" />}
        />
        <CategoryButton
          onPress={() => instagramLink()}
          name="Instagram"
          icon={<Entypo name="instagram" size={36} color="white" />}
        />
      </View>
    </ScrollView>
  );
};

export default SocialMedia;
