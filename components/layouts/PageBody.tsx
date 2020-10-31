import { Box } from '@chakra-ui/core'
import * as React from 'react'

const PageBody: React.FC = ({ children }) => {
  return (
    <Box as="section" px={[4, null, null, 8]} flex="1 1 auto">
      <Box mx="auto" maxWidth="3xl" pt={6}>
        {children}
      </Box>
    </Box>
  )
}

export default PageBody
