import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SettingsMenu() {
  return (
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
  );
}

const styles = StyleSheet.create({
  settingsMenuBox: {
    backgroundColor: "#30322F"
  },
  settingsMenuSingleBoxTop: {
    justifyContent: "center",
    width: "100%",
    borderColor: "black",
    borderBottomWidth: 3,
    borderTopWidth: 3,
    height: 70
  },
  settingsMenuText: {
    fontSize: 30,
    alignSelf: "center"
  },
  settingsMenuSingleBox: {
    justifyContent: "center",
    width: "100%",
    borderColor: "black",
    borderBottomWidth: 3,
    height: 70
  }
});
