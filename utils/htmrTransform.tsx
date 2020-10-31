import * as React from 'react'
import { Text } from '@chakra-ui/core'

import { Link, Heading } from '~/components/layouts/markdown'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const transform = {
  p: ({ children }) => <Text mb={6}>{children}</Text>,
  a: Link,
  h2: Heading
} as ComponentsType

export default transform
