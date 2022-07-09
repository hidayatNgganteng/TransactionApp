import {
  ActivityIndicator,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useMemo, useCallback} from 'react';
import SearchBar from '../components/searchBar';
import ListCard from '../components/listCard';
import SortModal from '../components/sortModal';
import {Colors, FontSize} from '../styles';
import {useGetFetch} from '../data/hooks/useFetch';

interface ITransactionList {
  navigation: any;
}
interface ISortList {
  label: string;
  selected: boolean;
  sortField: string;
  order: string;
}

const TransactionList = ({navigation}: ITransactionList) => {
  // get transaction list
  const {
    isLoading,
    apiData: transactionListData,
    serverError,
  } = useGetFetch('/frontend-test');

  const [searchValue, setSearchValue] = useState<string>('');
  const [isSortModal, setIsSortModal] = useState<boolean>(false);

  const initialsortList: ISortList[] = useMemo(
    () => [
      {
        label: 'URUTKAN',
        selected: true,
        sortField: '',
        order: '',
      },
      {
        label: 'Nama A-Z',
        selected: false,
        sortField: 'beneficiary_name',
        order: 'asc',
      },
      {
        label: 'Nama Z-A',
        selected: false,
        sortField: 'beneficiary_name',
        order: 'desc',
      },
      {
        label: 'Tanggal Terbaru',
        selected: false,
        sortField: 'created_at',
        order: 'desc',
      },
      {
        label: 'Tanggal Terlama',
        selected: false,
        sortField: 'created_at',
        order: 'asc',
      },
    ],
    [],
  );
  const [sortList, setSortList] = useState<ISortList[]>(initialsortList);
  const sortListSelected: any = sortList.find(item => item.selected);

  const onSortChange = useCallback(
    (index: number) => {
      const newSortList = [...sortList];
      newSortList.map((item, i) => {
        item.selected = i === index;
      });
      setSortList(newSortList);
      setIsSortModal(false);
    },
    [sortList],
  );

  // filter
  const transactionListFilter = transactionListData.filter(item => {
    return (
      item.sender_bank.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.beneficiary_bank.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.beneficiary_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.amount.toString().includes(searchValue.toLowerCase())
    );
  });

  // sorting
  const transactionListFilterSort = transactionListFilter.sort((a, b) => {
    if (sortList[0].selected) {
      return 0;
    }

    const {sortField, order} = sortListSelected;
    if (order === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchValue}
        onChangeText={text => setSearchValue(text)}
        onSort={() => setIsSortModal(true)}
        label={sortListSelected.label}
      />

      <View style={styles.list}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            style={styles.loading}
            color={Colors.ORANGE}
          />
        ) : serverError !== null ? (
          <Text style={styles.errorText}>{serverError.message}</Text>
        ) : (
          <FlatList
            data={transactionListFilterSort}
            renderItem={({item, index}) => (
              <ListCard
                key={index.toString()}
                senderBank={item.sender_bank}
                beneficiaryBank={item.beneficiary_bank}
                beneficiaryName={item.beneficiary_name}
                amount={item.amount}
                createdAt={item.created_at}
                status={item.status}
                onPress={() =>
                  navigation.navigate('TransactionDetails', {item})
                }
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={styles.errorText}>Data not found</Text>
            )}
          />
        )}
      </View>

      <Modal
        transparent={true}
        animationType={'fade'}
        visible={isSortModal}
        onRequestClose={() => setIsSortModal(false)}>
        <SortModal
          data={sortList}
          onSelect={onSortChange}
          onClose={() => setIsSortModal(false)}
        />
      </Modal>
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY,
    padding: 10,
  },
  list: {
    marginBottom: 80,
  },
  loading: {
    marginTop: 30,
  },
  errorText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: FontSize.SMALL,
    color: Colors.BLACK,
  },
});
