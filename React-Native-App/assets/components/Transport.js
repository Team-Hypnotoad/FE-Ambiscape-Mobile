import React from "react";
import { View, TouchableOpacity, Button } from "react-native";

const styling = {
  // border: "1px solid",
  backgroundColor: "#ECDD7B"
};

const Transport = ({ startScenario, stopScenario }) => {
  const handleStart = () => {
    startScenario();
  };

  const handleStop = () => {
    stopScenario();
  };

  return (
    <View>
      <Button title="play" onPress={handleStart}></Button>
      <Button title="Stop" onPress={handleStop}></Button>
    </View>
  );
};

export default Transport;
