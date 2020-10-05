import * as React from 'react'
import { CSSReset, ColorModeProvider, ThemeProvider } from '@chakra-ui/core'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'

import theme from '~/utils/theme'

const AppProvider: React.FC = ({ children }) => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider value="light">{children}</ColorModeProvider>
    </ThemeProvider>
  </CacheProvider>
)

export default AppProvider
