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
        <View>
          <Link
            to={{
              pathname: "/scenario/new",
              state: { scenario_id: "forest" }
            }}
          >
            <View scenario_id="forest" style={styles.addASoundCardSingleBox}>
              <Text style={styles.addASoundCardText}>Add New</Text>
            </View>
          </Link>
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
    borderRadius: 10,
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
    flexWrap: "wrap",
    justifyContent: "center",
    fontSize: 20,
    color: "white"
  }
});
