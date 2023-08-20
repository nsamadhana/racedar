import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';


export default function App() {
  return (
    <View style={styles.container}>
      <Home/> 
      {/* <Quiz/> */}
      {/* <Result /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
