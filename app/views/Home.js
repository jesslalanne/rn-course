import React from "React";
import { StyleSheet, View, Text } from "react-native";
import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message="Press to login" />
        <Hero />
        <Text style={{flex:6}}>Jessica Lalanne - React Developer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})