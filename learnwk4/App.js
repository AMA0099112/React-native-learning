import React from "react";
import Header from "./src/components/Header";
import Albumlist from "./src/components/AlbumList";
import albumData from "./src/json/albums.json";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { FlatList } from "@gluestack-ui/themed";
import album_section from "./src/json/album_section.json"

const App = () => {
  return (
    <SafeAreaView flex={1}>
      <StatusBar />
      <Header title={albumData.albumTitle} />
      <Albumlist aaa={album_section} />
    </SafeAreaView>
  )
}
export default App;