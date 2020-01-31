import React, { Component } from "react";
import { View } from "react-native";
import { Route, NativeRouter } from "react-router-native";
import Home from "./assets/components/Home";
import Header from "./assets/components/Header";
import SettingsMenu from "./assets/components/SettingsMenu";
import SingleScenario from "./assets/components/SingleScenario";

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View
          style={{
            justifyContent: "center"
          }}
        >
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/scenario/new" component={SingleScenario} />
          <Route exact path="/settingsmenu" component={SettingsMenu} />
        </View>
      </NativeRouter>
    );
  }
}
