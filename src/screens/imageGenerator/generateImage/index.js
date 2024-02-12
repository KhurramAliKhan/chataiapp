import React, {useState, useRef} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Header, AnimatedAlert} from '@commonComponents';
import {imageAPI} from '@config/chatGptApi';
import {GlobalStyle} from '@style';
import Animation from './animation';
import Button from './button';
import {AvailableBalance, Loader} from '@otherComponent';
import {getValue, setValue} from '@utils/localStorage';
import {useValues} from '@utils/context';
import {POST_API} from '@config/methods';
import Details from './details';

export default imageGenerator = ({navigation, callAlert}) => {
  const [selected, setSelected] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [clearImage, setClearImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState([]);
  const animRef = useRef();
  const messageRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const {t, setRewardCoins, rewardCoins, keyAvailable, generalSettings} =
    useValues();
  const getText = val => {
    setSearchValue(val);
  };

  const getImages = async (val, loading) => {
    const coins = await getValue('rewardCount');
    const key = await getValue('apiKey');
    const originalKey = atob(generalSettings.general_settings.chatgpt_api_key);
    const apikey = key ? key : originalKey;
    if (parseInt(coins) === 0) {
      setModalVisible(modalVisible);
    } else {
      if (searchValue != '') {
        var size = val ? val.value : '256x256';
        setLoading(loading);
        setClearImage(true);
        const res = await imageAPI(searchValue, size, apikey);
        console.log('res', res);
        setClearImage(false);
        setLoading(false);
        if (res != 'error') {
          setImageData(res);
          animRef.current.animateView();
          {
            !keyAvailable && updateCoins();
          }
        } else {
          console.log('in else');
          callAlert();
        }
        !selected && setSelected({value: 2});
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
    <SafeAreaView style={GlobalStyle.mainView}>
      <View>
        <Header title={'home.imageGenerator'} showBalance />
        {loading ? (
          <Loader />
        ) : (
          <Details
            clearImage={clearImage}
            navigation={navigation}
            getImages={getImages}
            getText={getText}
            imageData={imageData}
            searchValue={searchValue}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </View>
      {!loading && searchValue && <Button t={t} getImages={getImages} />}
      <Animation ref={animRef} />
      <AnimatedAlert
        text={'commonContent.somethingWentWrong'}
        ref={messageRef}
      />
      <AvailableBalance
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};
