import React, {useEffect} from 'react';
import {Tab} from '../screens';
import {DrawerContent} from '@otherComponent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {windowWidth} from '@theme/appConstant';
import {useTranslation} from 'react-i18next';
import {getValue} from '@utils/localStorage';

const Drawer = createDrawerNavigator();

export default DrawerNavigator = () => {

  const {i18n} = useTranslation();

  useEffect(() => {
    getSelected();
  }, []);

  const getSelected = async () => {
    var selectedLanguge = await getValue('languageCode');
    i18n.changeLanguage(selectedLanguge);
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        drawerStyle: {
          borderTopRightRadius: windowWidth(6),
          borderBottomRightRadius: windowWidth(6),
          width: windowWidth(60),
        },
        drawerType: 'front',
      }}
      useLegacyImplementation={false}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Tab"
        component={Tab}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
