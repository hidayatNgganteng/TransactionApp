import {StyleSheet, View} from 'react-native';
import React from 'react';
import SearchBar from '../components/search-bar';
import {COLOR} from '../themes/typography';
import ListCard from '../components/list-card';

const TransactionList = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const onSearch = (text: string) => setSearchValue(text);

  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} onChangeText={onSearch} />

      <View style={styles.list}>
        <ListCard
          senderBank="Bank Mandiri"
          beneficiaryBank="BNI"
          beneficiaryName="Rizky"
          amount={100000}
          createdAt="2022-07-09 00:03:38"
          status="success"
        />
        <ListCard
          senderBank="Bank Mandiri"
          beneficiaryBank="BNI"
          beneficiaryName="Rizky"
          amount={100000}
          createdAt="2022-07-09 00:03:38"
          status="pending"
        />
      </View>
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
  list: {},
});
