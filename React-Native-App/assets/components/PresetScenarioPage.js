import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import ScenarioCards from "./ScenarioCards";

export default class PresetScenarioCard extends Component {
  state = {
    scenarios: [
      {
        scenarioSlug: "Beach",
        image: require("../image/SFC09791.jpg")
      },
      {
        scenarioSlug: "Land mass",
        image: require("../image/IMG_7115.jpeg")
      },
      {
        scenarioSlug: "Leaf Wet",
        image: require("../image/SFC09791.jpg")
      }
    ]
  };

  render() {
    const { scenarios } = this.state;
    return (
      <ScrollView style={styles.scrollViewBox}>
        <View style={styles.presetsCardBox}>
          {scenarios.map(scenario => {
            return <ScenarioCards scenario={scenario} />;
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewBox: {
    backgroundColor: "#143642",
    height: "100%"
  },
  presetsCardBox: {
    flexDirection: "row",
    backgroundColor: "#143642",
    height: "100%",
    width: "100%",
    flexWrap: "wrap"
  }
});
