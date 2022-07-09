import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Clipboard,
  Image,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Img} from '../assets';
import Toast from '../components/toast';
import {Colors, FontSize} from '../styles';
import DetailsCard from '../components/detailsCard';

interface ITransactionDetails {
  route: any;
}

const TransactionDetails = ({route}: ITransactionDetails) => {
  const {item} = route.params;
  const [isToastVisible, setToastVisible] = useState(false);
  const [isDetail, setIsDetail] = useState(true);

  const onPressCopy = useCallback(() => {
    Clipboard.setString(item.id);
    setToastVisible(true);
    const toasTimeOut = setTimeout(() => {
      clearTimeout(toasTimeOut);
      setToastVisible(false);
    }, 2000);
  }, [item.id]);

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.list}>
          <Text style={styles.title}>{`ID TRANSAKSI: #${item.id}`}</Text>
          <TouchableOpacity onPress={() => onPressCopy()} style={styles.btn}>
            <Image source={Img.COPY} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={[styles.list, styles.secondList]}>
          <Text style={styles.title}>DETAIL TRANSAKSI</Text>
          <TouchableOpacity
            onPress={() => setIsDetail(!isDetail)}
            style={[styles.btn, styles.secondBtn]}>
            <Text style={styles.btnText}>{isDetail ? 'Tutup' : 'Lihat'}</Text>
          </TouchableOpacity>
        </View>

        {isDetail && (
          <DetailsCard
            senderBank={item.sender_bank}
            beneficiaryBank={item.beneficiary_bank}
            beneficiaryName={item.beneficiary_name}
            accountNumber={item.account_number}
            amount={item.amount}
            remark={item.remark}
            uniqueCode={item.unique_code}
            createdAt={item.created_at}
          />
        )}
      </View>

      {isToastVisible && <Toast text="Copy to clipboard" />}
    </View>
  );
};

export default TransactionDetails;

const COPY_ICON_SIZE = 23;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY,
    paddingVertical: 15,
  },
  list: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY3,
    height: 80,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  icon: {
    width: COPY_ICON_SIZE,
    height: COPY_ICON_SIZE,
    marginLeft: 5,
  },
  secondList: {
    justifyContent: 'space-between',
  },
  btnText: {
    color: Colors.ORANGE,
    fontSize: FontSize.SEMI_MEDIUM,
    fontWeight: '600',
  },
  btn: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  secondBtn: {
    height: '100%',
    alignItems: 'flex-end',
  },
  wrap: {
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontSize: FontSize.SEMI_MEDIUM,
    color: Colors.BLACK,
    fontWeight: '700',
  },
});
