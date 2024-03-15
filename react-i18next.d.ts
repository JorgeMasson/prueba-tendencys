import 'react-i18next';
import {Resources} from 'i18next';

declare module 'react-i18next' {
  interface CustomResources extends Resources {
    translation: {
      marca: string;
    };
  }

  export function useTranslation(): {
    t: TFunction<CustomResources>;
    i18n: i18n;
  };
}
