import React from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import styles from './styles';
import {playAd} from '@utils/gif';
import LinearGradient from 'react-native-linear-gradient';
import {
  TestIds,
  RewardedAd,
  RewardedAdEventType,
} from 'react-native-google-mobile-ads';
import {useValues} from '@utils/context';
import appColors from '@theme/appColors';

export default limit = ({t, changeCount,loading}) => {
  const {viewRTLStyle, generalSettings} = useValues();
  const rewardAdUnitId = generalSettings
    ? Platform.OS === 'android'
      ? generalSettings?.ads_Settings?.ad_reward_android_id
      : generalSettings?.ads_Settings?.ad_reward_ios_id
    : TestIds.REWARDED;
  const rewarded = RewardedAd.createForAdRequest(rewardAdUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });
  const callRewardAd = () => {
    loading()
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        rewarded.show();
      },
    );
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        changeCount();
        console.log('User earned reward');
      },
    );
    rewarded.load();
    loading()
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  };

  return (
    <View style={styles.limitContainer}>
      <LinearGradient
        colors={[
          appColors.limitBg,
          appColors.limitBgLight,
          appColors.limitBgMedium,
          appColors.limitBgDark,
          appColors.red,
        ]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.7}}
        style={styles.limit}>
        <Text style={styles.text}>
          {t('chat.messageLimit')}{' '}
          <Text style={styles.reward}>{t('chat.clickBelow')}</Text>
          <Text style={styles.reward}>{t('chat.reward')}</Text>
        </Text>
      </LinearGradient>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.playAdContainer, {flexDirection: viewRTLStyle}]}
        onPress={callRewardAd}>
        <Image source={playAd} style={styles.ad} />
        <Text style={styles.watchNow}>{t('chat.watchNow')}</Text>
      </TouchableOpacity>
    </View>
  );
};
