import {
  slider1,
  slider2,
  slider3,
  hindi,
  english,
  french,
  italian,
  japanese,
  german,
  payPal,
  inApp,
  razorpay,
  wallpaper5,
  wallpaper6,
  stripe,
} from './images';

import {
  AskAnything,
  ImageGenerator,
  ContentWriting,
  FingerPrintLock,
  HomeIcon,
  ActiveHome,
  ChatIcon,
  ActiveChat,
  ImageIcon,
  ActiveImage,
  ContentIcon,
  ActiveContent,
  SettingIcon,
  ActiveSetting,
  ChatHistory,
  Rtl,
  ChangePassword,
  MyAccount,
  ApiKey,
  Character,
  Language,
  RateApp,
  ShareApp,
  Privacy,
  ShareContent,
  Delete,
  Copy,
} from './icons';
import {wallpaper1, wallpaper2, wallpaper3, wallpaper4} from './gif';
import appColors from '@theme/appColors';

export const Slides = [
  {
    Image: slider1,
    title: 'introSlider.personalAi',
    subTitle: 'introSlider.personalAiDesc',
  },
  {
    Image: slider2,
    title: 'introSlider.generateImage',
    subTitle: 'introSlider.generateImageDesc',
  },
  {
    Image: slider3,
    title: 'introSlider.createContent',
    subTitle: 'introSlider.contentDesc',
  },
];

export const dashboardOptions = [
  {
    image: <AskAnything />,
    title: 'home.askAnything',
  },
  {
    image: <ImageGenerator />,
    title: 'home.imageGenerator',
  },
  {
    image: <ContentWriting />,
    title: 'home.contentWriting',
  },
];

export const languages = [
  {
    id: 0,
    image: english,
    title: 'languageContent.english',
    code: 'en',
  },
  {
    id: 1,
    image: hindi,
    title: 'languageContent.hindi',
    code: 'hi',
  },
  {
    id: 2,
    image: french,
    title: 'languageContent.french',
    code: 'fr',
  },
  {
    id: 3,
    image: italian,
    title: 'languageContent.italian',
    code: 'it',
  },
  {
    id: 4,
    image: japanese,
    title: 'languageContent.japanese',
    code: 'jp',
  },
  {
    id: 5,
    image: german,
    title: 'languageContent.german',
    code: 'de',
  },
];

export const tab = [
  {
    title: 'bottomTab.home',
    inActiveIcon: <HomeIcon />,
    activeIcon: <ActiveHome />,
  },
  {
    title: 'bottomTab.chat',
    inActiveIcon: <ChatIcon />,
    activeIcon: <ActiveChat />,
    key: 'isChatShow',
  },
  {
    title: 'bottomTab.image',
    inActiveIcon: <ImageIcon />,
    activeIcon: <ActiveImage />,
    key: 'isImageGeneratorShow',
  },
  {
    title: 'bottomTab.content',
    inActiveIcon: <ContentIcon />,
    activeIcon: <ActiveContent />,
    key: 'isTextCompletionShow',
  },
  {
    title: 'bottomTab.settings',
    inActiveIcon: <SettingIcon />,
    activeIcon: <ActiveSetting />,
  },
];


export const chatWallpapers = [
  {img: wallpaper1, id: 0},
  {img: wallpaper2, id: 1},
  {img: wallpaper3, id: 2},
  {img: wallpaper4, id: 3},
  {img: wallpaper5, id: 4},
  {img: wallpaper6, id: 5},
];

export const drawerOptions = [
  {
    image: <ChatIcon color={appColors.language} />,
    title: 'commonContent.chatBot',
    key: 'isChatShow',
  },
  {
    image: <ChatHistory />,
    title: 'commonContent.chatHistory',
    key: 'isChatHistoryEnable',
  },
  {
    image: <ImageIcon color={appColors.language} />,
    title: 'commonContent.imgeGenerator',
    key: 'isImageGeneratorShow',
  },
  {
    image: <ContentIcon color={appColors.language} />,
    title: 'commonContent.contentWriter',
    key: 'isTextCompletionShow',
  },
  {
    image: <SettingIcon color={appColors.language} />,
    title: 'bottomTab.settings',
  },
];

export const imageSize = [
  {
    label: '256*256',
    value: '256x256',
  },
  {
    label: '512*512',
    value: '512x512',
  },
  {
    label: '1024*1024',
    value: '1024x1024',
  },
];

export const viewType = [
  {
    label: 'imageType.pageType',
    value: 1,
  },
  {
    label: 'imageType.gridType',
    value: 2,
  },
];

export const ChatOptions = [
  {name: 'chatOptions.shareToFriend'},
  {name: 'chatOptions.changeBackground'},
  {name: 'chatOptions.clearChat'},
];

export const contentWriting = [
  {icon: <ShareContent />},
  {icon: <Delete />},
  {icon: <Copy />},
];

export const settings = [
  {
    title: 'personalSettings',
    data: [
      {
        name: 'setting.myAccount',
        icon: <MyAccount />,
        screen: 'Profile',
        loginNeeded: true,
        iscreen: false,
      },
      {
        name: 'setting.apiKey',
        icon: <ApiKey />,
        screen: 'ApiKey',
        loginNeeded: true,
        iscreen: true,
      },
      {
        name: 'setting.fingerprintLock',
        icon: <FingerPrintLock />,
        screen: 'AddFingerPrint',
        loginNeeded: false,
        iscreen: true,
      },
      {
        name: 'changePass.changePassword',
        icon: <ChangePassword />,
        screen: 'ResetPassword',
        loginNeeded: true,
        iscreen: true,
      },
    ],
  },
  {
    title: 'preferenceSettings',
    data: [
      {
        name: 'setting.character',
        icon: <Character />,
        screen: 'SelectCharacter',
        loginNeeded: false,
        iscreen: true,
      },
      {
        name: 'setting.language',
        icon: <Language />,
        screen: 'SelectLanguage',
        loginNeeded: false,
        iscreen: true,
      },
      {
        name: 'setting.rtl',
        icon: <Rtl />,
        switch: true,
        loginNeeded: false,
        iscreen: false,
        key: 'isRTL',
      },
    ],
  },
  {
    title: 'appSettings',
    data: [
      {
        name: 'setting.rateApp',
        icon: <RateApp />,
        screen: '',
        loginNeeded: false,
        iscreen: false,
      },
      {
        name: 'setting.shareApp',
        icon: <ShareApp />,
        screen: '',
        loginNeeded: false,
        iscreen: false,
      },
      {
        name: 'setting.privacyTerm',
        icon: <Privacy />,
        screen: '',
        loginNeeded: false,
        iscreen: false,
      },
    ],
  },
];

export const contentOptions = [
  {
    id: 1,
    label: 'contentOptions.businessIdea',
  },
  {
    id: 2,
    label: 'contentOptions.coverLetter',
  },
  {
    id: 3,
    label: 'contentOptions.blogSection',
  },
  {
    id: 4,
    label: 'contentOptions.marketingWriting',
  },
  {
    id: 5,
    label: 'contentOptions.service',
  },
];

export const chatHistroyOptions = [
  {
    id: 1,
    name: 'chatHistory.selectAll',
  },
  {
    id: 2,
    name: 'chatHistory.ClearAll',
  },
];

export const paymentOptions = [
  {
    id: 0,
    name: 'paymentOptions.payPal',
    selected: false,
    image: payPal,
  },
  {
    id: 1,
    name: 'paymentOptions.razorPay',
    selected: false,
    image: razorpay,
  },
  // {
  //   id: 2,
  //   name: 'paymentOptions.inAppPurchase',
  //   selected: false,
  //   image: inApp,
  // },
  {
    id: 3,
    name: 'paymentOptions.stripe',
    selected: false,
    image: stripe,
  },
];

export const curruncyOptions = [
  {
    id: 0,
    CurrencyName: 'CurruncyOptions.usDollar',
    selected: false,
    icon: '$',
    value: 1,
    code: 'usd',
  },
  {
    id: 1,
    CurrencyName: 'CurruncyOptions.euro',
    selected: false,
    icon: '€',
    value: 0.9,
    code: 'eur',
  },
  {
    id: 2,
    CurrencyName: 'CurruncyOptions.inr',
    selected: false,
    icon: '₹',
    value: 82.04,
    code: 'inr',
  },
  {
    id: 3,
    CurrencyName: 'CurruncyOptions.pound',
    selected: false,
    icon: '£',
    value: 0.8,
    code: 'gbp',
  },
];

export var Images;
