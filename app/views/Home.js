import React from "React";
import { View, Text } from "react-native";
import { Header } from "../sections/Header";

export class Home extends React.Component {
  render() {
    return (
      <View>
        <Header message="Press to login" />
        <Text>Jessica Lalanne</Text>
        <Text>React Native - React.js Developer</Text>
        <Text>Bordeaux - Bayonne</Text>
      </View>
    );
  }
}
