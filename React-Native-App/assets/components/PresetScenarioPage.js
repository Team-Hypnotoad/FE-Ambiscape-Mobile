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
import IsLoading from "./IsLoading";

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
    ],
    isLoading: false
  };

  render() {
    const { scenarios, isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={styles.scrollViewBox}>
          <IsLoading />
        </View>
      );
    }
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
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
});
