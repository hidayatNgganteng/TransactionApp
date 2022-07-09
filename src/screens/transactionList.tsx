import {Modal, StyleSheet, View} from 'react-native';
import React, {useState, useMemo} from 'react';
import SearchBar from '../components/searchBar';
import {COLOR} from '../themes/typography';
import ListCard from '../components/listCard';
import SortModal from '../components/sortModal';

interface ISortList {
  label: string;
  order: string;
  selected: boolean;
}

const TransactionList = () => {
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
    backgroundColor: COLOR.gray,
    padding: 10,
  },
  list: {},
});
