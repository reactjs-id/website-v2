import { Box, Flex } from '@chakra-ui/core'
import * as React from 'react'

const AppRoot: React.FC = ({ children }) => {
  return (
    <Flex flexDir="column" minH="100vh" justifyContent="space-between">
      <Box as="main" flexGrow={1}>
        {children}
      </Box>
    </Flex>
  )
}

export default AppRoot
