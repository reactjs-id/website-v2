import * as React from 'react'
import Link from 'next/link'
import { List, ListItem, Grid } from '@chakra-ui/core'
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
      <ListItem
        display="flex"
        h="100%"
        pos="relative"
        mr="auto"
        alignItems="center"
        py={2}
        px={4}
        cursor="pointer"
        _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
      >
        <Link href="/">
          <Logo height="40" fill={customColors.colors.white} title={title} />
        </Link>
      </ListItem>

      <ListItem display="flex" alignItems="center" h="100%" py="1.5rem" px="1rem" _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}>
        <Link href="/community">Komunitas</Link>
      </ListItem>

      <ListItem display="flex" alignItems="center" h="100%" py="1.5rem" px="1rem" _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}>
        <Link href="/submit-a-talk">Ajukan Topik</Link>
      </ListItem>

      <ListItem display="flex" alignItems="center" h="100%" py="1.5rem" px="1rem" _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}>
        <Link href="/faq">FAQ</Link>
      </ListItem>
    </List>
  </Grid>
)

export default TopNavigation
