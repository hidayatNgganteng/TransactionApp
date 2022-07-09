import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import assets from '../assets';
import {COLOR, FONTSIZE} from '../themes/typography';
import {DATE_IDN_FORMAT, IDR_MASK} from '../utils/formater';

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
  const isSuccess = status === 'success';

  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[styles.container, isSuccess && styles.containerSuccess]}>
      <View style={styles.wrapLeft}>
        <View style={styles.bank}>
          <Text style={styles.bankLabel}>{senderBank}</Text>
          <Image source={assets.images.rightArrow} style={styles.arrow} />
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
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 17,
    borderLeftColor: COLOR.orange,
    borderRadius: 10,
    borderLeftWidth: 10,
    paddingLeft: 17,
    paddingRight: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  containerSuccess: {
    borderLeftColor: COLOR.green,
  },
  wrapLeft: {
    flex: 1,
  },
  bank: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankLabel: {
    fontSize: FONTSIZE.semiMedium,
    fontWeight: 'bold',
    color: COLOR.black,
  },
  arrow: {
    width: ARROW_SIZE,
    height: ARROW_SIZE,
    marginHorizontal: 5,
  },
  name: {
    fontSize: FONTSIZE.semiMedium,
    fontWeight: '500',
    marginVertical: 5,
    color: COLOR.black,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: FONTSIZE.semiMedium,
    marginHorizontal: 5,
    color: COLOR.black,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: COLOR.black,
  },
  status: {
    borderWidth: 2,
    borderColor: COLOR.orange,
    borderRadius: 7,
    paddingHorizontal: 13,
    paddingVertical: 6,
  },
  statusSuccess: {
    borderColor: COLOR.green,
    backgroundColor: COLOR.green,
  },
  statusLabel: {
    fontSize: FONTSIZE.small,
    color: COLOR.black,
    fontWeight: 'bold',
  },
  statusLabelSuccess: {
    color: COLOR.white,
  },
});
