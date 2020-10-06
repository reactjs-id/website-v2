import * as React from 'react'

import { Stack, Grid, Text, Link } from '@chakra-ui/core'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => (
  <Grid as="footer" px="24px" py="36px" color="#888" bg="#111" templateColumns="1fr 1fr minmax(auto, 1140px) 1fr 1fr" className={className}>
    <Stack align="center" justify="center" gridColumn="3/4" textAlign="center">
      <section>
        <Text margin="0" lineHeight="20px" fontSize="12px">
          &copy; 2020 ReactJS ID.
        </Text>
        <Text margin="0" lineHeight="20px" fontSize="12px">
          Kode sumber situs ini tersedia di{' '}
          <Link href="https://github.com/reactjs-id/reactjs.id" isExternal color="#fff" rel="noopener noreferrer">
            GitHub
          </Link>
          . Gambar latar disediakan oleh{' '}
          <Link href="https://www.transparenttextures.com/" isExternal color="#fff" rel="noopener noreferrer">
            Transparent Textures
          </Link>
          .
        </Text>
      </section>
    </Stack>
  </Grid>
)

export default Footer
