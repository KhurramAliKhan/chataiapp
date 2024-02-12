import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.FONT4,
    fontFamily: appFonts.OutfitRegular,
    color: appColors.language,
    fontWeight: '600',
  },
  button: {
    padding: windowHeight(2),
    marginVertical: windowHeight(1),
    alignItems: 'center',
    backgroundColor: appColors.iconBg,
    height: windowHeight(6.5),
    width: windowWidth(40),
    justifyContent: 'space-around',
    borderRadius: windowHeight(1),
    alignSelf: 'center',
  },
  buttonText: {
    flex: 1,
    fontSize: fontSizes.FONT3HALF,
    fontFamily: appFonts.OutfitMedium,
    textAlign: 'left',
    color: appColors.language,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: appColors.language,
    width: '120%',
    shadowColor: appColors.black,
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
    borderRadius: windowHeight(0.5),
    elevation: 1,
    padding: windowHeight(1),
  },
  overlay: {
    width: '35%',
    height: '100%',
  },
  item: {
    padding: windowHeight(1.6),
  },
  label: {
    color: appColors.text,
    fontSize: fontSizes.FONT3HALF,
    fontFamily: appFonts.OutfitSemiBold,
  },
  items: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
