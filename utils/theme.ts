import { theme as baseTheme } from '@chakra-ui/core'

const customColors = {
  white: '#fff',
  gray01: '#fafafa',
  gray02: '#efefef',
  gray03: '#999',
  gray04: '#888',
  gray05: '#666',
  gray06: '#444',
  gray07: '#333',
  gray08: '#111',
  lightGray: '#ffffff1a',
  black: '#000',
  lightBlue: '#a8d8fc',
  brand: '#f87b6e',
  astronautBlue: '#254763',
  tangaroa: '#091219'
}

const fonts = {
  body:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  get heading() {
    return this.body
  },
  mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
}

const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    ...customColors
  },
  fonts
}

export default theme
