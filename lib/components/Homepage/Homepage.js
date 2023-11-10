import { StyleSheet, Text, FlatList } from "react-native";
import {hymnData} from '../../../data/hymn-data'
import SongCard from "../atoms/SongCard";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={hymnData}
        renderItem={({item})=> <SongCard song={item}/>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
});
