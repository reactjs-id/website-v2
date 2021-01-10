import * as React from 'react'
import { Link, Text, LinkProps } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const LinkButton: React.FC<LinkProps> = ({ children, ...props }) => (
  <Link
    display="grid"
    padding="0 16px"
    height="40px"
    _hover={{ backgroundColor: '#0000001a' }}
    gridAutoFlow="column"
    gridAutoColumns="max-content"
    justifyContent="center"
    alignItems="center"
    width="max-content"
    borderRadius="4px"
    {...props}
  >
    <Text>{children}</Text>
    <ArrowForwardIcon size="21px" ml="8px" />
  </Link>
)

export default LinkButton
