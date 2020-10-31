import * as React from 'react'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { Box, PseudoBox, Flex, Link, Heading, Text, Grid, Image } from '@chakra-ui/core'

import { Content, Page } from '~/components/layouts'
import { HomePageHeader } from '~/components/home'
import { LinkButton } from '~/components/ui'
import learningResources from '~/resources/learnings.json'

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
          <Grid gridTemplateColumns={['1fr', null, null, 'max-content 1fr']} gridGap={8} alignItems="center">
            <Image
              display={['none', null, null, 'block']}
              gridColumn={1}
              size={400}
              src="/rumah-komunitas/tshirt.jpg"
              alt="tshirt from rumah komunitas"
            />
            <Grid gridColumn={[1, null, null, 2]}>
              <Heading as="h2" fontSize="lg" textTransform="uppercase" fontWeight={300}>
                Kabar Gembira!
              </Heading>
              <Heading as="h3" fontSize="5xl" fontWeight={600}>
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
          <Heading as="h2" color="gray.900" fontSize="lg" textTransform="uppercase" fontWeight={300}>
            Ingin Belajar React?
          </Heading>
          <Heading as="h3" color="gray.900" fontSize="48px" lineHeight="56px" fontWeight={600}>
            Materi Pembelajaran
          </Heading>
          <Text as="p" color="gray.900" my="1.2em">
            Beberapa konsep React memang terlihat janggal, tapi diluar itu React sangat mudah untuk dipelajari dan dipahami, baik mereka
            yang sudah mahir dalam JavaScript modern ataupun yang baru saja memulai. Cobalah memulai dari salah satu materi di bawah.
          </Text>
          <Grid gridTemplateColumns="repeat(auto-fit, minmax(calc(296px), 1fr))" gap="24px" mt="24px">
            {learningResources
              .filter(resource => resource.featured)
              .map((resource, i) => (
                <PseudoBox
                  key={i.toString()}
                  role="group"
                  backgroundColor="white"
                  border="none"
                  boxShadow="rgba(0, 0, 0, 0.25) 0px 2px 4px"
                  minHeight="320px"
                  borderRadius="8px"
                  py="1em"
                  px="1.5em"
                  cursor="pointer"
                  _hover={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 6px 8px' }}
                >
                  <Link h="100%" href={resource.url} isExternal _hover={{ outline: 'none' }}>
                    <Flex flexDirection="column" alignItems="flex-start" h="inherit">
                      <Heading color="gray.900" as="h4" mb="4px" fontSize="md" fontWeight={300} textTransform="uppercase">
                        {resource.type}
                      </Heading>
                      <Heading textAlign="left" color="gray.900" as="h5" fontSize="2xl" fontWeight={600}>
                        {resource.title}
                      </Heading>
                      <Text as="p" textAlign="left" color="gray.900" mt="0.5em" mb="1.3em">
                        {resource.description}
                      </Text>
                      <LinkButton
                        _hover={undefined}
                        _groupHover={{ backgroundColor: 'reactBlue.900' }}
                        as="span"
                        mt="auto"
                        backgroundColor="reactBlue.800"
                        color="white"
                      >
                        Kunjungi Situs
                      </LinkButton>
                    </Flex>
                  </Link>
                </PseudoBox>
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
