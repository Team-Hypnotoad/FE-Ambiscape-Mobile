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
      }
    ]
  };

  render() {
    const { scenarios } = this.state;
    return (
      <ScrollView style={styles.scrollViewBox}>
        <View style={styles.presetsCardBox}>
          {scenarios.map(scenario => {
            return (
              <Link
                to={{
                  pathname: "/scenario/new",
                  state: { scenario_id: `${scenario.slug}` }
                }}
              >
                <View
                  scenario_id={scenario.slug}
                  style={styles.addASoundCardSingleBox}
                >
                  <Text style={styles.addASoundsCardText}>{scenario.name}</Text>
                </View>
              </Link>
              // <ScenarioCards scenario={scenario} key={scenario.creator_id} />
            );
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
