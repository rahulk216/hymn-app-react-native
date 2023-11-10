import { StyleSheet, Text, View } from "react-native";
import React from "react";

//constants
import { colors } from "../../utils/constants";

const isSongKanOrTulu = (language) =>{
    return language === 'kan' ? 'K' : 'T'
}

export default function SongCard({ song }) {

  return (
    <View style={styles.songCardContainer}>
      <Text style={styles.number}>{isSongKanOrTulu(song.language)} {song.hymnNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  songCardContainer: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: colors.PRIMARY,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  number: {
    color: colors.PRIMARY,
    fontSize: 20,
    fontWeight: "bold",
  },
});
