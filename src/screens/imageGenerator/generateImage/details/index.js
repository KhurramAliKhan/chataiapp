import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import SearchInput from './searchInput';
import GridType from './gridType';
import PageType from './pageType';
import SearchNow from './searchNow';
import Filter from './filter';
import {useValues} from '@utils/context';

export default details = ({
  clearImage,
  navigation,
  getImages,
  getText,
  imageData,
  searchValue,
  selected,
  setSelected,
}) => {
  const {t, viewRTLStyle} = useValues();

  const goToPreview = image => {
    navigation.navigate('ImagePreview', {image: image});
  };
  console.log('selected', selected);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SearchInput getText={getText} data={searchValue} />
      <Filter t={t} setSelected={setSelected} getImages={getImages} />
      {!selected ? (
        <SearchNow />
      ) : selected && selected.value == 2 ? (
        <GridType
          images={imageData}
          goToPreview={goToPreview}
          clearImage={clearImage}
          viewRTLStyle={viewRTLStyle}
        />
      ) : (
        <PageType
          images={imageData}
          goToPreview={goToPreview}
          clearImage={clearImage}
        />
      )}
    </ScrollView>
  );
};
