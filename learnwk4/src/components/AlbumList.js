import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from "react-native";
import albumData from "../json/albums";

const Albumlist = () => {
    const renderItem = ({ item }) =>
        <View>
            <Text>{item.title}</Text>
            <Text>{item.artist}</Text>
            <Image
                style={{ width: 300, height: 300 }}
                source={{
                    uri: item.image
                }}
            />
        </View>
    return (
        <FlatList
            data={albumData.albumList}
            renderItem={renderItem}


            keyExtractor={item => item.title}
        />
    );
};

const styles = StyleSheet.create({
    thumbnailContainerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        margin: 5
    },
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: 10
    },
    cardContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    cardSectionStyle: {
        padding: 5,
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderBottomWidth: 1
    },
    imageStyle: {
        height: 300,
        width: null
    }
});

export default Albumlist;