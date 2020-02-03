import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Picker,
  TouchableOpacity,
  Button
} from "react-native";
import { Link } from "react-router-native";
import { Overlay } from "react-native-elements";

export default class Header extends Component {
  state = {
    isVisible: false
  };

  render() {
    return (
      <View style={styles.headerBox}>
        <Link to="/">
          <Image source={require("../icons8-frog-96.png")}></Image>
        </Link>
        <TouchableOpacity onPress={this.handlePress}>
          <Image source={require("../icons8-menu-48.png")}></Image>
        </TouchableOpacity>
        <Overlay
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          // windowBackgroundColor="rgba(255, 255, 255, .5)"
          width="40%"
          height="auto"
          overlayBackgroundColor="#30322F"
          style={styles.overlayBox}
        >
          <View style={styles.settingsMenuBox}>
            <TouchableOpacity style={styles.settingsMenuSingleBoxTop}>
              <Text style={styles.settingsMenuText}>settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsMenuSingleBox}>
              <Text style={styles.settingsMenuText}>option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsMenuSingleBox}>
              <Text style={styles.settingsMenuText}>option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsMenuSingleBox}>
              <Text style={styles.settingsMenuText}>Log out</Text>
            </TouchableOpacity>
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
    backgroundColor: "#30322F",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top:0,
    right:0,
    left:0,
    zIndex:100
  },
  hamburgerImage: {
    marginTop: 10,
    marginRight: 10
  },
  settingsMenuBox: {
    backgroundColor: "#30322F"
  },
  settingsMenuSingleBoxTop: {
    justifyContent: "center",
    // width: "100%",
    borderColor: "white",
    borderBottomWidth: 3,
    borderTopWidth: 3,
    height: 70
  },
  settingsMenuText: {
    fontSize: 30,
    alignSelf: "center",
    color: "white"
  },
  settingsMenuSingleBox: {
    justifyContent: "center",
    // width: "100%",
    borderColor: "white",
    borderBottomWidth: 3,
    height: 70
  }
});
