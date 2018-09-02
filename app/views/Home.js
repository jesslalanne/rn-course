import React from "React";
import { StyleSheet, View, Text } from "react-native";

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Jessica Lalanne</Text>
        <Text>React Native - React.js Developer</Text>
        <Text>Bordeaux - Bayonne</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
