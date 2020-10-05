import * as React from 'react'
import NextLink from 'next/link'
import { List, ListItem, Grid, Link as ChakraLink } from '@chakra-ui/core'
import Logo from '../Ui/Logo'
import customColors from '~/utils/theme'

interface TopNavigationProps {
  title: string
}

const TopNavigation: React.FC<TopNavigationProps> = ({ title }) => (
  <Grid
    templateColumns="1fr 1fr minmax(auto, 1140px) 1fr 1fr"
    bg={customColors.colors.gray08}
    color={customColors.colors.white}
    h={80}
    zIndex={50}
  >
    <List display="flex" flexWrap="wrap" alignItems="center" gridColumn="3/4" m={0} p={0}>
      <ListItem display="flex" alignItems="center" pos="relative" h="100%" mr="auto">
        <NextLink href="/">
          <ChakraLink
            display="flex"
            alignItems="center"
            py=".5rem"
            px="1rem"
            h="100%"
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}
          >
            <Logo height="40" fill={customColors.colors.white} title={title} />
          </ChakraLink>
        </NextLink>
      </ListItem>

      <ListItem display="flex" alignItems="center" h="100%">
        <NextLink href="/community">
          <ChakraLink
            display="flex"
            alignItems="center"
            py="1.5rem"
            px="1rem"
            color="inherit"
            h="100%"
            lineHeight={1}
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}
          >
            Komunitas
          </ChakraLink>
        </NextLink>
      </ListItem>

      <ListItem display="flex" alignItems="center" h="100%">
        <NextLink href="/submit-a-talk">
          <ChakraLink
            display="flex"
            alignItems="center"
            py="1.5rem"
            px="1rem"
            color="inherit"
            h="100%"
            lineHeight={1}
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}
          >
            Ajukan Topik
          </ChakraLink>
        </NextLink>
      </ListItem>

      <ListItem display="flex" alignItems="center" h="100%">
        <NextLink href="/faq">
          <ChakraLink
            display="flex"
            alignItems="center"
            py="1.5rem"
            px="1rem"
            color="inherit"
            h="100%"
            lineHeight={1}
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}
          >
            FAQ
          </ChakraLink>
        </NextLink>
      </ListItem>
    </List>
  </Grid>
)

export default TopNavigation
