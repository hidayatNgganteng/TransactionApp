import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
import assets from '../assets';
import {COLOR, FONTSIZE} from '../themes/typography';

const SearchBar = ({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (text: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapLeft}>
        <Image source={assets.images.search} style={styles.icon} />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.textField}
          placeholder="Cari nama, bank, atau nominal"
          placeholderTextColor={COLOR.gray2}
        />
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.wrapRight}>
        <Text style={styles.label}>URUTKAN</Text>
        <Image source={assets.images.bottomArrow} style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(SearchBar);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.white,
    borderRadius: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 7,
  },
  textField: {
    flex: 1,
    height: 50,
    color: COLOR.black,
    fontSize: FONTSIZE.small,
  },
  wrapLeft: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  wrapRight: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  label: {
    color: COLOR.orange,
    fontSize: FONTSIZE.small,
  },
  arrowIcon: {
    marginLeft: 5,
    width: 18,
    height: 18,
  },
});
