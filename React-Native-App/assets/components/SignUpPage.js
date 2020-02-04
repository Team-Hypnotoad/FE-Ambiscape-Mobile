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

class SignUpPage extends Component {
  render() {
    return (
      <View>
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
          <View style={styles.loginPageInnerBox}>
            <View style={styles.loginPageInputOuterBox}>
              <Link to="/" style={styles.loginPageBackButton}>
                <Text style={styles.loginPageBackButton}>⏎</Text>
              </Link>
              <Text style={styles.loginPageText}>Sign Up</Text>
              <Text style={styles.loginPageTextSmall}>Email Address</Text>
              <TextInput
                autoCompleteType="email"
                placeholder="example@email.com"
                placeholderTextColor="gray"
                style={{
                  height: 40,
                  borderRadius: 10,
                  borderColor: "white",
                  paddingLeft: 5,
                  borderWidth: 1,
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
                  paddingLeft: 5,
                  borderWidth: 1,
                  width: "70%",
                  color: "white"
                }}
              />
              <Text style={styles.loginPageTextSmall}>Confirm Password</Text>
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
            </View>

            <View style={styles.loginPageButton}>
              <Link to="/">
                <Text style={styles.loginPageTextButton}>Submit</Text>
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
    height: "70%",
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
    fontSize: 40,
    paddingBottom: "10%",
    marginTop: "10%",
    textShadowColor: "rgba(255, 255, 255, 0.9)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15
  },
  loginPageTextSmall: {
    color: "white",
    alignSelf: "flex-start",
    marginTop: "10%",
    marginLeft: "20%"
  },
  loginPageTextSmallest: {
    color: "white",
    fontSize: 10,
    marginTop: 2
  },
  loginPageButton: {
    width: "80%",
    height: "20%",
    color: "white",
    justifyContent: "space-between",
    alignItems: "center"
  },
  loginPageTextButton: {
    color: "white",
    fontSize: 20,
    marginTop: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#d6d7da"
  },
  loginPageBackButton: {
    color: "white",
    alignSelf: "flex-start",
    fontSize: 50,
    marginTop: "10%",
    marginLeft: "5%"
  }
});

export default SignUpPage;
