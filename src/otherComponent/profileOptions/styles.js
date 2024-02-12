import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  modalView: {
    width: '100%',
    backgroundColor: appColors.modalContainer,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: windowHeight(3),
    alignItems: 'center',
  },
  gradient: {
    width: '100%',
    borderRadius: 20,
  },
  mainView: {
    backgroundColor: appColors.modal1,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    margin: 1,
  },
  backGroundView: {
    position: 'absolute',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  selectFile: {
    fontFamily: appFonts.OutfitMedium,
    color: appColors.language,
    fontSize: fontSizes.FONT5,
  },
  optionsView: {
    flexDirection: 'row',
    marginVertical: windowHeight(3),
    width: '70%',
    justifyContent: 'space-between',
  },
  options: {
    alignItems: 'center',
  },
  option: {
    height: windowHeight(10),
    width: windowHeight(10),
    borderRadius: windowHeight(5),
    backgroundColor: appColors.primary,
    marginVertical: windowHeight(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: appFonts.OutfitRegular,
    color: appColors.language,
    fontSize: fontSizes.FONT3HALF,
  },
});
