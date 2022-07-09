import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import SortModalCard from './sortModalCard';
import {Colors} from '../styles';

interface ISortModal {
  data: any[];
  onSelect: (item: any) => void;
  onClose: () => void;
}

const SortModal = ({data, onSelect, onClose}: ISortModal) => {
  return (
    <TouchableOpacity onPress={onClose} style={styles.container}>
      <View style={styles.contentArea}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <SortModalCard
              key={index.toString()}
              label={item.label}
              selected={item.selected}
              onSelect={() => onSelect(item.order)}
            />
          )}
        />
      </View>
    </TouchableOpacity>
  );
};

export default memo(SortModal);

const WIDTH_SCREEN = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  contentArea: {
    width: WIDTH_SCREEN - 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
});
