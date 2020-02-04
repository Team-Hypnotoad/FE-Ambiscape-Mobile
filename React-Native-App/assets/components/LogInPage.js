import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Link } from "react-router-native";

class LogInPage extends Component {
  state = {
    showPassword: false
  };
  render() {
    return (
      <View style={styles.loginPageOuterBox}>
        <ImageBackground
          source={{
            uri:
              "https://www.freevector.com/uploads/vector/preview/19162/Free_Forest_Background_Vector.jpg"
          }}
          resizeMode="cover"
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
            top: 0,
            left: 0,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={styles.loginPageText}>Ambiscape</Text>
          <View style={styles.loginPageInnerBox}>
            <View style={styles.loginPageInputOuterBox}>
              <Text style={styles.loginPageTextSmall}>Email</Text>
              <TextInput
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="example@email.com"
                placeholderTextColor="gray"
                style={{
                  height: 40,
                  borderRadius: 10,
                  borderColor: "white",
                  borderWidth: 1,
                  paddingLeft: 5,
                  width: "70%",
                  color: "white"
                }}
              />

              <Text style={styles.loginPageTextSmall}>Password</Text>
              <TextInput
                secureTextEntry={true}
                autoCompleteType="password"
                placeholder="password"
                placeholderTextColor="gray"
                style={{
                  height: 40,
                  borderRadius: 10,
                  borderColor: "white",
                  borderWidth: 1,
                  paddingLeft: 5,
                  width: "70%",
                  color: "white"
                }}
              />
              <TouchableOpacity>
                <Text style={styles.loginPageTextSmallest}>
                  Forgot password
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.loginPageButton}>
              <Link to="/home">
                <Text style={styles.loginPageTextButton}>LOGIN</Text>
              </Link>

              <Link to="/signup">
                <Text style={styles.loginPageTextButton}>SIGN UP</Text>
              </Link>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginPageOuterBox: {
    backgroundColor: "black",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50
  },
  loginPageInnerBox: {
    borderRadius: 20,
    backgroundColor: "black",
    height: "40%",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8
  },
  loginPageInputOuterBox: {
    width: "100%",
    alignItems: "center",
    paddingBottom: "10%"
  },
  loginPageText: {
    color: "white",
    fontSize: 50,
    paddingBottom: "10%",
    textShadowColor: "rgba(255, 255, 255, 0.9)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15
  },
  loginPageTextSmall: {
    color: "white",
    alignSelf: "center"
  },
  loginPageTextSmallest: {
    color: "white",
    fontSize: 10,
    marginTop: 2
  },
  loginPageButton: {
    height: "20%",
    color: "white"
    // justifyContent: "space-between"
  },
  loginPageTextButton: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 20,
    marginTop: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 1,
    width: 120,
    marginBottom: 10,
    borderColor: "#d6d7da"
  }
});

export default LogInPage;
