import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import hi from './hi.json';
import en from './en.json';
import fr from './fr.json';
import it from './it.json';
import jp from './jp.json';
import de from './de.json';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources: {
    hi: hi,
    en: en,
    fr: fr,
    it: it,
    jp: jp,
    de: de,
  },
});

export default i18next;
