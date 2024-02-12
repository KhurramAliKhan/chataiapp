import React from 'react';
import {View, Text, Platform} from 'react-native';
import styles from './styles';
import {TestIds, BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import {useValues} from '@utils/context';

export default ad = () => {
  const {t, generalSettings} = useValues();

  const bannerAdUnitId =
    generalSettings && generalSettings.ads_Settings
      ? Platform.OS === 'android'
        ? generalSettings.ads_Settings.ad_banner_android_id
        : generalSettings.ads_Settings.ad_banner_ios_id
      : TestIds.BANNER;
  const date = new Date();
  const curruntTime = date.toLocaleString([], {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return (
    <View style={styles.adView}>
      <BannerAd
        unitId={bannerAdUnitId}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      <Text style={styles.time}>
        {t('chat.today')}, {curruntTime}
      </Text>
    </View>
  );
};
