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
    soloChannel: "",
    showPicker: false
  };
  startScenario = () => {
    const { playing, name, channels } = this.state;
    if (!playing) {
      this.setState({ playing: true });
      engine.unmuteAll();
      engine.playBackgroundHowls(channels);
      const randomChannels = channels.filter(channel => {
        return channel.type === "random";
      });
      randomChannels.forEach(channel => {
        const { slug, frequency } = channel;
        engine.startOneRandomChannel(slug, frequency, this.playNextRandomSound);
      });
    }
  };

  componentWillUnmount() {
    this.stopScenario();
  }

  stopScenario = () => {
    const { playing } = this.state;
    const { name, channels } = this.state;
    if (playing) {
      this.setState({ playing: false });
    }
    channels.forEach(channel => {
      const { slug, type } = channel;
      if (type === "background") {
        engine.stopHowl(slug);
      }
      engine.stopOneRandomChannel(channel.slug);
    });
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
  handleBGS = (choice) => {
   //Handle Background Sounds to be used for updating a new background sound.
  };

  handleAdder = () => {
    this.setState(currentState => {
      return { showPicker: !currentState.showPicker };
    });
    if(this.state.showPicker === false) this.handleBGS()
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

  muteSolo = (url, bool) => {
    const { channels } = this.state;
    channels.forEach(channel => {
      if (channel.slug === url && channel.type === "background") {
        engine.muteIndividualSound(url, bool);
      }
      if (
        channel.slug === url.substring(0, channel.slug.length) &&
        bool === false
      ) {
        engine.stopOneRandomChannel(channel.slug, bool);
      }
      if (
        channel.slug === url.substring(0, channel.slug.length) &&
        bool === true
      ) {
        engine.startOneRandomChannel(channel.slug);
      }
    });
  };

  changeVolume = (slug, value) => {
    const { channels } = this.state;
    const thisChannel = channels.filter(channel => {
      return channel.slug === slug;
    })[0];
    const otherChannels = channels.filter(channel => {
      return channel.slug !== slug;
    });
    const { volume, ...keys } = thisChannel;
    const newChannel = { ...keys, volume: value };
    const newChannels = [...otherChannels, newChannel];
    newChannels.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({ channels: newChannels });
    engine.changeVolumeOfHowl(slug, value);
  };
  changeFrequency = (slug, value) => {
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
    return (
      <View style={styles.outerView}>
        <ScrollView
          style={styles.scrollView}
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
        >
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
                top: 0,
                left: 0,
                alignItems: "center"
              }}
            >
              <ChannelList
                showPicker={this.state.showPicker}
                handleAdder={this.handleAdder}
                muteSolo={this.muteSolo}
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
  scrollView: {
    height: "100%",
    marginBottom: 80
  },
  outerView: {
    height: "89%",
    top: 0
  },
  contentContainer: {
    marginBottom: 0,
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
