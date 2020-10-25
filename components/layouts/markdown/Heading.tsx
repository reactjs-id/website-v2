import * as React from 'react'
import { Heading as BaseHeading } from '@chakra-ui/core'

const Heading: React.FC = ({ children }) => (
  <BaseHeading mb={2} as="h1" size="xl">
    {children}
  </BaseHeading>
)

export default Heading
