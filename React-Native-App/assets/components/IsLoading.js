import React, { Component } from "react";
import { View, Animated, Image, Easing, StyleSheet } from "react-native";

class IsLoading extends Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }
  Animated;

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Animated.Image
            style={{
              width: 100,
              height: 100,
              transform: [{ rotate: spin }]
            }}
            source={require("../image/icons8-swirl-96-inverse.png")}
          />
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1800,
      easing: Easing.linear
    }).start(() => this.spin());
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default IsLoading;
