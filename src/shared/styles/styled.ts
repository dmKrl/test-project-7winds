// styled.ts

export interface ITheme {
    colors: {
        primary: string
        secondary: string
        success: string
        danger: string
        borderLine: string

        bg: string,
        font: string,
        fontBlur: string,
        fontIntup: string,
    }

    sizes: {
        header: { height: number }
        navbar: { height: number }
        sidebar: { width: number }
        container: { width: number }
    }

    durations: {
        ms300: number
    }

    order: {
        header: number
        modal: number
    },
}
