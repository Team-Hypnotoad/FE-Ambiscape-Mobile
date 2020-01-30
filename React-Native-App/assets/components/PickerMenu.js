import React, { Component } from "react";
import { Audio } from "expo-av";
import { audioData } from "../audio/sounds-index";
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
    frequency: 25000,
    selectedBGS: "american-teenagers-sprite.m4a",
    soundsIndex: [],
    isPlaying: false,
    BGsound1: null
  };
  render() {
    console.log(this.state.selectedBGS);
    return (
      <>
        {/* <Header /> */}
        <View style={styles.outerBox}>
          <TouchableOpacity style={styles.innerBox} onPress={this.Handlepress}>
            <Text style={styles.headText}>Play/Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.innerBox} onPress={this.Handlestop}>
            <Text style={styles.headText}>Stop</Text>
          </TouchableOpacity>
          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.selectedBGS}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ selectedBGS: itemValue })
              }
            >
              {this.state.soundsIndex.map(sound => {
                return (
                  <Picker.Item
                    key={sound}
                    label={sound}
                    value={audioData[sound]}
                  />
                );
              })}
            </Picker>
          </View>

          <View style={styles.innerBox}>
            <Text>Volume</Text>
            <Slider
              style={{ width: "60%" }}
              value={this.state.volume}
              onValueChange={volume => this.setState({ volume })}
            />
          </View>

          <View style={styles.innerBox}>
            <Text>Freq</Text>
            <Slider
              minimumValue={8000}
              maximumValue={40000}
              style={{ width: "60%" }}
              value={this.state.frequency}
              onValueChange={frequency => this.setState({ frequency })}
            />
          </View>
        </View>
      </>
    );
  }
  componentDidMount() {
    this.setState({
      soundsIndex: Object.keys(audioData),
      selectedBGS: audioData["americanTeenagersSprite"]
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
