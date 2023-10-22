
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './pages/Homescreen';
import Contentscreen from './pages/Contentscreen';

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Contentscreen" component={Contentscreen} />
     
    </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,  
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom:5
  },
});
