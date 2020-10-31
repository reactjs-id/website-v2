import { Box, Stack } from '@chakra-ui/core'
import * as React from 'react'
import convert from 'htmr'
import htmrTransform from '~/utils/htmrTransform'

interface PageBodyProps {
  content?: string
}

const PageBody: React.FC<PageBodyProps> = ({ children, content }) => {
  if (content) {
    return (
      <Box as="section" px={[4, null, null, 8]} flex="1 1 auto">
        <Box mx="auto" maxWidth="3xl" pt={6} pb={12}>
          <Stack spacing={4}>{convert(content, { transform: htmrTransform })}</Stack>
        </Box>
      </Box>
    )
  }

  return (
    <Box as="section" px={[4, null, null, 8]} flex="1 1 auto">
      <Box mx="auto" maxWidth="3xl" py={6}>
        {children}
      </Box>
    </Box>
  )
}

export default PageBody
