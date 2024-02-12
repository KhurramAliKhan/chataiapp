import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SelectCharacters} from '@utils/icons';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {bg, line} from '@utils/images';
import RadialGradient from 'react-native-radial-gradient';
import styles from './styles';
import {setValue} from '@utils/localStorage';
import {useValues} from '@utils/context';

export default items = props => {
  const {item, select, setSelect, index} = props;
  const {viewRTLStyle} = useValues();
  const storeCharacter = (item) => {
    setSelect(item.id);
    setValue('characterId', item.id.toString());
    setValue('characterName', item.name);
    setValue('characterUrl', item.image_url);
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
        <View style={styles.itemBg}>
          <RadialGradient
            style={styles.gradientBg}
            colors={[item.shadow_color, 'transparent', 'transparent']}
            stops={[0.1, 0.3, 0.3, 0.75]}
            center={[37, 37]}
            radius={74}
          />
        </View>
        {item.image_url && (
          <Image source={{uri: item.image_url}} style={styles.image} />
        )}
      </ImageBackground>
      <View style={styles.nameContainer}>
        <Image source={line} style={styles.line} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => storeCharacter(item)}>
          <LinearGradient
            useAngle={true}
            angle={175.16}
            locations={[-11.02, 123.34]}
            colors={
              select === item.id
                ? [appColors.primary, appColors.primary]
                : [appColors.iconBg, appColors.charBg1]
            }
            style={[
              styles.gradient,
              {
                flexDirection: viewRTLStyle,
              },
            ]}>
            {select === item.id && (
              <View style={styles.character}>
                <SelectCharacters />
              </View>
            )}
            <Text style={styles.title}>{item.name}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
