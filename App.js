import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App() {
  return (
    <View>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'dark orange'}} />
      <View style={{flex: 2, backgroundColor: 'green'}} />
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default App;
