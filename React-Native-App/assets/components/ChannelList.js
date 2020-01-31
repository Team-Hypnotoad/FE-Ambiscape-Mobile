import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
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
      <>
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
      </>
    );
  };

  if (channels.length > 0) {
    return (
      <ScrollView containerStyle={{ margin: 10 }}>
        <View key="bgSounds">
          <Text>Background Sounds</Text>
          {channels.map(sound => {
            if (sound.type === "background") {
              return renderChannelCard(sound);
            }
          })}
        </View>
        <View key="RandomSound">
          <Text>Random Sounds</Text>
          {channels.map(sound => {
            if (sound.type === "random") {
              return renderChannelCard(sound);
            }
          })}
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
};
export default ChannelList;
