import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const CLIENT_ID = "bAuTDnGXLPc4bGQjcRiy8Q";

const API_KEY =
  "TS1PFrM2EkDwnaqglq_MNQX-VncuplnpfQKM0My2A6Djo5VbzsMgKzbbZC4Ai-y985OxuLZeNE5s5Vs8MgdLR5zjgkcXmcIZlxQ4S6526bSkQZPZ0JFGQoDkugZNZnYx";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
