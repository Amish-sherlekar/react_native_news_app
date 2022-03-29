import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from "./navigation/DrawerNavigation"

export default function App() {
  return (
      <View>
        <Text>Hello</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
