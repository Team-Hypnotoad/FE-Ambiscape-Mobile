import React from "react";
import { View, TouchableOpacity, Button, StyleSheet, Text } from "react-native";

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
    <View style={styles.transportStyle}>
      <TouchableOpacity onPress={handleStart}>
        <Text style={styles.TouchableOpacity}>▷</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleStop}>
        <Text style={styles.TouchableOpacity2}>□</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  transportStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
    marginBottom: 0,
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  TouchableOpacity: {
    fontSize: 50,
    color: "white"
    // justifyContent: "center"
  },
  TouchableOpacity2: {
    fontSize: 50,
    color: "white"
    // alignSelf: "center"
    // justifyContent: "center"
  }
});

export default Transport;
