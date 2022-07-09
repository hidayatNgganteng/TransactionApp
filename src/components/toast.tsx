import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Colors} from '../styles';

interface IToast {
  text: string;
}

const Toast = ({text}: IToast) => {
  return (
    <View style={styles.container}>
      <Text style={styles.toastText}>{text}</Text>
    </View>
  );
};

export default Toast;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
    width: 200,
    backgroundColor: 'rgba(0,0,0,0.25)',
    left: '50%',
    transform: [{translateX: -200 / 2}],
    paddingVertical: 10,
    borderRadius: 5,
  },
  toastText: {
    color: Colors.WHITE,
    textAlign: 'center',
  },
});
