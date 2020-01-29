import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import PresetScenarioCard from "./PresetScenarioCard";
import CustomScenarioCard from "./CustomScenarioCard";

export default class Home extends Component {
  state = {
    selectedLink: "presets"
  };

  render() {
    return (
      <>
        <View style={styles.navBarLinks}>
          <TouchableOpacity
            onPress={() => {
              this.handlePress("presets");
            }}
          >
            <Text>Presets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.handlePress("custom");
            }}
          >
            <Text>My Scenarios</Text>
          </TouchableOpacity>
        </View>
        {this.state.selectedLink === "presets" ? (
          <PresetScenarioCard />
        ) : (
          <CustomScenarioCard />
        )}
      </>
    );
  }

  handlePress = selectedLink => {
    this.setState({
      selectedLink
    });
  };
}

const styles = StyleSheet.create({
  navBarLinks: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
