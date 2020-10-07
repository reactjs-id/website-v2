import * as React from 'react'
import { NextPage } from 'next'
import { Box, Text, Heading, Link } from '@chakra-ui/core'

import { Page, PageBody, PageHeader } from '~/components/Layout'
import Navigation from '~/components/Navigation'
import Content from '~/components/Content'

const CommunityPage: NextPage = () => (
  <Page title="Komunitas">
    <Navigation />
    <Content>
      <PageHeader title="Komunitas" />
      <PageBody>
        <Text mb={5}>
          Bergabunglah dengan komunitas React Indonesia untuk mendapatkan informasi terbaru mengenai React dan ekosistemnya.
        </Text>

        <Box mb={5}>
          <Heading mb={2} as="h1" size="xl">
            Meetup
          </Heading>
          <Text mb={5}>
            Bergabung dengan Meetup group ReactJS ID untuk mendapatkan update mengenai ajang meetup ReactJS ID yang diadakan setiap
            bulannya.
          </Text>
          <Text as="mark">
            <Link href="https://www.meetup.com/reactindonesia/">meetup.com/reactindonesia</Link>
          </Text>
        </Box>

        <Box mb={5}>
          <Heading mb={2} as="h1" size="xl">
            Telegram
          </Heading>
          <Text mb={5}>
            Grup Telegram ReactJS Indonesia adalah tempat dimana Anda bisa langsung bertanya kepada pakar ReactJS dari Indonesia. Anda juga
            akan mendapatkan berita-berita terkini mengenai ekosistem React, Lowongan Kerja, dan update mengenai ajang meetup setiap
            bulannya.
          </Text>
          <Text as="mark">
            <Link href="https://t.me/react_id">t.me/react_id</Link>
          </Text>
        </Box>

        <Box mb={5}>
          <Heading mb={2} as="h1" size="xl">
            Facebook
          </Heading>
          <Text mb={5}>
            Bergabunglah dengan grup Facebook ReactJS Indonesia, Anda bisa mendapatkan informasi terkini mengenai perkembangan ReactJS,
            lowongan pekerjaan terkait, dan masih banyak lagi informasi bermanfaat lainnya.
          </Text>
          <Text as="mark">
            <Link href="https://www.facebook.com/groups/442974152553174/">ReactJS Indonesia</Link>
          </Text>
        </Box>
      </PageBody>
    </Content>
  </Page>
)

export default CommunityPage
