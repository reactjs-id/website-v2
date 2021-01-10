import { extendTheme } from '@chakra-ui/react'

const customColors = {
  white: '#fff',
  black: '#000',
  gray: {
    50: '#f2f2f3',
    100: '#d7d9da',
    200: '#bdc1c1',
    300: '#a3a7a9',
    400: '#888e90',
    500: '#6e7477',
    600: '#545b5f',
    700: '#394146',
    800: '#1f272e',
    900: '#091219'
  },
  reactBlue: {
    50: '#e6fafe',
    100: '#b4f1fd',
    200: '#83e4fc',
    300: '#61dafb',
    400: '#4eb0cd',
    500: '#408faa',
    600: '#327087',
    700: '#245164',
    800: '#153441',
    900: '#07171e'
  }
}

const fonts = {
  body:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  get heading() {
    return this.body
  },
  mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
}

const theme = extendTheme({
  colors: customColors,
  fonts
})

export default theme
