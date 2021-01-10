import * as React from 'react'
import { Link as BaseLink, LinkProps } from '@chakra-ui/react'

const Link: React.FC<LinkProps> = ({ children, href }) => (
  <BaseLink
    href={href}
    isExternal
    borderBottom="1px solid"
    borderBottomColor="gray.400"
    backgroundColor="#a8d8fc80"
    _hover={{ backgroundColor: '#a8d8fc', borderBottomColor: 'gray.800' }}
  >
    {children}
  </BaseLink>
)

export default Link
