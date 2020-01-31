import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
import { Link } from "react-router-native";
import ScenarioCards from "./ScenarioCards";
import IsLoading from "./IsLoading";

export default class CustomScenarioCard extends Component {
  state = {
    scenarios: [
      {
        scenarioSlug: "Beach",
        image: require("../image/SFC09791.jpg")
      },
      {
        scenarioSlug: "Land mass",
        image: require("../image/IMG_7115.jpeg")
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
          <Link to="/scenario/new">
            <View style={styles.addASoundCardSingleBox}>
              <Text style={styles.addASoundsCardText}>add that sound!!!</Text>
            </View>
          </Link>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewBox: {
    backgroundColor: "#660000",
    height: "100%"
  },
  presetsCardBox: {
    flexDirection: "row",
    backgroundColor: "#660000",
    height: "100%",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  addASoundCardSingleBox: {
    borderRadius: 20,
    margin: 15,
    width: 150,
    height: 100,
    marginBottom: 0,
    justifyContent: "space-around",
    // justify: "center"
    backgroundColor: "white"
  },
  addASoundCardText: {
    alignSelf: "center",
    fontSize: 30
  }
});
