import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ScreenC = () => {
  return <Text style={styles.input}>Camera Screen !</Text>;
};

const styles = StyleSheet.create({
  input: {
    height: 70,
    textAlign: 'center',
    fontSize: 30,
    paddingLeft: 100,
  },
});

export default ScreenC;
