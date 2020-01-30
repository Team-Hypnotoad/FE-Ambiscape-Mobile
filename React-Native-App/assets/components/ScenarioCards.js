import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default function ScenarioCards({ scenario }) {
  return (
    <View style={styles.presetCardSingleBox}>
      <TouchableOpacity>
        <ImageBackground
          source={scenario.image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20
          }}
          imageStyle={{ borderRadius: 20 }}
        >
          <Text style={styles.presetsCardText}>{scenario.scenarioSlug}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  presetCardSingleBox: {
    borderRadius: 45,
    margin: 15,
    marginTop: 20,
    marginBottom: 20,
    width: 150,
    height: 100,
    justifyContent: "space-around"
    // justify: "center"
    // backgroundColor: "white"
  },
  presetsCardText: {
    alignSelf: "center",
    fontSize: 30
  }
});
