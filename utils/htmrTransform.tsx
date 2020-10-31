import * as React from 'react'
import { Text } from '@chakra-ui/core'

import { Link, H1, H2, H3, H4, H5, H6, UL, LI, OL } from '~/components/layouts/markdown'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const htmrTransform = {
  p: ({ children, ...rest }) => (
    <Text mb={6} {...rest}>
      {children}
    </Text>
  ),
  a: Link,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  ul: UL,
  ol: OL,
  li: LI
} as ComponentsType

export default htmrTransform
