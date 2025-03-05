import { ITheme } from './styled';

export const baseTheme: ITheme = {
    colors: {
        primary: '#27272A',
        secondary: '#202124',
        success: '#4caf50',
        danger: '#f44336',
        borderLine: '#414144',

        bg: '#202124',
        font: '#FFF',
        fontBlur: '#A1A1AA',
        fontIntup: '#71717A',
    },

    media: {
        extraLarge: '(max-width: 1140px)',
        large: '(max-width: 960px)',
        medium: '(max-width: 720px)',
        small: '(max-width: 540px)',
    },

    // in px
    sizes: {
        header: { height: 88 },
        navbar: { height: 44 },
        sidebar: { width: 234 },
        container: { width: 1920 },
    },

    // in ms
    durations: {
        ms300: 300,
    },

    // z-index
    order: {
        header: 50,
        modal: 100,
    },
};
