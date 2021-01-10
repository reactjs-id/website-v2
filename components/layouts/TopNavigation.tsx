import * as React from 'react'
import {
  List,
  ListItem,
  Grid,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { NextChakraLink } from '~/components/helpers'
import theme from '~/utils/theme'
import { Logo } from '../ui'

interface TopNavigationProps {
  title: string
}

const TopNavigation: React.FC<TopNavigationProps> = ({ title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Grid
      as="nav"
      templateColumns={`1fr 1fr minmax(auto, ${theme.sizes['6xl']}) 1fr 1fr`}
      backgroundColor="gray.900"
      color="white"
      height={['88px', '80px']}
      zIndex={50}
    >
      <List display="flex" flexWrap="wrap" alignItems="center" gridColumn="3/4" m={0} p={0}>
        <ListItem display="flex" alignItems="center" pos="relative" h="100%" mr="auto">
          <NextChakraLink
            href="/"
            display="flex"
            alignItems="center"
            py=".5rem"
            px="1rem"
            h="100%"
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}
          >
            <Logo height={40} fill={theme.colors.white} title={title} />
          </NextChakraLink>
        </ListItem>

        <ListItem display={['none', 'flex']} alignItems="center" h="100%">
          <NextChakraLink
            href="/community"
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
          </NextChakraLink>
        </ListItem>

        <ListItem display={['none', 'flex']} alignItems="center" h="100%">
          <NextChakraLink
            href="/submit-a-talk"
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
          </NextChakraLink>
        </ListItem>

        <ListItem display={['none', 'flex']} alignItems="center" h="100%">
          <NextChakraLink
            href="/faq"
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
          </NextChakraLink>
        </ListItem>

        <ListItem py="1.5rem" px="1rem" display={['flex', 'none']} alignItems="center" h="100%">
          <IconButton variant="outline" aria-label="Open menu" icon={<HamburgerIcon />} onClick={onOpen} />

          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu Utama</DrawerHeader>

              <DrawerBody>
                <NextChakraLink
                  href="/community"
                  display="flex"
                  alignItems="center"
                  py="1.5rem"
                  px="1rem"
                  color="inherit"
                  lineHeight={1}
                  _hover={{ bg: 'rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}
                >
                  Komunitas
                </NextChakraLink>

                <NextChakraLink
                  href="/submit-a-talk"
                  display="flex"
                  alignItems="center"
                  py="1.5rem"
                  px="1rem"
                  color="inherit"
                  lineHeight={1}
                  _hover={{ bg: 'rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}
                >
                  Ajukan Topik
                </NextChakraLink>

                <NextChakraLink
                  href="/faq"
                  display="flex"
                  alignItems="center"
                  py="1.5rem"
                  px="1rem"
                  color="inherit"
                  lineHeight={1}
                  _hover={{ bg: 'rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}
                >
                  FAQ
                </NextChakraLink>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </ListItem>
      </List>
    </Grid>
  )
}

export default TopNavigation
