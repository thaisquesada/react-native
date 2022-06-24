import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Test = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ height: 300, width: 300, backgroundColor: "#7B68EE" }}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            padding: 10,
          }}
        >
          Login
        </Text>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              marginTop: 10,
              height: 50,
              width: 270,
              backgroundColor: "#E6E6FA",
              alignSelf: "center",
              borderRadius: 5,
            }}
          />
          <View
            style={{
              marginTop: 10,
              height: 50,
              width: 270,
              backgroundColor: "#E6E6FA",
              alignSelf: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
          />

          <Pressable
          style = {styles.input}
          >
            <Text
              style={{ color: "#fff", fontSize: 20, paddingBottom: 8}}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 120,
    backgroundColor: "#FF69B4",
    alignSelf: "center",
    marginTop: 22,
    borderRadius: 50,
    fontWeight: "bold",
    alignItems: 'center',
    justifyContent: "center",
  },
});

export default Test;
