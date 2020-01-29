import React from "react";
import { View, Text, StyleSheet, Image, Picker } from "react-native";
import { Link } from "react-router-native";
import { Dropdown } from "react-native-material-dropdown";

export default function Header({ title }) {
  let data = [
    { value: "scenarios" },
    { value: "my scenarios" },
    { value: "settings" }
  ];
  return (
    <View style={styles.headerBox}>
      <Link to="/">
        <Image source={require("../icons8-frog-96.png")}></Image>
      </Link>
      <Dropdown
        style={{ marginRight: 150 }}
        // dropdownOffset={{ top: 60, right: 0 }}
        dropdownPosition={0}
        label="⎈"
        data={data}
      >
        <Image
          style={styles.hamburgerImage}
          source={require("../icons8-menu-48.png")}
        ></Image>
      </Dropdown>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBox: {
    height: 90,
    backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  hamburgerImage: {
    marginTop: 10,
    marginRight: 10
  }
});
