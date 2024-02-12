import React, {useState} from 'react';
import {Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {border} from '@utils/images';
import LinearGradient from 'react-native-linear-gradient';
import {coin} from '@utils/gif';
import appColors from '@theme/appColors';
import styles from './styles';
import {useValues} from '@utils/context';
import {AvailableBalance} from '@otherComponent';

export function Balance() {
  const {rewardCoins, viewRTLStyle} = useValues();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ImageBackground source={border} style={styles.main} resizeMode="contain">
      <TouchableOpacity
        style={[styles.balanceView, {flexDirection: viewRTLStyle}]}
        activeOpacity={0.8}
        onPress={() => setModalVisible(!modalVisible)}>
        <Image source={coin} style={styles.coin} />
        <LinearGradient
          useAngle={true}
          angle={123.26}
          locations={[-86.3, 125.31]}
          colors={[appColors.balanceGardient1, appColors.balanceGardient2]}
          style={styles.gradient}>
          <Text style={styles.balance}>{rewardCoins}</Text>
        </LinearGradient>
      </TouchableOpacity>
      <AvailableBalance
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </ImageBackground>
  );
}
