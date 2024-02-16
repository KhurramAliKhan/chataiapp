import React from 'react';
import {
  SelectLanguage,
  SelectCharacter,
  AllowNotification,
  Chat,
  ChatHistory,
  WallPapers,
  NoInternet,
  SignIn,
  SignUp,
  ResetPassword,
  OTPVerification,
  ChangePassword,
  // SelectPlan,
  ApiKey,
  // SelectedPlan,
  ImagePreview,
  Profile,
  // Paypal,
  // Razorpay,
  AddFingerPrint,
  Splash,
  IntroSlider,
  OnBoarding,
  PhoneVerification,
} from '../screens';
import Drawer from './drawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Splash}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="IntroSlider" component={IntroSlider} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
        <Stack.Screen name="SelectCharacter" component={SelectCharacter} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="AllowNotification" component={AllowNotification} />
        <Stack.Screen name="ChatHistory" component={ChatHistory} />
        <Stack.Screen name="ImagePreview" component={ImagePreview} />
        <Stack.Screen name="WallPapers" component={WallPapers} />
        <Stack.Screen name="NoInternet" component={NoInternet} />
        <Stack.Screen name="ApiKey" component={ApiKey} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        {/* <Stack.Screen name="SelectPlan" component={SelectPlan} /> */}
        {/* <Stack.Screen name="SelectedPlan" component={SelectedPlan} />
        <Stack.Screen name="Razorpay" component={Razorpay} />
        <Stack.Screen name="Paypal" component={Paypal} /> */}
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AddFingerPrint" component={AddFingerPrint} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
