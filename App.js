import * as React from 'react';

import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GoalInput from './screens/Goalinput';

function App() {
  return (
    <View style={styles.container}>
      <GoalInput title={'users'} name={'users'} />
      <GoalInput title={'id-badge'} name={'profile'} />
      <GoalInput title={'camera'} name={'camera'} />
      <GoalInput title={'video'} name={'video'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    // flex: 1,
    alignItems: 'center',

    alignContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
});
export default App;
