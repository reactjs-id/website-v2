import * as React from 'react'
import { Heading, HeadingProps } from '@chakra-ui/core'

const DEFAULT_HEADING_WEIGHT = 600

export const H1: React.FC = ({ children, ...rest }) => (
  <Heading mb={2} as="h1" size="2xl" fontWeight={DEFAULT_HEADING_WEIGHT} {...rest}>
    {children}
  </Heading>
)

export const H2: React.FC<HeadingProps> = ({ children, ...rest }) => (
  <Heading mb={2} as="h2" size="xl" fontWeight={DEFAULT_HEADING_WEIGHT} {...rest}>
    {children}
  </Heading>
)

export const H3: React.FC<HeadingProps> = ({ children, ...rest }) => (
  <Heading mb={2} as="h3" size="lg" fontWeight={DEFAULT_HEADING_WEIGHT} {...rest}>
    {children}
  </Heading>
)

export const H4: React.FC<HeadingProps> = ({ children, ...rest }) => (
  <Heading mb={2} as="h4" size="md" fontWeight={DEFAULT_HEADING_WEIGHT} {...rest}>
    {children}
  </Heading>
)

export const H5: React.FC<HeadingProps> = ({ children, ...rest }) => (
  <Heading mb={2} as="h5" size="md" fontWeight={DEFAULT_HEADING_WEIGHT} {...rest}>
    {children}
  </Heading>
)

export const H6: React.FC<HeadingProps> = ({ children, ...rest }) => (
  <Heading mb={2} as="h6" size="md" fontWeight={DEFAULT_HEADING_WEIGHT} {...rest}>
    {children}
  </Heading>
)
