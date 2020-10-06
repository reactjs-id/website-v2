import { Box } from '@chakra-ui/core'
import * as React from 'react'

const Content: React.FC = ({ children }) => {
  return (
    <Box as="main" flex="1 1 auto">
      {children}
    </Box>
  )
}

export default Content
