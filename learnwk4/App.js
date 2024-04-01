import React from "react";
import Header from "./src/components/Header";
import Albumlist from "./src/components/AlbumList";
import albumData from "./src/json/albums.json";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { FlatList } from "@gluestack-ui/themed";

const App = () => {
  return (
    <SafeAreaView flex={1}>
      <StatusBar />
      <Header title={albumData.albumTitle} />
      <Albumlist />
    </SafeAreaView>
  )
}
export default App;