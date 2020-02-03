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
    ]
  };

  render() {
    const { scenarios } = this.state;
    return (
      <ScrollView style={styles.scrollViewBox}>
        <View style={styles.presetsCardBox}>
          {scenarios.map(scenario => {
            return <ScenarioCards scenario={scenario} key={scenario.creator_id} />;
          })}
          <Link
            to={{
              pathname: "/scenario/new",
              state: { scenario_id: "italianbirds" }
            }}
          >
            <View
              scenario_id={"italianbirds"}
              style={styles.addASoundCardSingleBox}
            >
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
