import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {DropDown} from '@otherComponent';
import {imageSize, viewType} from '@utils/arrays';

export default filter = ({t, setSelected, getImages}) => {
  return (
    <View style={styles.dropDownContainer}>
      <DropDown
        title={t('image.imageSize') + '    :'}
        label={t('image.selectSize')}
        data={imageSize}
        onSelect={getImages}
      />
      <DropDown
        title={t('image.viewType') + '    :'}
        label={t('image.SelectType')}
        data={viewType}
        onSelect={setSelected}
      />
    </View>
  );
};
