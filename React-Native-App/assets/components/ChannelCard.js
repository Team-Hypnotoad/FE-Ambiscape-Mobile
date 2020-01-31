import React, { Component } from "react";
import { View, Text, Slider } from "react-native";

export default class ChannelCard extends Component {
  state = {
    id: 2,
    name: "",
    slug: "",
    type: "",
    loop: false,
    urls: [],
    volume: 0,
    pan: 0,
    frequency: 0.5,
    mute: false,
    isPlaying: false,
    loopCanStart: true,
    loopIsRunning: false
  };

  componentDidMount() {
    const {
      name,
      slug,
      id,
      type,
      loop,
      urls,
      volume,
      pan,
      frequency
    } = this.props.sound;
    const { playing } = this.props;
    this.setState({
      name,
      id,
      slug,
      type,
      loop,
      urls,
      volume,
      pan,
      frequency
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { playing } = this.props;
      const { urls } = this.state;
      // if (urls.length > 0 && playQueue.length <= 1) {
      //   const newPlayQueue = urls.sort(() => Math.random() - 0.5);
      //   this.setState({ playQueue: newPlayQueue });
    }
    // if (isPlaying && !loopRunning) {
    //   this.loop();
    // }
    // if (!isPlaying && loopRunning) {
    //   this.setState({ loopRunning: false });
    // }

    //   if (type === "random") {
    //     if (playing && !loopIsRunning) {
    //       this.setState({ loopIsRunning: true });
    //       this.loop();
    //     } else if (!playing) {
    //       this.setState({
    //         loopisRunning: false,
    //         loopCanStart: true,
    //         isPlaying: false
    //       });
    //     }
    //   }
    // }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { playing } = this.props;
      const { urls } = this.state;
      // if (urls.length > 0 && playQueue.length <= 1) {
      //   const newPlayQueue = urls.sort(() => Math.random() - 0.5);
      //   this.setState({ playQueue: newPlayQueue });
    }
    // if (isPlaying && !loopRunning) {
    //   this.loop();
    // }
    // if (!isPlaying && loopRunning) {
    //   this.setState({ loopRunning: false });
    // }

    //   if (type === "random") {
    //     if (playing && !loopIsRunning) {
    //       this.setState({ loopIsRunning: true });
    //       this.loop();
    //     } else if (!playing) {
    //       this.setState({
    //         loopisRunning: false,
    //         loopCanStart: true,
    //         isPlaying: false
    //       });
    //     }
    //   }
    // }
  }

  render() {
    const { name, id, slug, type, loop, sprite } = this.state;
    const { isHighlighted, highlightChannel } = this.props;
    return (
      <View>
        {isHighlighted && <Text>Volume</Text>}
        <Slider style={{ width: "60%" }} />
      </View>
    );
  }
}
