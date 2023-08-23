import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';


export default function App() {
  return (

    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
