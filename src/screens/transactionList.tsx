import {StyleSheet, View} from 'react-native';
import React from 'react';
import SearchBar from '../components/search-bar';
import {COLOR} from '../themes/typography';

const TransactionList = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const onSearch = (text: string) => setSearchValue(text);

  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} onChangeText={onSearch} />
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.gray,
    padding: 10,
  },
});
