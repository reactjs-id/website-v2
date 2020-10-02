import * as React from 'react'
import { CSSReset, ColorModeProvider, ThemeProvider } from '@chakra-ui/core'

import theme from '~/utils/theme'

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider value="light">
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ThemeProvider>
)

export default AppProvider
