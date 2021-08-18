import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const GoalInput = props => {
  const [size, setsize] = useState(25);
  const [click, setclick] = useState(false);
  const [colour, setcolour] = useState('#ff8c00');

  const onConfirm = () => {
    if (click === false) {
      setclick(true);
      setsize(35);
      setcolour('#ff8');
    } else {
      setclick(false);
      setsize(25);
      setcolour('#ff8c00');
    }
  };

  return (
    <View style={styles.box}>
      <View>
        <TouchableOpacity onPress={onConfirm}>
          <View style={{alignItems: 'center'}}>
            <FontAwesome5 name={props.title} size={size} color={colour} />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>{props.name}</Text>
      </View>
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
    width: '80%',
    height: '80%',
    marginLeft: 5,
    marginRight: 5,
  },
});

export default GoalInput;
