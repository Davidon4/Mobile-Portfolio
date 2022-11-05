import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import ThemeContext from "../../config/ThemeContext";
import { styles } from "./styles";

const Experience = () => {
  const theme = useContext(ThemeContext);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: theme.color }]}>
          I am a mobile app developer with 1yr+ experience. I have been involved
          in building projects with teams (a canadian dating app and a female
          sexual assault report app) and worked on personal project as well. I
          also have good experience with working with the backend and building
          website. {"\n"}As much as I like solving problems and working on
          projects, Honesty is my domain as I have been the lead in a team
          before, I love to get/give honest feedbacks from/to team members on
          what the progress is like. {"\n"}I see myself as not the typical
          programmer who wants to be on his system all day but I also love to be
          involved in the management aspect as well, I am from an
          entreprenuerial background, growing up my father leaves me to handle
          the shop and sell goods for him.{"\n"}
          This aspect of responsibility has molded towards my journey as a
          co-founder of an e-commerce startup. I organize meetings with other
          members of the team involving the ui/ux designer, graphic designers,
          developers and social media account manager of the company and also
          have a one-on-one discussion with each and everyone of them to discuss
          areas we need to improve on.{"\n"}This has helped improved me as a
          developer as I have learnt to be consistent and fast in executing out
          features.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Experience;
