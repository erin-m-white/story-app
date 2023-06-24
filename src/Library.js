import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";

const BookButton = ({ title, imageSource }) => (
  <TouchableOpacity style={styles.bookButton}>
    <ImageBackground source={imageSource} style={styles.bookImage}>
      <Text style={styles.bookTitle}>{title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const LibraryScreen = () => {
  const books = [
    { id: "1", title: "Book 1", imageSource: require("./antique.png") },
    { id: "2", title: "Book 2", imageSource: require("./antique.png") },
    { id: "3", title: "Book 3", imageSource: require("./antique.png") },
    { id: "4", title: "Book 4", imageSource: require("./antique.png") }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library</Text>
      <View style={styles.bookContainer}>
        {books.map((book) => (
          <BookButton
            key={book.id}
            title={book.title}
            imageSource={book.imageSource}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  bookContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  bookButton: {
    alignItems: "center",
    marginBottom: 16,
    marginRight: 16,
    width: 100
  },
  bookImage: {
    width: 110,
    height: 170,
    justifyContent: "center",
    alignItems: "center"
  },
  bookTitle: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
});

export default LibraryScreen;
