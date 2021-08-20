import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ScreenD = () => {
  return <Text style={styles.input}>Video Screen !</Text>;
};

const styles = StyleSheet.create({
  input: {
    height: 70,
    textAlign: 'center',
    fontSize: 30,
    paddingLeft: 100,
  },
});

export default ScreenD;
