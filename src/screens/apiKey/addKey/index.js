import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {View, Text} from 'react-native';
import {Input} from '@commonComponents';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {useValues} from '@utils/context';
import Notes from './notes';
import appColors from '@theme/appColors';

export default addKey = forwardRef((props, ref) => {
  const {isKey, getApiKey, apiKey} = props;
  const [key, setKey] = useState(apiKey);
  const [error, setError] = useState('');
  const {textRTLStyle, t} = useValues();
  useEffect(() => {
    setKey(apiKey);
  }, [apiKey]);
  const checkVal = () => {
    if (key === '') {
      setError('Please enter key');
    }
  };
  useImperativeHandle(ref, () => ({
    checkVal: () => {
      checkVal();
    },
  }));

  return (
    <View style={styles.main}>
      <LinearGradient
        useAngle={true}
        angle={182.32}
        locations={[3.51, 103.04]}
        colors={[appColors.buttonText, appColors.keyBg]}
        style={styles.addKeyView}>
        {!isKey && (
          <Text style={[styles.addKey, {textAlign: textRTLStyle}]}>
            {t('apiKey.addKey')}
          </Text>
        )}
        <Text style={[styles.apiKey, {textAlign: textRTLStyle}]}>
          {t('apiKey.apiKey')}
        </Text>
        <Input
          color="#263949"
          editable={isKey}
          value={key}
          placeholder={t('apiKey.enterKey')}
          hideText
          onChangeText={text => {
            setKey(text);
            setError('');
            getApiKey(text);
          }}
          error={error}
        />
      </LinearGradient>
      <Notes />
    </View>
  );
});
