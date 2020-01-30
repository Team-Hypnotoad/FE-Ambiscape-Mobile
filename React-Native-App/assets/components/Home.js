import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import PresetScenarioPage from "./PresetScenarioPage";
import CustomScenarioPage from "./CustomScenarioPage";

export default class Home extends Component {
  state = {
    selectedLink: "presets"
  };

  render() {
    return (
      <>
        <View style={styles.navBarLinks}>
          <TouchableOpacity
            style={styles.presetsLink}
            onPress={() => {
              this.handlePress("presets");
            }}
          >
            <Text style={styles.presetsLink}>Presets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.customLink}
            onPress={() => {
              this.handlePress("custom");
            }}
          >
            <Text style={styles.customLink}>My Scenarios</Text>
          </TouchableOpacity>
        </View>

        {this.state.selectedLink === "presets" ? (
          <PresetScenarioPage />
        ) : (
          <CustomScenarioPage />
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
    height: 40,
    width: "100%",
    fontFamily: "Montserrat"
  },
  presetsLink: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#143642",
    fontSize: 30
  },
  customLink: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#660000",
    fontSize: 30
  }
});
