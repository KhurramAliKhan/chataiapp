import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {HidePassword, ShowPassword} from '@utils/icons';
import {useValues} from '@utils/context';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export function Input(props) {
  const {
    value,
    name,
    onChangeText,
    onBlur,
    title,
    placeholder,
    error,
    keyboardType,
    onChange,
    password,
    editable,
    marginTop,
    color,
    hideText,
  } = props;

  const [hidePassword, setHidePassword] = useState(password);
  const {textRTLStyle, direction, t} = useValues();

  return (
    <View style={styles.mainContainer}>
      {!hideText && (
        <Text
          style={[
            styles.title,
            {
              textAlign: textRTLStyle,
              right: direction ? windowWidth(6) : null,
              marginTop: marginTop ? marginTop : windowHeight(1),
            },
          ]}>
          {t(title)}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          {
            textAlign: textRTLStyle,
            backgroundColor: color ? color : appColors.input,
          },
        ]}
        editable={editable ? false : true}
        placeholder={t(placeholder)}
        onChange={onChange}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        value={value}
        name={name}
        secureTextEntry={hidePassword}
        onBlur={onBlur}
        placeholderTextColor={appColors.subText}
      />
      {password && (
        <TouchableOpacity
          onPress={() => setHidePassword(!hidePassword)}
          style={[
            styles.password,
            {
              left: direction ? windowWidth(8) : null,
              right: !direction ? windowWidth(8) : null,
            },
          ]}>
          {hidePassword ? <HidePassword /> : <ShowPassword />}
        </TouchableOpacity>
      )}
      {error != undefined && <Text style={styles.err}>{t(error)}</Text>}
    </View>
  );
}

export default Input;
