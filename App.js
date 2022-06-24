import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row",justifyContent: "space-between"}}>
        <View style={{height:100, width:100, backgroundColor: "#E6E6FA"}}/>
        <View style={{height:100, width:100, backgroundColor: "#87CEEB"}}/>
      </View>
      <View style={{height:100, width:100, backgroundColor: "#FA8072", alignSelf: "center"}}/>
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <View style={{height:100, width:100, backgroundColor: "#B0E0E6"}}/>
        <View style={{height:100, width:100, backgroundColor: "#FFF0F5"}}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});