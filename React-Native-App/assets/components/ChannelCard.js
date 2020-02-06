import React, { Component } from "react";
import {
  View,
  Text,
  Slider,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

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
  handleChangeVolume = (itemValue, itemIndex) => {
    const { changeVolume } = this.props;
    const { slug } = this.state;
    this.setState({ volume: itemValue });
    changeVolume(slug, itemValue);
  };

  //  handleChangePan = event => {
  //    const { value } = event.target;
  //    const { changePan } = this.props;
  //    const { slug } = this.state;
  //    this.setState({ pan: value });
  //    changePan(slug, value);
  //  };

  handleChangeFrequency = (itemValue, itemIndex) => {
    const { changeFrequency } = this.props;
    const { slug } = this.state;
    this.setState({ frequency: itemValue });
    changeFrequency(slug, itemValue);
  };

  handleToggleHighlight = () => {
    const { slug } = this.state;
    const { toggleHighlight } = this.props;
    toggleHighlight(slug);
  };

  handleToggleMute = (url, bool) => {
    this.props.muteSolo(url, bool);
  };

  handleToggleSolo = () => {};

  render() {
    const {
      name,
      id,
      slug,
      type,
      loop,
      sprite,
      volume,
      frequency
    } = this.state;
    const { isHighlighted, highlightChannel } = this.props;
    const renderChannelVolume = () => {
      return (
        <View style={StyleSheet.OuterBox}>
          {isHighlighted && (
            <Text style={{ color: "white", alignSelf: "center" }}>Volume</Text>
          )}
          <Slider
            minimumTrackTintColor="green"
            value={this.state.volume}
            step={0.1}
            onValueChange={(itemValue, itemIndex) =>
              this.handleChangeVolume(itemValue, itemIndex)
            }
            style={{
              width: "80%",
              alignSelf: "center"
            }}
          />
        </View>
      );
    };
    const renderChannelButtons = () => {
      return (
        <>
          <TouchableOpacity
            onPress={() => {
              this.handleToggleMute(this.state.slug, this.state.mute);
              this.setState(currentState => {
                return { mute: !currentState.mute };
              });
            }}
          >
            <Text style={{ alignSelf: "center", color: "white", fontSize: 25, paddingBottom:15, paddingTop:15 }}>
              {this.state.mute ? "🔇" : "🔈"}
            </Text>
          </TouchableOpacity>
          {/* <Button title="S" onPress={this.handleToggleSolo}></Button> */}
        </>
      );
    };
    const renderChannelFrequency = () => {
      return (
        <>
          <Text style={{ color: "white", alignSelf: "center" }}>Frequency</Text>
          <Slider
            minimumTrackTintColor="green"
            value={this.state.frequency}
            step={0.1}
            onValueChange={(itemValue, itemIndex) => {
              this.handleChangeFrequency(itemValue, itemIndex);
            }}
            style={{
              width: "80%",
              alignSelf: "center"
            }}
          />
        </>
      );
    };
    if (isHighlighted) {
      return (
        <View key={id}>
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              marginTop: 10,
              fontSize: 20
            }}
          >
            {name}
          </Text>
          {renderChannelButtons()}
          {renderChannelVolume()}
          {type === "random" && renderChannelFrequency()}
          <Button title="^" onPress={this.handleToggleHighlight}></Button>
        </View>
      );
    } else {
      return (
        <View key={id}>
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              marginTop: 10,
              fontSize: 20
            }}
          >
            {name}
          </Text>
          {renderChannelVolume()}
          <Button title="⌄" onPress={this.handleToggleHighlight}></Button>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  OuterBox: {
    marginBottom: 30
  }
});
