import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";

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
          <View style={styles.loginPageInnerBox}>
            <Image
              source={require("../image/icons8-frog-96.png")}
              style={{ size: "0%" }}
            />
            <Text style={styles.loginPageText}>Login</Text>

            <View style={styles.loginPageInputOuterBox}>
              <Text style={styles.loginPageTextSmall}>Username</Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: "white",
                  borderBottomWidth: 1,
                  width: "70%",
                  color: "white"
                }}
              />

              <Text style={styles.loginPageTextSmall}>Password</Text>
              <TextInput
                secureTextEntry={true}
                style={{
                  height: 40,
                  borderColor: "white",
                  borderBottomWidth: 1,
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
              <Button
                title="LOGIN"
                backgroundColor="white"
                color="white"
              ></Button>

              <Button title="SIGN UP" color="white"></Button>
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
    justifyContent: "center"
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
    fontSize: 50,
    paddingBottom: "10%"
  },
  loginPageTextSmall: {
    color: "white",
    alignSelf: "center"
  },
  loginPageTextSmallest: { color: "white", fontSize: 10, marginTop: 2 },
  loginPageButton: {
    width: "80%",
    height: "15%",
    justifyContent: "space-between"
  }
});

export default LogInPage;
