import React, { Component } from "react";
import { View } from "react-native";
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
    const { randomSoundSpawner } = this;
    const { playing, name, channels } = this.state;
    console.log(`Starting scenario: ${name}`);
    if (!playing) {
      this.setState({ playing: true });
      // engine.unmuteAll();
      engine.playBackgroundHowls(channels);
      const randomChannels = channels.filter(channel => {
        return channel.type === "random";
      });
      randomChannels.forEach(channel => {
        const { slug } = channel;
        const { playQueue } = channel;
        // engine.randomSoundSpawner(playerFunction, slug, playing);
        // engine.startRandomHowls();
        engine.loop(slug, this.playNextRandomSound, playing);
      });
    }
  };

  stopScenario = () => {
    const { playing } = this.state;
    const { name, channels } = this.state;
    console.log(`Stopping scenario: ${name}`);
    if (playing) {
      this.setState({ playing: false });
    }
    engine.muteAll();
    engine.stopRandomHowls();

    channels.forEach(channel => {
      const { slug, type } = channel;
      // if (type === "background") {
      engine.stopHowl(slug);
      // }
    });
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
        <Transport startScenario={this.startScenario} />
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
      </View>
    );
  }
  componentDidMount() {
    const { scenario_id } = this.props.location.state;
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
