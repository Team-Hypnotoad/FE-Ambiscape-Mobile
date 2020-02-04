import React, { Component } from "react";
import { View } from "react-native";
import { Route, NativeRouter } from "react-router-native";
import Home from "./assets/components/Home";
import Header from "./assets/components/Header";
import SettingsMenu from "./assets/components/SettingsMenu";
import LogInPage from "./assets/components/LogInPage";
import SignUpPage from "./assets/components/SignUpPage";
import SingleScenario from "./assets/components/SingleScenario"
// import * as firebase from "firebase"

export default class App extends Component {
  state = {
    isLoadingComplete: false
  }
  render() {
    // if(!firebase.apps.length) {firebase.initializeApp(ApiKeys.FirebaseConfig);}
    return (
      <NativeRouter>
        <View
          style={{
            justifyContent: "center"
          }}
        >
          <Route exact path="/" component={LogInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Header />
          <Route exact path="/home" component={Home} />
          <Route exact path="/scenario/new" component={SingleScenario} />
          <Route exact path="/settingsmenu" component={SettingsMenu} />
        </View>
      </NativeRouter>
    );
  }
}
