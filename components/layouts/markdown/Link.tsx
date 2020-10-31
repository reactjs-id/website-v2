import * as React from 'react'
import { Link as BaseLink } from '@chakra-ui/core'

const Link: React.FC<{ href: string }> = ({ children, href }) => (
  <BaseLink href={href} isExternal backgroundColor="#a8d8fc80">
    {children}
  </BaseLink>
)

export default Link
