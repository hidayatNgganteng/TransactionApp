import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {Img} from '../assets';
import {DATE_IDN_FORMAT, IDR_MASK} from '../utils/formater';
import {Colors, FontSize} from '../styles';

interface IListCard {
  senderBank: string;
  beneficiaryBank: string;
  beneficiaryName: string;
  amount: number;
  createdAt: string;
  status: string;
}

const ListCard = ({
  senderBank,
  beneficiaryBank,
  beneficiaryName,
  amount,
  createdAt,
  status,
}: IListCard) => {
  const isSuccess = status.toLowerCase() === 'success';

  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[styles.container, isSuccess && styles.containerSuccess]}
      activeOpacity={0.75}>
      <View style={styles.wrapLeft}>
        <View style={styles.bank}>
          <Text style={styles.bankLabel}>{senderBank}</Text>
          <Image source={Img.RIGHT_ARROW} style={styles.arrow} />
          <Text style={styles.bankLabel}>{beneficiaryBank}</Text>
        </View>
        <Text style={styles.name}>- {beneficiaryName}</Text>
        <View style={styles.info}>
          <Text style={styles.infoLabel}>Rp {IDR_MASK(amount)}</Text>
          <View style={styles.dot} />
          <Text style={styles.infoLabel}>{DATE_IDN_FORMAT(createdAt)}</Text>
        </View>
      </View>
      <View style={[styles.status, isSuccess && styles.statusSuccess]}>
        <Text
          style={[styles.statusLabel, isSuccess && styles.statusLabelSuccess]}>
          {isSuccess ? 'Berhasil' : 'Pengecekan'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ListCard);

const ARROW_SIZE = 17;
const DOT_SIZE = 10;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 17,
    borderLeftColor: Colors.ORANGE,
    borderRadius: 10,
    borderLeftWidth: 10,
    paddingLeft: 17,
    paddingRight: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  containerSuccess: {
    borderLeftColor: Colors.GREEN,
  },
  wrapLeft: {
    flex: 1,
  },
  bank: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankLabel: {
    fontSize: FontSize.SEMI_MEDIUM,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  arrow: {
    width: ARROW_SIZE,
    height: ARROW_SIZE,
    marginHorizontal: 5,
  },
  name: {
    fontSize: FontSize.SEMI_MEDIUM,
    fontWeight: '500',
    marginVertical: 5,
    color: Colors.BLACK,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: FontSize.SEMI_MEDIUM,
    marginHorizontal: 5,
    color: Colors.BLACK,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: Colors.BLACK,
  },
  status: {
    borderWidth: 2,
    borderColor: Colors.ORANGE,
    borderRadius: 7,
    paddingHorizontal: 13,
    paddingVertical: 6,
  },
  statusSuccess: {
    borderColor: Colors.GREEN,
    backgroundColor: Colors.GREEN,
  },
  statusLabel: {
    fontSize: FontSize.SMALL,
    color: Colors.BLACK,
    fontWeight: 'bold',
  },
  statusLabelSuccess: {
    color: Colors.WHITE,
  },
});
