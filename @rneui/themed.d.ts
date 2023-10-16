// themed.d.ts
import '@rneui/themed';
import { Theme } from 'react-native-elements';

declare module 'react-native-elements' {
  export interface Theme {
    foo: string
  }
}
