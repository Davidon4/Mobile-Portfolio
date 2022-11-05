import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import ThemeContext from "../../config/ThemeContext";
import { styles } from "./styles";

const About = () => {
  const theme = useContext(ThemeContext);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: theme.color }]}>
          "Hi there, I’m a highly-skilled mobile app developer who is based in
          nigeria, I enjoy engaging in projects with a passion to bring ideas to
          life, creating beautiful and functional user-friendly and seamless
          mobile applications. I am an enthusiastic, self-motivated and hard
          working person. I am a team worker and adaptable to challenging
          situations. I am able to work well both in a team environment as well
          as using own initiative. When I’m not coding, I enjoy watching
          football, watching latest movies and surfing the internet".
        </Text>
      </View>
    </ScrollView>
  );
};

export default About;
