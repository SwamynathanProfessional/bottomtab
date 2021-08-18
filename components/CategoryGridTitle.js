import React from 'react';
import {ImageBackground, View, Text, StyleSheet} from 'react-native';

const CategoryGridTitle = props => {
  return (
    <View style={[styles.container]}>
      <ImageBackground
        resizeMode="contain"
        source={{
          uri: props.imageUrl,
        }}
        style={{width: 100, height: 64}}>
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    textAlign: 'center',
    top: 40,
  },

  box: {
    width: 100,
    height: 70,
    flex: 1,
  },
});
export default CategoryGridTitle;
