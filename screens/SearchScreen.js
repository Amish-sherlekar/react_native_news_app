import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export class SearchScreen extends Component {
  render() {
    return (
      <View>
        <TextInput
          placeholder="Search for News"
          autoFocus={true}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            margin: 10,
            padding: 10,
          }}
        />
      </View>
    );
  }
}

export default SearchScreen;