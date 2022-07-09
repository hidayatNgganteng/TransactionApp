import {Image, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {Img} from '../assets';
import {BANK_NAME_MASK, DATE_IDN_FORMAT, IDR_MASK} from '../utils/formater';
import {Colors, FontSize} from '../styles';

interface DetailsCard {
  senderBank: string;
  beneficiaryBank: string;
  beneficiaryName: string;
  accountNumber: string;
  amount: number;
  remark: string;
  uniqueCode: string;
  createdAt: string;
}

const DetailsCard = ({
  senderBank,
  beneficiaryBank,
  beneficiaryName,
  accountNumber,
  amount,
  remark,
  uniqueCode,
  createdAt,
}: DetailsCard) => {
  return (
    <View>
      <View style={styles.info}>
        <Text style={styles.infoText}>{BANK_NAME_MASK(senderBank)}</Text>
        <Image source={Img.RIGHT_ARROW} style={styles.arrow} />
        <Text style={styles.infoText}>{BANK_NAME_MASK(beneficiaryBank)}</Text>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Text style={styles.title}>{`- ${beneficiaryName}`}</Text>
          <Text style={styles.value}>{accountNumber}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Nominal</Text>
          <Text style={styles.value}>Rp{IDR_MASK(amount)}</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Text style={styles.title}>BERITA TRANSFER</Text>
          <Text style={styles.value}>{remark}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>KODE UNIK</Text>
          <Text style={styles.value}>{uniqueCode}</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Text style={styles.title}>WAKTU DIBUAT</Text>
          <Text style={styles.value}>{DATE_IDN_FORMAT(createdAt)}</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(DetailsCard);

const ARROW_SIZE = 17;
const styles = StyleSheet.create({
  info: {
    paddingTop: 25,
    flexDirection: 'row',
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  infoText: {
    color: Colors.BLACK,
    fontSize: FontSize.MEDIUM,
    fontWeight: '800',
  },
  arrow: {
    width: ARROW_SIZE,
    height: ARROW_SIZE,
    marginHorizontal: 7,
  },
  wrapper: {
    backgroundColor: Colors.WHITE,
    marginTop: 18,
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 25,
  },
  value: {
    fontSize: FontSize.SEMI_MEDIUM,
    color: Colors.BLACK,
    marginTop: 7,
    fontWeight: '500',
  },
  title: {
    fontSize: FontSize.SEMI_MEDIUM,
    color: Colors.BLACK,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
