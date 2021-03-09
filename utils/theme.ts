import { ColorMode, extendTheme } from '@chakra-ui/react';
// 2. Add your color mode config

export interface ChakraConfig {
  initialColorMode: ColorMode;
  useSystemColorMode: boolean;
}

const config: ChakraConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};
// 3. extend the theme
const theme = extendTheme({ config });
export default theme;
