import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import {styles} from './styles';
import {Search} from '@utils/icons';
import appColors from '@theme/appColors';
import {useValues} from '@utils/context';

export default function SearchInput({getText, data}) {
  const [searchValue, setSearchValue] = useState(data);
  const {viewRTLStyle, textRTLStyle, colors} = useValues();

  const {t} = useValues();

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <TouchableOpacity>
          <Search color={appColors.gray} />
        </TouchableOpacity>
        <TextInput
          placeholder={t('image.search')}
          value={searchValue}
          style={[styles.textInputContainer, {textAlign: textRTLStyle}]}
          onChangeText={text => {
            setSearchValue(text);
            getText(text);
          }}
          placeholderTextColor={appColors.gray}
        />
      </View>
    </View>
  );
}
