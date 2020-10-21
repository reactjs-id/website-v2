import { Box } from '@chakra-ui/core'
import * as React from 'react'

interface PageBodyProps {
  bgColor?: string
}

const PageBody: React.FC<PageBodyProps> = ({ children, bgColor }) => {
  return (
    <Box as="section" px={[4, null, null, 8]} flex="1 1 auto" bg={bgColor}>
      <Box mx="auto" maxWidth="3xl">
        {children}
      </Box>
    </Box>
  )
}

export default PageBody
