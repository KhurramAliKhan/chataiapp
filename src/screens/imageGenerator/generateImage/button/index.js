import React from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {Button} from '@commonComponents';
import {windowHeight} from '@theme/appConstant';

export default button = ({getImages, t}) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.main}>
      <Button
        text={t('image.generateImage')}
        onPress={() => getImages('256x256', true)}
        marginBottom={windowHeight(0)}
        width={'92%'}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    zIndex: 1,
    position: 'absolute',
    bottom: windowHeight(12),
    alignSelf: 'center',
    width: '100%',
  },
});
