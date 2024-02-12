import React, {createContext, useState, useContext, useEffect} from 'react';
import {
  textRTLStyle,
  viewRTLStyle,
  imageRTLStyle,
  viewSelfRTLStyle,
} from '../style/rtlStyles';
import {useTranslation} from 'react-i18next';
import {getValue} from './localStorage';

export const AppContext = createContext();

export const AppContextProvider = props => {
  const [direction, setDirection] = useState(false);
  const [rewardCoins, setRewardCoins] = useState(5);
  const [selectedTab, setSelectedTab] = useState(0);
  const [keyAvailable, setKeyAvailable] = useState(false);
  const [generalSettings, setGeneralSettings] = useState({});

  const {t} = useTranslation();

  useEffect(() => {
    getDirectionVal();
    checkValue();
  }, []);

  const getDirectionVal = async () => {
    var val = await getValue('rtl');
    val = val === 'true';
    if (val !== null) {
      setDirection(val);
    }
  };
  const checkValue = async () => {
    const key = await getValue('isKey');
    const generalSettings = await getValue('generalSettings');
    if (key) {
      setKeyAvailable(true);
    } else {
      setKeyAvailable(false);
    }
    if (generalSettings) {
      setGeneralSettings(generalSettings);
    }
  };
  useEffect(() => {
    getRewardsCoins();
  }, []);

  const getRewardsCoins = async () => {
    const res = await getValue('rewardCount');
    const generalSettings = JSON.parse(await getValue('generalSettings'));
    console.log('generalSettings', generalSettings);
    setRewardCoins(res);
    if (res != null) {
      setRewardCoins(res);
    } else {
      generalSettings
      ? generalSettings.general_settings.free_chat_limit > 5 ||
        (generalSettings.general_settings.free_chat_limit &&
          setRewardCoins(generalSettings.general_settings.free_chat_limit))
      : setRewardCoins(5);
    }
  };

  const values = {
    direction,
    setDirection,
    textRTLStyle: textRTLStyle(direction),
    viewRTLStyle: viewRTLStyle(direction),
    imageRTLStyle: imageRTLStyle(direction),
    viewSelfRTLStyle: viewSelfRTLStyle(direction),
    t,
    rewardCoins,
    setRewardCoins,
    selectedTab,
    setSelectedTab,
    keyAvailable,
    setKeyAvailable,
    generalSettings,
    setGeneralSettings,
  };

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export const useValues = () => useContext(AppContext);
