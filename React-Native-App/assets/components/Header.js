import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import { Overlay } from "react-native-elements";

export default class Header extends Component {
  state = {
    isVisible: false
  };

  render() {
    return (
      <View style={styles.headerBox}>
        <Link to="/home">
          <Image source={require("../image/icons8-frog-96.png")}></Image>
        </Link>
        <TouchableOpacity onPress={this.handlePress}>
          <Image source={require("../image/icons8-menu-48.png")}></Image>
        </TouchableOpacity>
        <Overlay
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          // windowBackgroundColor="rgba(255, 255, 255, .5)"
          width="70%"
          height="70%"
          overlayBackgroundColor="black"
          // borderRadius="20"
          opacity="1"
          alignItems="center"
          justifyContent="space-evenly"
          style={styles.overlayBox}
        >
          <View style={styles.settingsMenuBox}>
            <TouchableOpacity>
              <Text style={styles.settingsMenuText}>Settings</Text>
            </TouchableOpacity>
            <Link
              to="/aboutus"
              onPress={() => this.setState({ isVisible: false })}
            >
              <Text style={styles.settingsMenuText}>About Us</Text>
            </Link>
            <TouchableOpacity>
              <Text style={styles.settingsMenuText}>Help</Text>
            </TouchableOpacity>
            <Link to="/" onPress={() => this.setState({ isVisible: false })}>
              <Text style={styles.settingsMenuText}>Log out</Text>
            </Link>
          </View>
        </Overlay>
      </View>
    );
  }

  handlePress = back => {
    const { isVisible } = this.state;
    if (back === "close") {
      this.setState({ isVisible: false });
    }
    this.setState({ isVisible: true });
  };
}

const styles = StyleSheet.create({
  headerBox: {
    height: 90,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 10
  },
  hamburgerImage: {
    marginTop: 10,
    marginRight: 10
  },
  overlayBox: {
    borderRadius: 20,
    backgroundColor: "black",
    height: "40%",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8
  },
  settingsMenuBox: {
    height: "100%",
    justifyContent: "space-evenly"
  },
  settingsMenuText: {
    fontSize: 40,
    alignSelf: "center",
    color: "white"
  }
});
