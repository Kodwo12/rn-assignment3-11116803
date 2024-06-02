import { View, Text, StyleSheet, ScrollView } from "react-native";
import Frame1 from "./projectComponents/Frame1";
import SearchBar from "./projectComponents/SearchBar";
import CategorySection from "./projectComponents/CategorySection";
import OngoingTask from "./projectComponents/OngoingTask";

export default function App() {
  return (
    <>
        <ScrollView>
          <View style={styles.container}>
            <Frame1/>
            <SearchBar/>
            <CategorySection/>
            <OngoingTask/>
          </View>
        </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "flex-start",
    paddingTop: 52, 
    padding: 20, 
    backgroundColor:"#F7F0E8"
  }
});