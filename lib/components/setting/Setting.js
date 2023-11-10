import { StyleSheet, Text, View } from "react-native";

const SettingPage = () => {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
    </View>
  );
};

export default SettingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
