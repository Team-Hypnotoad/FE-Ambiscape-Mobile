import React, { Component } from "react";
import { View } from "react-native";
import { Route, NativeRouter } from "react-router-native";
import NewScenario from "./assets/components/NewScenario";
import Home from "./assets/components/Home";
import Header from "./assets/components/Header";

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
          <Route exact path="/scenario/custom" component={NewScenario} />
          {/* <TempHome path="/" />
            <NewScenario path="/scenario/custom" />
          </Route> */}
        </View>
      </NativeRouter>
    );
  }
}
