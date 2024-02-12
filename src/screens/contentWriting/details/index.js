import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import appColors from '@theme/appColors';
import {Button} from '@commonComponents';
import styles from './styles';
import {contentOptions} from '@utils/arrays';
import {useValues} from '@utils/context';
import {chatAPI} from '@config/chatGptApi';
import {DropDown, AvailableBalance} from '@otherComponent';
import {getValue, setValue} from '@utils/localStorage';
import {POST_API} from '@config/methods';

export default details = ({callAlert, setLoading, getResponse}) => {
  const [topic, setTopic] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {
    textRTLStyle,
    setRewardCoins,
    rewardCoins,
    t,
    keyAvailable,
    generalSettings,
  } = useValues();

  const callContentAPI = async () => {
    const coins = await getValue('rewardCount');
    const key = await getValue('apiKey');
    const originalKey = atob(generalSettings.general_settings.chatgpt_api_key);
    const apikey = key ? key : originalKey;
    if (parseInt(coins) === 0) {
      setModalVisible(!modalVisible);
    } else {
      setTopic('');
      setLoading(true);
      const res = await chatAPI(topic, apikey);
      setLoading(false);
      if (res != 'error') {
        getResponse(res);
        if (!keyAvailable) {
          updateCoins();
        }
      } else {
        if (res.val === 'error') {
          callAlert();
        }
      }
    }
  };

  const updateCoins = async () => {
    const val = rewardCoins - 1;
    setRewardCoins(val);
    var data = {coins: val};
    await POST_API(data, 'user/coins');
    setValue('rewardCount', val.toString());
  };

  return (
    <View style={styles.detail}>
      <DropDown
        title={'contentOptions.businessIdea'}
        label={'contentOptions.businessIdea'}
        data={contentOptions}
        buttonStyle={styles.button}
        dropdownStyle={styles.dropDown}
        style
        onSelect={() => {}}
      />
      <Text style={[styles.labelStyle, {textAlign: textRTLStyle}]}>
        {t('contentWriting.topic')}
      </Text>
      <TextInput
        value={topic}
        onChangeText={value => setTopic(value)}
        placeholder={t('contentWriting.placeholder')}
        style={[styles.textInputStyle, {textAlign: textRTLStyle}]}
        placeholderTextColor={appColors.gray}
      />
      <Button
        text={'contentWriting.generateContent'}
        onPress={callContentAPI}
        width={'90%'}
      />
      <AvailableBalance
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};
