import React, { Component } from "react";
import { Audio } from "expo-av";
import backgroundData from "../audio/background/background-index";
import { Header } from "./Header";

import {
  StyleSheet,
  Text,
  View,
  Slider,
  Picker,
  TouchableOpacity
} from "react-native";

export default class PickerMenu extends Component {
  state = {
    volume: 0.5,
    frequency: 0.5,
    selectedBGS: "",
    soundsIndex: [],
    isPlaying: false,
    BGsound1: null
  };
  render() {
    const { soundsIndex } = this.state;
    return (
      <>
        <View style={styles.picker}>
          <Picker
            mode="dropdown"
            selectedValue={this.state.selectedBGS}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ selectedBGS: itemValue })
            }
          >
            {soundsIndex.map(sound => {
              return (
                <Picker.Item
                  key={sound}
                  label={sound}
                  value={sound}
                />
              );
            })}
          </Picker>
        </View>
      </>
    );
  }
  componentDidMount() {
    this.setState({
      soundsIndex: Object.keys(backgroundData),
      selectedBGS: Object.keys(Object.keys(backgroundData)[0])
    });
  }
  Handlestop = () => {
    this.state.BGsound1.stopAsync();
    this.setState({ isPlaying: false });
  };

  Handlepress = () => {
    const { isPlaying } = this.state;
    isPlaying ? this.Handlepause() : this.playSound();
  };
  Handlepause = () => {
    this.state.BGsound1.pauseAsync();
    this.setState({ isPlaying: false });
  };

  playSound = () => {
    const { selectedBGS, isPlaying } = this.state;
    const BGsound1 = new Audio.Sound();
    BGsound1.loadAsync(selectedBGS, {
      isLooping: true,
      volume: this.state.volume,
      shouldPlay: true
    });
    this.setState({ BGsound1, isPlaying: true });
  };
}
const styles = StyleSheet.create({
  picker: {
    flexDirection: "column"
  },
  innerBox: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  outerBox: {
    flex: 7,
    justifyContent: "center"
  }
});
