import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground
} from "react-native";
import PresetScenarioPage from "./PresetScenarioPage";
import CustomScenarioPage from "./CustomScenarioPage";
import IsLoading from "./IsLoading";
import * as Font from "expo-font";

export default class Home extends Component {
  state = {
    selectedLink: "presets",
    isVisible: false,
    isLoading: true
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={styles.scrollViewBox}>
          <IsLoading />
        </View>
      );
    }
    return (
      <View style={styles.homePageOuterBox}>
        <ImageBackground
          resizeMode="cover"
          source={{
            uri:
              "https://www.freevector.com/uploads/vector/preview/19162/Free_Forest_Background_Vector.jpg"
          }}
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
            top: 0,
            left: 0,

            alignItems: "center"
          }}
        >
          <View style={styles.navBarLinks}>
            <TouchableOpacity
              style={
                this.state.selectedLink === "custom"
                  ? styles.topLink
                  : styles.notLink
              }
              onPress={() => {
                this.handlePress("presets");
              }}
            >
              <Text style={styles.linkText}>Presets</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.selectedLink === "presets"
                  ? styles.topLink
                  : styles.notLink
              }
              onPress={() => {
                this.handlePress("custom");
              }}
            >
              <Text style={styles.linkText}>My Scenarios</Text>
            </TouchableOpacity>
          </View>

          {this.state.selectedLink === "presets" ? (
            <PresetScenarioPage />
          ) : (
            <CustomScenarioPage />
          )}
        </ImageBackground>
      </View>
    );
  }
  componentDidMount() {
    Font.loadAsync({
      Oswald: require("../fonts/Oswald-Bold.ttf")
    }).then(() => {
      this.setState({ isLoading: false });
    });
  }
  handlePress = selectedLink => {
    this.setState({
      selectedLink
    });
  };
}

const styles = StyleSheet.create({
  scrollViewBox: {
    height: "100%"
  },
  homePageOuterBox: {
    height: "89%"
  },
  navBarLinks: {
    fontFamily: "Oswald",
    flexDirection: "row",
    height: 50,
    width: "100%",
    fontSize: 50
  },
  topLink: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7
  },
  notLink: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50
  },
  linkText: {
    fontFamily: "Oswald",
    fontSize: 30,
    color: "white"
  }
});
