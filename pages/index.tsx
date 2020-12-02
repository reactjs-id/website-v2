import * as React from 'react'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { Box, Flex, Heading, Text, Grid, Img } from '@chakra-ui/react'

import { Content, Page } from '~/components/layouts'
import { HomePageHeader } from '~/components/home'
import { LinkButton } from '~/components/ui'
import learningResources from '~/resources/learnings.json'
import LearningCard from '~/components/learning/LearningCard'

const IndexPage: NextPage = () => (
  <Page>
    <Content>
      <HomePageHeader
        welcomeMessage="Selamat Datang"
        title="Komunitas Developer ReactJS Indonesia"
        desc="ReactJS ID adalah komunitas para developer React dan React Native. Kami mengadakan ajang meetup setiap bulannya, dimana para developer React bertukar informasi mengenai React dan ekosistemnya."
      />
      <Box backgroundColor="#f2f2f2" px={[4, null, null, 8]} py={['3.1em', null, null, '6.1em']}>
        <Box mx="auto" maxWidth="6xl">
          <Grid gridTemplateColumns={['1fr', null, null, '1fr 1fr']} gridGap={8} alignItems="center">
            <Img
              display={['none', null, null, 'block']}
              gridColumn={1}
              width="400px"
              height="400px"
              src="/rumah-komunitas/tshirt.jpg"
              alt="tshirt from rumah komunitas"
            />
            <Grid gridColumn={[1, null, null, 2]}>
              <Heading as="h2" mb={2} size="md" textTransform="uppercase" fontWeight={300}>
                Kabar Gembira!
              </Heading>
              <Heading as="h3" size="2xl" fontWeight={600}>
                Merchandise Resmi ReactJS Indonesia
              </Heading>
              <Text as="p" my="18px">
                Merchandise resmi ReactJS Indonesia kini tersedia berkat kerjasama oleh Rumah Komunitas. Klik link di bawah untuk
                mendapatkan T-shirt dan jaket ReactJS Indonesia.
              </Text>
              <LinkButton ml="-16px" href="https://www.rumahkomunitas.com/react-indonesia" isExternal>
                Dapatkan Segera
              </LinkButton>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box backgroundColor="reactBlue.100" px={[4, null, null, 8]} py={['3.1em', null, null, '6.1em']}>
        <Grid gap="2px" justifyContent="center" gridAutoFlow="row" textAlign="center" mx="auto" maxWidth="6xl">
          <Heading as="h2" mb={2} color="gray.900" size="md" textTransform="uppercase" fontWeight={300}>
            Ingin Belajar React?
          </Heading>
          <Heading as="h3" color="gray.900" size="2xl" fontWeight={600}>
            Materi Pembelajaran
          </Heading>
          <Text as="p" color="gray.900" my="1.2em">
            Beberapa konsep React memang terlihat janggal, tapi diluar itu React sangat mudah untuk dipelajari dan dipahami, baik mereka
            yang sudah mahir dalam JavaScript modern ataupun yang baru saja memulai. Cobalah memulai dari salah satu materi di bawah.
          </Text>
          <Grid gridTemplateColumns="repeat(auto-fit, minmax(calc(296px), 1fr))" gap="24px" mt="24px">
            {learningResources
              .filter(resource => resource.featured)
              .map(item => (
                <LearningCard heading={item.type} title={item.title} desc={item.description} href={item.url} key={item.title} />
              ))}
          </Grid>
          <Flex justifyContent="center" mt="4em">
            <NextLink href="/learning">
              <LinkButton _hover={{ backgroundColor: 'reactBlue.900' }} mt="auto" backgroundColor="reactBlue.800" color="white">
                Lihat Selengkapnya
              </LinkButton>
            </NextLink>
          </Flex>
        </Grid>
      </Box>
    </Content>
  </Page>
)
export default IndexPage
