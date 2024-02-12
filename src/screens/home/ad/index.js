import React from 'react';
import {Platform, View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import styles from './styles';
import {useValues} from '@utils/context';

export default ad = () => {
  const {generalSettings} = useValues();

  const bannerAdUnitId =
    generalSettings && generalSettings.ads_Settings
      ? Platform.OS === 'android'
        ? generalSettings.ads_Settings.ad_banner_android_id
        : generalSettings.ads_Settings.ad_banner_ios_id
      : TestIds.BANNER;
  return (
    <View style={styles.main}>
      <BannerAd
        unitId={bannerAdUnitId}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
};
