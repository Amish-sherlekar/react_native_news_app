import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class NewsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>NewsScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
