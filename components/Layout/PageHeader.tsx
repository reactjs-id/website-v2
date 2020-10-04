import { Box, Heading } from '@chakra-ui/core'
import * as React from 'react'

interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <Box as="header" py={[4, null, null, 8]} px={[4, null, null, 8]}>
      <Box mx="auto" maxWidth="3xl">
        <Heading as="h1" size="2xl">
          {title}
        </Heading>
      </Box>
    </Box>
  )
}

export default PageHeader
