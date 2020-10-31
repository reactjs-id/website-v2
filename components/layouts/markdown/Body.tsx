import { BoxProps, List, ListItem, Text } from '@chakra-ui/core'
import * as React from 'react'

export const P: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Text as="p" {...rest}>
      {children}
    </Text>
  )
}

export const UL: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <List styleType="disc" {...rest}>
      {children}
    </List>
  )
}

export const OL: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <List as="ol" styleType="decimal" {...rest}>
      {children}
    </List>
  )
}

export const LI: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <ListItem {...rest}>{children}</ListItem>
}
