import * as React from 'react'
import { Box } from '@chakra-ui/react'

const Section: React.FC = ({ children }) => {
  return (
    <Box as="section" bg="lightBlue">
      {children}
    </Box>
  )
}

export default Section
