import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
import {Img} from '../assets';
import {Colors, FontSize} from '../styles';

interface ISearchBar {
  value: string;
  onChangeText: (text: string) => void;
  onSort: () => void;
}

const SearchBar = ({value, onChangeText, onSort}: ISearchBar) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapLeft}>
        <Image source={Img.SEARCH} style={styles.icon} />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.textField}
          placeholder="Cari nama, bank, atau nominal"
          placeholderTextColor={Colors.GRAY2}
        />
      </View>
      <TouchableOpacity onPress={onSort} style={styles.wrapRight}>
        <Text style={styles.label}>URUTKAN</Text>
        <Image source={Img.BOTTOM_ARROW} style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(SearchBar);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
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
    color: Colors.BLACK,
    fontSize: FontSize.SMALL,
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
    color: Colors.ORANGE,
    fontSize: FontSize.SMALL,
    fontWeight: 'bold',
  },
  arrowIcon: {
    marginLeft: 5,
    width: 18,
    height: 18,
  },
});
