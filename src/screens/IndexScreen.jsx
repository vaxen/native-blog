import React, { useContext } from "react";
import { StyleSheet, Text, Button, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  const renderItem = ({ item }) => <Text>{item.title}</Text>;
  return (
    <>
      <Button title={"Add Post"} onPress={addBlogPost} />
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.title} />
    </>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
