import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ScreenA = () => {
  return <Text style={styles.input}>Users Screen !</Text>;
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    paddingLeft: 30,
  },
});

export default ScreenA;
