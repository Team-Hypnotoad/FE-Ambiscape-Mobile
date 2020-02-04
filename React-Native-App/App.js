import React, { Component } from "react";
import { View } from "react-native";
import { Route, NativeRouter } from "react-router-native";
import NewScenario from "./assets/components/PickerMenu";
import Home from "./assets/components/Home";
import Header from "./assets/components/Header";
import SettingsMenu from "./assets/components/SettingsMenu";
import Animations from "./assets/components/Animations";
import IsLoading from "./assets/components/IsLoading";
import LogInPage from "./assets/components/LogInPage";
import SignUpPage from "./assets/components/SignUpPage";

export default class App extends Component {
  render() {
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
          <Route exact path="/scenario/new" component={NewScenario} />
          <Route exact path="/settingsmenu" component={SettingsMenu} />
        </View>
      </NativeRouter>
    );
  }
}
