import React from 'react';
import {View, TouchableOpacity, Platform} from 'react-native';
import {ModalContainer} from '@commonComponents';
import {Cross} from '@utils/icons';
import Coins from './coins';
import WantMore from './wantMore';
import styles from './styles';
import {
  TestIds,
  RewardedAd,
  RewardedAdEventType,
} from 'react-native-google-mobile-ads';
import {useValues} from '@utils/context';
import {POST_API} from '@config/methods';
import {setValue} from '@utils/localStorage';

export function AvailableBalance({modalVisible, setModalVisible}) {
  const {setRewardCoins, rewardCoins, generalSettings} = useValues();

  const rewardAdUnitId =
    generalSettings && generalSettings.ads_Settings
      ? Platform.OS === 'android'
        ? generalSettings.ads_Settings.ad_reward_android_id
        : generalSettings.ads_Settings.ad_reward_ios_id
      : TestIds.REWARDED;
  const rewarded = RewardedAd.createForAdRequest(rewardAdUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });
  const callRewardAd = () => {
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        rewarded.show();
      },
    );
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        updateCoins();
        console.log('User earned reward');
      },
    );
    rewarded.load();
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  };

  const updateCoins = async () => {
    const val = parseInt(rewardCoins) + 1;
    setRewardCoins(val);
    setModalVisible(!modalVisible);
    setValue('rewardCount', val.toString());
    var data = {coins: val};
    await POST_API(data, 'user/coins');
  };

  return (
    <ModalContainer
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      hideHeader
      content={
        <View style={styles.main}>
          <Coins />
          <WantMore callRewardAd={callRewardAd} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.cancel}
            onPress={() => setModalVisible(!modalVisible)}>
            <Cross />
          </TouchableOpacity>
        </View>
      }
    />
  );
}
