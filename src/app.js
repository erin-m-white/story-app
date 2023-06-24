import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";

const HomeScreen = () => {
  const navigateToPage = (pageName) => {
    // Logic to navigate to the selected page
    console.log(`Navigating to ${pageName} page`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write Your Own Story</Text>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigateToPage("Page 1")}
      >
        <ImageBackground
          source={require("./blankbook.png")}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <Text style={styles.optionText}>Write your own story</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigateToPage("Page 2")}
      >
        <ImageBackground
          source={require("./blankbook.png")}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <Text style={styles.optionText}>Revisit old stories</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigateToPage("Page 3")}
      >
        <ImageBackground
          source={require("./blankbook.png")}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <Text style={styles.optionText}>Tell me a story</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigateToPage("Settings")}
      >
        <ImageBackground
          source={require("./blankbook.png")}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <Text style={styles.optionText}>Settings</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#D73913",
    marginBottom: 20
  },
  option: {
    width: 200,
    height: 60,
    borderRadius: 0,
    marginBottom: 10,
    overflow: "stretch"
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  optionText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white"
  }
});

export default HomeScreen;
