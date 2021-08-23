import React from 'react';

import {View, StyleSheet, Button} from 'react-native';
const ButtonScreen = props => {
  return (
    <View style={styles.box}>
      <Button title={props.title} onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 250,
  },
});

export default ButtonScreen;
