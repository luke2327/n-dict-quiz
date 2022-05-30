import React from 'react';

import { Theme } from '@mui/material';
import { PureLightTheme } from './schemes/pureLightTheme';

export function themeCreator(theme: string): Theme {
  return themeMap[theme];
}

type ColorProperties = React.CSSProperties['color'];

// Button태그에 새로운 variant 추가
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    white: true;
  }
}

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    white: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    white: true;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      gradients: {
        blue1: string;
        blue2: string;
        blue3: string;
        orange1: string;
        orange2: string;
        purple1: string;
        pink1: string;
        pink2: string;
        green1: string;
        black1: string;
      };
      shadows: {
        success: string;
        error: string;
        primary: string;
        warning: string;
      };
      alpha: {
        white: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        trueWhite: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        black: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
      };
      secondary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      success: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      warning: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      error: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      info: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      highlight: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
    };
    general: {
      reactFrameworkColor: ColorProperties;
      borderRadiusSm: string;
      borderRadius: string;
      borderRadiusLg: string;
      borderRadiusXl: string;
      innerHeaderWidth: string;
    };
    sidebar: {
      background: ColorProperties;
      boxShadow: ColorProperties;
      width: string;
      textColor: ColorProperties;
      dividerBg: ColorProperties;
      menuItemColor: ColorProperties;
      menuItemColorActive: ColorProperties;
      menuItemBg: ColorProperties;
      menuItemBgActive: ColorProperties;
      menuItemIconColor: ColorProperties;
      menuItemIconColorActive: ColorProperties;
      menuItemHeadingColor: ColorProperties;
    };
    header: {
      height: string;
      background: ColorProperties;
      boxShadow: ColorProperties;
      textColor: ColorProperties;
    };
  }

  interface ThemeOptions {
    colors: {
      gradients: {
        blue1: string;
        blue2: string;
        blue3: string;
        orange1: string;
        orange2: string;
        purple1: string;
        pink1: string;
        pink2: string;
        green1: string;
        black1: string;
      };
      shadows: {
        success: string;
        error: string;
        primary: string;
        warning: string;
      };
      alpha: {
        white: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        trueWhite: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        black: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
      };
      secondary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      success: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      warning: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      error: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      info: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      highlight: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
    };
    // breakpoints: {
    //   values: {
    //     mobile: number;
    //     tablet: number;
    //     desktop: number;
    //   };
    // };
    general: {
      reactFrameworkColor: ColorProperties;
      borderRadiusSm: string;
      borderRadius: string;
      borderRadiusLg: string;
      borderRadiusXl: string;
      innerHeaderWidth: string;
    };
    sidebar: {
      background: ColorProperties;
      boxShadow: ColorProperties;
      width: string;
      textColor: ColorProperties;
      dividerBg: ColorProperties;
      menuItemColor: ColorProperties;
      menuItemColorActive: ColorProperties;
      menuItemBg: ColorProperties;
      menuItemBgActive: ColorProperties;
      menuItemIconColor: ColorProperties;
      menuItemIconColorActive: ColorProperties;
      menuItemHeadingColor: ColorProperties;
    };
    header: {
      height: string;
      background: ColorProperties;
      boxShadow: ColorProperties;
      textColor: ColorProperties;
    };
  }
}

const themeMap: { [key: string]: Theme } = {
  PureLightTheme,
};
