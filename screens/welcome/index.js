import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          We're glad you're here. Let's get started!
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center"
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000"
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "#000"
  }
});
export default WelcomeScreen;