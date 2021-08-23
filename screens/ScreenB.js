import React from 'react';
import {WebView} from 'react-native-webview';
import {View, StyleSheet} from 'react-native';
const ScreenB = props => {
  return (
    <View style={styles.box}>
      <WebView
        source={{
          uri: 'https://www.netflix.com/in/',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ff00ff',
    textAlign: 'center',
    fontSize: 16,
  },

  box: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginLeft: 5,
    marginRight: 5,
  },
});

export default ScreenB;
