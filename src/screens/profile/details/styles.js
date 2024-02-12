import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  details: {
    backgroundColor: appColors.iconBg,
    marginHorizontal: windowWidth(6),
    borderRadius: 10,
    paddingVertical: windowHeight(2),
  },
  phone: {
    fontFamily: appFonts.OutfitRegular,
    marginBottom: windowHeight(1),
    fontSize: windowWidth(4.2),
    marginLeft: windowWidth(5.2),
    fontWeight: '600',
    color: appColors.white,
    marginTop: windowHeight(1),
  },
  mainView: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: windowHeight(22),
  },
  leftCurv: {
    width: '6%',
    alignSelf: 'center',
    borderTopEndRadius: 6,
    borderBottomEndRadius: 6,
    height: 15,
  },
  curv: {
    height: 15,
    borderColor: appColors.iconBg,
    borderEndColor: 'transparent',
    borderWidth: windowWidth(0.7),
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  rightCurv: {
    height: 15,
    borderColor: appColors.iconBg,
    borderStartColor: 'transparent',
    borderWidth: windowHeight(0.5),
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
});
