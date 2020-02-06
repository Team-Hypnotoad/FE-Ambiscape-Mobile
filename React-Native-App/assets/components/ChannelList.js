import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { List, ListItem } from "react-native-elements";
import ChannelCard from "./ChannelCard";
import PickerMenu from "./PickerMenu";

const ChannelList = ({
  handleBGS,
  showPicker,
  handleAdder,
  muteSolo,
  highlightedChannel,
  soloChannel,
  toggleHighlightedChannel,
  toggleSoloChannel,
  changeVolume,
  changeFrequency,
  changePan,
  channels,
  playing,
  playNextRandomSound
}) => {
  const renderChannelCard = sound => {
    return (
      <View style={styles.container}>
        <ChannelCard
          sound={sound}
          muteSolo={muteSolo}
          key={sound.id}
          changeVolume={changeVolume}
          changeFrequency={changeFrequency}
          changePan={changePan}
          isHighlighted={highlightedChannel === sound.slug ? true : false}
          toggleHighlight={toggleHighlightedChannel}
          toggleSoloChannel={toggleSoloChannel}
          volume={sound.volume}
          pan={sound.pan}
          frequency={sound.frequency}
          soloChannel={soloChannel}
          playing={playing}
          playNextRandomSound={playNextRandomSound}
        />
      </View>
    );
  };

  if (channels.length > 0) {
    return (
      <View>
        <View key="bgSounds" style={styles.itemsBg}>
          <Text style={styles.headingText}>Background Sounds</Text>
          {channels.map(sound => {
            if (sound.type === "background") {
              return renderChannelCard(sound);
            }
          })}
        </View>
        {/* <View>
          <TouchableOpacity
            onPress={() => {
              handleAdder();
            }}
          >
            <Text style={{ fontSize: 30 }}>+</Text>
          </TouchableOpacity>
          <>
          {showPicker ? <PickerMenu handleBGS={handleBGS}/> : null}
          </>
        </View> */}
        <View key="RandomSound" style={styles.itemsRandom}>
          <Text style={styles.headingText}>Random Sounds</Text>
          {channels.map(sound => {
            if (sound.type === "random") {
              return renderChannelCard(sound);
            }
          })}
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headingText: {
    color: "white",
    alignSelf: "center",
    fontSize: 20
  },
  itemsBg: {
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
    width: 250
  },
  itemsRandom: {
    marginTop: 40,
    marginRight: 20,
    marginBottom: 20,
    width: 250
  },
  container: {
    color: "white",
    backgroundColor: "black",
    opacity: 0.7,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20
  }
});
export default ChannelList;
