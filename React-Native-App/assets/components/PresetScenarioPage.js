import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Link } from "react-router-native";
import ScenarioCards from "./ScenarioCards";
import IsLoading from "./IsLoading";

export default class CustomScenarioCard extends Component {
  state = {
    scenarios: [
      {
        name: "Forest",
        slug: "forest"
        // image: require("../image/SFC09791.jpg")
      },
      {
        name: "Beach",
        slug: "beach"
        // image: require("../image/IMG_7115.jpeg")
      },
      {
        name: "City",
        slug: "city"
        // image: require("../image/SFC09791.jpg")
      },
      {
        name: "Woodland Camp",
        slug: "woodland"
        // image: require("../image/IMG_7115.jpeg")
      },
      {
        name: "Birdsong",
        slug: "birdsong"
        // image: require("../image/SFC09791.jpg")
      },
      {
        name: "Waterfall",
        slug: "waterfall"
        // image: require("../image/IMG_7115.jpeg")
      },
      {
        name: "Farmyard",
        slug: "farmyard"
        // image: require("../image/SFC09791.jpg")
      },
      {
        name: "Rainstorm",
        slug: "rainstorm"
        // image: require("../image/IMG_7115.jpeg")
      },
      { 
        name: "Dungeon",
        slug: "dungeon" 
      },
      {
        name: "Dungeon",
        slug: "dungeon"
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
            return (
              <Link
                key={scenario.slug}
                to={{
                  pathname: "/scenario/new",
                  state: { scenario_id: `${scenario.slug}` }
                }}
              >
                <View
                  scenario_id={scenario.slug}
                  style={styles.addASoundCardSingleBox}
                >
                  <Text style={styles.addASoundCardText}>{scenario.name}</Text>
                </View>
              </Link>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewBox: {
    height: "100%"
  },
  presetsCardBox: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  addASoundCardSingleBox: {
    borderRadius: 20,
    margin: 10,
    width: 160,
    height: 100,
    marginBottom: 0,
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "black",
    opacity: 0.7,
    alignItems: "center"
  },
  addASoundCardText: {
    alignSelf: "center",
    // flexWrap: "wrap",
    // justifyContent: "center",
    fontSize: 20,
    color: "white"
  }
});
