import {
  ActivityIndicator,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useMemo} from 'react';
import SearchBar from '../components/searchBar';
import ListCard from '../components/listCard';
import SortModal from '../components/sortModal';
import {Colors, FontSize} from '../styles';
import {useGetFetch} from '../data/hooks/useFetch';

interface ISortList {
  label: string;
  order: string;
  selected: boolean;
}

const TransactionList = () => {
  // get transaction list
  const {
    isLoading,
    apiData: transactionList,
    serverError,
  } = useGetFetch('/frontend-test');

  const [searchValue, setSearchValue] = useState<string>('');
  const [isSortModal, setIsSortModal] = useState<boolean>(false);

  const initialsortList: ISortList[] = useMemo(
    () => [
      {
        label: 'URUTKAN',
        order: '',
        selected: true,
      },
      {
        label: 'Nama A-Z',
        order: 'name asc',
        selected: false,
      },
      {
        label: 'Nama Z-A',
        order: 'name desc',
        selected: false,
      },
      {
        label: 'Tanggal Terbaru',
        order: 'date desc',
        selected: false,
      },
      {
        label: 'Tanggal Terlama',
        order: 'date asc',
        selected: false,
      },
    ],
    [],
  );
  const [sortList, setSortList] = useState<ISortList[]>(initialsortList);

  const onSearch = (text: string) => setSearchValue(text);
  const onCloseSortModal = () => setIsSortModal(false);
  const onOpenSortModal = () => setIsSortModal(true);

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchValue}
        onChangeText={onSearch}
        onSort={onOpenSortModal}
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
            data={transactionList}
            renderItem={({item}) => (
              <ListCard
                senderBank={item.sender_bank}
                beneficiaryBank={item.beneficiary_bank}
                beneficiaryName={item.beneficiary_name}
                amount={item.amount}
                createdAt={item.created_at}
                status={item.status}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      <Modal
        transparent={true}
        animationType={'fade'}
        visible={isSortModal}
        onRequestClose={onCloseSortModal}>
        <SortModal
          data={sortList}
          onSelect={() => {}}
          onClose={onCloseSortModal}
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
