import { List, ListItem, ListItemProps, ListProps, Text, TextProps } from '@chakra-ui/react'
import * as React from 'react'

export const P: React.FC<JSX.IntrinsicElements['p'] & TextProps> = ({ children, ...rest }) => {
  return (
    <Text as="p" {...rest}>
      {children}
    </Text>
  )
}

export const UL: React.FC<JSX.IntrinsicElements['ul'] & ListProps> = ({ children, ...rest }) => {
  return (
    <List styleType="disc" {...rest}>
      {children}
    </List>
  )
}

export const OL: React.FC<JSX.IntrinsicElements['ol'] & ListProps> = ({ children, ...rest }) => {
  return (
    <List as="ol" styleType="decimal" {...rest}>
      {children}
    </List>
  )
}

export const LI: React.FC<JSX.IntrinsicElements['li'] & ListItemProps> = ({ children, ...rest }) => {
  return <ListItem {...rest}>{children}</ListItem>
}
