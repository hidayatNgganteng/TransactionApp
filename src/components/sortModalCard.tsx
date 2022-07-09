import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {Colors, FontSize} from '../styles';

interface ISortModalCard {
  onSelect: () => void;
  selected: boolean;
  label: string;
}

const SortModalCard = ({onSelect, selected, label}: ISortModalCard) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <View style={styles.bigDots}>
        {selected && <View style={styles.smallDots} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default memo(SortModalCard);

const BIG_DOT_SIZE = 30;
const SMALL_DOT_SIZE = 20;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 18,
  },
  bigDots: {
    width: BIG_DOT_SIZE,
    height: BIG_DOT_SIZE,
    borderRadius: BIG_DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: Colors.ORANGE,
  },
  smallDots: {
    position: 'absolute',
    width: SMALL_DOT_SIZE,
    height: SMALL_DOT_SIZE,
    borderRadius: SMALL_DOT_SIZE / 2,
    backgroundColor: Colors.ORANGE,
    left: '50%',
    top: '50%',
    transform: [
      {translateX: -SMALL_DOT_SIZE / 2},
      {translateY: -SMALL_DOT_SIZE / 2},
    ],
  },
  label: {
    marginLeft: 10,
    fontSize: FontSize.SEMI_MEDIUM,
    color: Colors.BLACK,
  },
});
