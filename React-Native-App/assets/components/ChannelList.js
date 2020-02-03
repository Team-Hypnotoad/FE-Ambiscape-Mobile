import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { List, ListItem } from "react-native-elements";
import ChannelCard from "./ChannelCard";

const ChannelList = ({
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
          key={sound.id}
          sound={sound}
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
          <Text style={{ color: "white" }}>Background Sounds</Text>
          {channels.map(sound => {
            if (sound.type === "background") {
              return renderChannelCard(sound);
            }
          })}
        </View>
        <View key="RandomSound" style={styles.itemsRandom}>
          <Text style={{ color: "white" }}>Random Sounds</Text>
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
  // contentContainer: {
  //   paddingVertical: 20
  // },
  itemsBg: {
    marginTop: 120,
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
    opacity: 0.8,
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 8,
    marginTop: 20
  }
});
export default ChannelList;
