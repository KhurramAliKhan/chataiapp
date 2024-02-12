import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    backgroundColor: appColors.modalContainer,
    borderRadius: windowHeight(1),
    paddingVertical: windowHeight(3),
    alignItems: 'center',
    shadowColor: appColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: windowHeight(2),
  },
  row: {
    width: windowWidth(78),
    justifyContent: 'space-between',
    marginBottom: windowHeight(2),
  },
  heading: {
    fontSize: fontSizes.FONT5,
    fontFamily: appFonts.OutfitBold,
    color: appColors.language,
    fontWeight: '500',
  },
  blankView: {
    height: windowHeight(1.5),
  },
  linearGradient: {
    backgroundColor: appColors.gradientBg,
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: '90%',
    borderRadius: 10,
  },
  mainView: {
    backgroundColor: appColors.modal1,
    borderRadius: 10,
    margin: 1,
  },
});
