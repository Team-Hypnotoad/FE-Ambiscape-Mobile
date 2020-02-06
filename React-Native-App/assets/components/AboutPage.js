import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Link } from "react-router-native";

class AboutPage extends Component {
  render() {
    return (
      <View style={styles.AboutPageOuterBox}>
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
            alignItems: "center"
            // justifyContent: "center"
          }}
        >
          <Text style={styles.AboutPageText}>About</Text>
          <View style={styles.AboutPageInnerBox}>
            <ScrollView
              style={styles.scrollView}
              alwaysBounceVertical={false}
              alwaysBounceHorizontal={false}
            >
              <Text style={styles.AboutPageBodyTextTop}>
                This application was developed as the final project of our
                Northcoders coding bootcamp. We were given two and a half weeks
                to come up with an idea, test the viability of the technology
                and create the application you are currently accessing. We
                decided on a back end of PSQL and a front end of React and React
                Native for the web version and application respectively. We hope
                you enjoy it. If you wish to contact us for any reason you can
                find us on LinkedIn;
              </Text>
              <Text style={styles.AboutPageBodyText}>Sarah Vidler - </Text>
              <Text style={styles.AboutPageBodyText}>
                https://www.linkedin.com/in/sarah-vidler-077644138/
              </Text>
              <Text style={styles.AboutPageBodyText}>Stella Martin -</Text>
              <Text style={styles.AboutPageBodyText}>
                https://uk.linkedin.com/in/stella-martin-974469173/
              </Text>
              <Text style={styles.AboutPageBodyText}>Robert Haworth-</Text>
              <Text style={styles.AboutPageBodyText}>
                https://www.linkedin.com/in/robert-haworth-142b7a10a/
              </Text>
              <Text style={styles.AboutPageBodyText}>Nick Barnard- </Text>
              <Text style={styles.AboutPageBodyText}>
                www.linkedin.com/in/barnardnicholas
              </Text>
              <Text style={styles.AboutPageBodyText}>
                Sam The Mansplainer-{" "}
              </Text>
              <Text style={styles.AboutPageBodyText}>
                (He’ll tell you later)
              </Text>
              <Text style={styles.AboutPageBodyText}>
                If you wish to view the repo; https://github.com/Team-Hypnotoad
              </Text>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AboutPageOuterBox: {
    backgroundColor: "black",
    height: "89%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50
  },
  AboutPageText: {
    marginTop: 10,
    color: "white",
    fontSize: 50,
    textShadowColor: "rgba(255, 255, 255, 0.9)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15
  },
  AboutPageInnerBox: {
    borderRadius: 20,
    backgroundColor: "black",
    height: "70%",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8
  },
  AboutPageBodyTextTop: {
    color: "white",
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  },
  AboutPageBodyText: {
    color: "white",
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20
  }
});

export default AboutPage;
