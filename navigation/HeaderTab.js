import React, { useState } from "react";
import { SafeAreaView, Switch } from "react-native";

import { EventRegister } from "react-native-event-listeners";

const HeaderTabs = ({}) => {
  const [mode, setMode] = useState(false);
  return (
    <SafeAreaView style={{ right: -9, position: "relative" }}>
      <Switch
        value={mode}
        onValueChange={(value) => {
          setMode(value);
          EventRegister.emit("changeTheme", value);
        }}
      />
    </SafeAreaView>
  );
};

export default HeaderTabs;
