import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, FlatList, SectionList } from "react-native";
import sections from "../json/album_section.json";
import AlbumDetail from "./Albumdetail";
import HotAlbumDetail from "./HotAlbumDetail";

const Albumlist = () => {
    const renderSectionHeader = ({ section }) => (
        <>
            <Text style={styles.sectionHeader}>{section.title}</Text>

            <FlatList
                horizontal={true}
                data={section.data}
                renderItem={({ item }) => <HotAlbumDetail album={item} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.title}
            />

        </>
    );

    const renderItem = ({ item, section }) => {
        if (section.horizontal) {
            return null;
        }
        return <AlbumDetail album={item} />
    }
    // const renderItem = () => null;

    return (
        <SectionList
            sections={sections}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderSectionHeader={renderSectionHeader}
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