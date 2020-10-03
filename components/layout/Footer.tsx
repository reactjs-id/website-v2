import * as React from 'react'

import { Box, Grid } from '@chakra-ui/core'
import styled from '@emotion/styled'

const Root = styled(Grid)`
  padding: 36px 24px;
  color: #888;
  background-color: #111;
  a {
    color: #fff;
  }
`

const Inner = styled('div')`
  display: flex;
  grid-column: 3/4;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Paragraph = styled('p')`
  margin: 0;
  font-size: 12px;
  line-height: 20px;
`

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => (
  <Root as="footer" templateColumns="1fr 1fr minmax(auto, 1140px) 1fr 1fr" className={className}>
    <Inner>
      <section>
        <Paragraph>&copy; 2019 ReactJS ID.</Paragraph>
        <Paragraph>
          Kode sumber situs ini tersedia di{' '}
          <a href="https://github.com/reactjs-id/reactjs.id" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          . Gambar latar disediakan oleh{' '}
          <a href="https://www.transparenttextures.com/" target="_blank" rel="noopener noreferrer">
            Transparent Textures
          </a>
          .
        </Paragraph>
      </section>
    </Inner>
  </Root>
)

export default Footer
