import React from 'react';
import {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ButtonScreen from './ButtonScreen';
const GoalInput = ({navigation}) => {
  const [idno, setidno] = useState();
  let content = (
    <Text style={{textAlign: 'center', fontSize: 50, paddingTop: 250}}>
      Welcome !
    </Text>
  );

  function onButtonClick() {
    if (idno === 0) {
      navigation.navigate('user');
    } else if (idno === 1) {
      navigation.navigate('profile');
    } else if (idno === 2) {
      navigation.navigate('camera');
    } else if (idno === 3) {
      navigation.navigate('video');
    }
  }
  var array = [
    {title: 'users', name: 'users'},
    {title: 'id-badge', name: 'profile'},
    {title: 'camera', name: 'camera'},
    {title: 'video', name: 'video'},
  ];

  if (idno === 0) {
    content = <ButtonScreen title="users" onRestart={onButtonClick} />;
    // navigation.navigate('user');
  } else if (idno === 1) {
    content = <ButtonScreen title="profile" onRestart={onButtonClick} />;
    //  navigation.navigate('profile');
  } else if (idno === 2) {
    content = <ButtonScreen title="camera" onRestart={onButtonClick} />;
    /// navigation.navigate('camera');
  } else if (idno === 3) {
    content = <ButtonScreen title="video" onRestart={onButtonClick} />;
    //  navigation.navigate('video');
  }

  return (
    <View style={{flex: 1}}>
      {content}
      <View style={styles.container}>
        {array.map((item, index) => (
          <View style={styles.box}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => {
                setidno(index);
              }}>
              <FontAwesome5
                style
                name={item.title}
                size={index === idno ? 35 : 25}
                color={index === idno ? '#ff6347' : '#fff'}
              />
              <Text
                style={
                  index === idno ? styles.selectedText : styles.unselectedText
                }>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'flex-start',
    alignContent: 'space-between',
    position: 'absolute',
    bottom: 0,

    flexDirection: 'row',
    backgroundColor: 'blue',
  },

  selectedText: {color: '#ff8c', textAlign: 'center', fontSize: 16},
  unselectedText: {color: '#ff4500', textAlign: 'center', fontSize: 16},
  box: {
    flex: 1,

    marginLeft: 5,
    marginRight: 5,
  },
});

export default GoalInput;
