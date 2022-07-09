import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLOR, FONTSIZE} from '../themes/typography';

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

export default SortModalCard;

const BIG_DOT_SIZE = 30;
const SMALL_DOT_SIZE = 20;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  bigDots: {
    width: BIG_DOT_SIZE,
    height: BIG_DOT_SIZE,
    borderRadius: BIG_DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: COLOR.orange,
  },
  smallDots: {
    position: 'absolute',
    width: SMALL_DOT_SIZE,
    height: SMALL_DOT_SIZE,
    borderRadius: SMALL_DOT_SIZE / 2,
    backgroundColor: COLOR.orange,
    left: '50%',
    top: '50%',
    transform: [
      {translateX: -SMALL_DOT_SIZE / 2},
      {translateY: -SMALL_DOT_SIZE / 2},
    ],
  },
  label: {
    marginLeft: 10,
    fontSize: FONTSIZE.semiMedium,
    color: COLOR.black,
  },
});
