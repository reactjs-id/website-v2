import * as React from 'react'
import { NextPage } from 'next'
import { Box, PseudoBox, Flex, Link, Heading, Text, Grid, Image } from '@chakra-ui/core'

import { Content, Page, PageHeader } from '~/components/layouts'
import { LinkButton } from '~/components/ui'
import learningResources from '~/resources/learnings.json'

const IndexPage: NextPage = () => (
  <Page>
    <Content>
      <PageHeader
        desc="ReactJS ID adalah komunitas para developer React dan React Native. Kami mengadakan ajang meetup setiap bulannya, dimana para developer React bertukar informasi mengenai React dan ekosistemnya."
        isHomePage
        welcomeMessage="SELAMAT DATANG"
        title="Komunitas Developer ReactJS Indonesia"
      />

      <Box backgroundColor="#f2f2f2">
        <Grid gridTemplateColumns="max-content 1fr" columnGap="5em" alignItems="center" py="6em" px="11%">
          <Image display={['hidden', null, null, '']} size="400px" src="/rumah-komunitas/tshirt.jpg" alt="tshirt from rumah komunitas" />
          <Grid>
            <Heading as="h2" fontSize="md" fontWeight={300}>
              KABAR GEMBIRA!
            </Heading>
            <Heading as="h3" fontSize="4xl" fontWeight={600}>
              Merchandise Resmi ReactJS Indonesia
            </Heading>
            <Text as="p" my="18px">
              Merchandise resmi ReactJS Indonesia kini tersedia berkat kerjasama oleh Rumah Komunitas. Klik link di bawah untuk mendapatkan
              T-shirt dan jaket ReactJS Indonesia.
            </Text>
            <LinkButton ml="-16px" href="https://www.rumahkomunitas.com/react-indonesia" isExternal>
              Dapatkan Segera
            </LinkButton>
          </Grid>
        </Grid>
      </Box>

      <Box backgroundColor="lightBlue" paddingX="8.5em" paddingY="6em">
        <Grid gap="2px" justifyContent="center" gridAutoFlow="row" textAlign="center">
          <Heading as="h2" color="gray08" fontSize="lg" fontWeight={300}>
            INGIN BELAJAR REACT?
          </Heading>
          <Heading as="h3" fontSize="48px" lineHeight="56px">
            Materi Pembelajaran
          </Heading>
          <Text as="p" my="1.2em">
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
                      <Heading color="astronautBlue" as="h4" mb="4px" fontSize="md" fontWeight={300} textTransform="uppercase">
                        {resource.type}
                      </Heading>
                      <Heading textAlign="left" color="gray08" as="h5" fontSize="2xl" fontWeight={600}>
                        {resource.title}
                      </Heading>
                      <Text textAlign="left" as="p" mt="0.5em" mb="1.3em">
                        {resource.description}
                      </Text>
                      <LinkButton
                        _hover={undefined}
                        _groupHover={{ backgroundColor: 'tangaroa' }}
                        as="span"
                        mt="auto"
                        backgroundColor="astronautBlue"
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
            <LinkButton _hover={{ backgroundColor: 'tangaroa' }} mt="auto" backgroundColor="astronautBlue" color="white">
              Lihat Selengkapnya
            </LinkButton>
          </Flex>
        </Grid>
      </Box>
    </Content>
  </Page>
)
export default IndexPage
