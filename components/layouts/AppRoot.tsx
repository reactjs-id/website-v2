import { Flex } from '@chakra-ui/core'
import * as React from 'react'

const AppRoot: React.FC = ({ children }) => {
  return (
    <Flex flexDir="column" minH="100vh">
      {children}
    </Flex>
  )
}

export default AppRoot
