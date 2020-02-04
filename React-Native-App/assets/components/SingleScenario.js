import React, { Component } from "react";
import { View, ScrollView, StyleSheet, ImageBackground } from "react-native";
import Transport from "./Transport";
import ChannelList from "./ChannelList";
import * as engine from "../utils/audio-engine";
import scenarios from "../data/scenarios";
import sounds from "../data/sounds";

export default class SingleScenario extends Component {
  state = {
    name: "",
    slug: "",
    creator_id: null,
    color_scheme: [],
    is_public: null,
    likes: null,
    channels: [],
    playing: false,
    highlightedChannel: "",
    soloChannel: ""
  };
  startScenario = () => {
    const { playing, name, channels } = this.state;
    console.log(`Starting scenario: ${name}`);
    if (!playing) {
      this.setState({ playing: true });
      engine.unmuteAll();
      engine.playBackgroundHowls(channels);
      const randomChannels = channels.filter(channel => {
        return channel.type === "random";
      });
      randomChannels.forEach(channel => {
        const { slug, frequency } = channel;
        // const { playQueue } = channel;
        engine.startRandomHowls();
        engine.loop(slug, frequency, this.playNextRandomSound, playing);
      });
    }
  };

  componentWillUnmount() {
    this.stopScenario();
  }

  stopScenario = () => {
    const { playing } = this.state;
    const { name, channels } = this.state;
    console.log(`Stopping scenario: ${name}`);
    if (playing) {
      this.setState({ playing: false });
    }
    channels.forEach(channel => {
      const { slug, type } = channel;
      if (type === "background") {
        engine.stopHowl(slug);
      } else if (type === "random") {
        engine.stopHowl(slug);
      }
    });
    engine.stopRandomHowls();
    engine.muteAll();
  };

  playNextRandomSound = slug => {
    const { channels } = this.state;
    const thisChannel = channels.filter(channel => {
      return channel.slug === slug;
    })[0];
    const otherChannels = channels.filter(channel => {
      return channel.slug !== slug;
    });
    const { volume, pan, urls } = thisChannel;
    const newPlayQueue = [...thisChannel.playQueue];
    const thisURL = newPlayQueue.shift();
    engine.playHowl(thisURL, volume, pan);
    if (newPlayQueue.length > 0) {
      thisChannel.playQueue = newPlayQueue;
    } else {
      const shuffledURLs = urls.sort(() => Math.random() - 0.5);
      thisChannel.playQueue = shuffledURLs;
    }
    const newChannels = [thisChannel, ...otherChannels];
    newChannels.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({
      channels: newChannels
    });
  };

  toggleHighlightedChannel = slug => {
    const { highlightedChannel } = this.state;
    this.setState({
      highlightedChannel: highlightedChannel === slug ? "" : slug
    });
  };

  toggleSoloChannel = slug => {
    const { soloChannel } = this.state;
    this.setState({
      soloChannel: soloChannel === slug ? "" : slug
    });
  };

  changeVolume = (slug, value) => {
    console.log("change volume");
    engine.changeVolumeOfHowl(slug, value);
  };
  changeFrequency = (slug, value) => {
    console.log("change frequency");
    const { channels } = this.state;
    const thisChannel = channels.filter(channel => {
      return channel.slug === slug;
    })[0];
    const otherChannels = channels.filter(channel => {
      return channel.slug !== slug;
    });
    const { frequency, ...keys } = thisChannel;
    const newChannel = { ...keys, frequency: value };
    const newChannels = [...otherChannels, newChannel];
    newChannels.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({ channels: newChannels });
  };

  render() {
    const { channels, playing, highlightedChannel, soloChannel } = this.state;
    // console.log(channels);
    return (
      <View>
        <ScrollView alwaysBounceVertical={false} alwaysBounceHorizontal={false}>
          <View style={styles.contentContainer}>
            <ImageBackground
              resizeMode="cover"
              source={{
                uri:
                  "https://www.freevector.com/uploads/vector/preview/19162/Free_Forest_Background_Vector.jpg"
              }}
              style={{
                height: "100%",
                width: "100%",
                // position: "relative",
                top: 0,
                left: 0,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <ChannelList
                channels={channels}
                playing={playing}
                toggleHighlightedChannel={this.toggleHighlightedChannel}
                toggleSoloChannel={this.toggleSoloChannel}
                highlightedChannel={highlightedChannel}
                soloChannel={soloChannel}
                changeVolume={this.changeVolume}
                changeFrequency={this.changeFrequency}
                playNextRandomSound={this.playNextRandomSound}
              />
            </ImageBackground>
          </View>
        </ScrollView>
        <View style={styles.contentContainer}>
          <Transport
            stopScenario={this.stopScenario}
            startScenario={this.startScenario}
          />
        </View>
      </View>
    );
  }
  componentDidMount() {
    engine.unmuteAll();
    const { scenario_id } = this.props.location.state;
    console.log(scenario_id);
    const filteredScenario = scenarios.filter(scenario => {
      return scenario.slug === scenario_id;
    })[0];
    const {
      name,
      slug,
      creator_id,
      color_scheme,
      is_public,
      likes
    } = filteredScenario;
    const newChannels = [];
    filteredScenario.sounds.forEach(sound => {
      const { id } = sound;
      const filteredSound = sounds.filter(sound => {
        return sound.id === id;
      })[0];
      const newChannel = {
        ...filteredSound,
        ...sound,
        playQueue: filteredSound.urls
      };
      newChannels.push(newChannel);
    });

    this.setState({
      name: name,
      slug: slug,
      creator_id: creator_id,
      color_scheme: color_scheme,
      is_public: is_public,
      likes: likes,
      channels: newChannels
    });
    engine.loadAllHowls(newChannels);
  }

  componentDidUpdate() {}
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 50,
    marginBottom: 60,
    alignItems: "center"
  },
  transportStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100
  }
});
