import * as React from 'react'
import { InferGetStaticPropsType, NextPage } from 'next'

import { Box, Grid, Heading, Text } from '@chakra-ui/core'
import { Content, Page } from '~/components/layouts'
import LearningCard from '~/components/learning/LearningCard'

import learningResources from '~/resources/learnings.json'

export const getStaticProps = async () => {
  const featuredMaterials = learningResources.filter(item => item.featured)
  const theRest = learningResources.filter(item => !item.featured)

  return { props: { featuredMaterials, theRest } }
}

type LearningPageProps = InferGetStaticPropsType<typeof getStaticProps>

const LearningPage: NextPage<LearningPageProps> = ({ featuredMaterials, theRest }) => (
  <Page title="Learning">
    <Content>
      <Box as="section" backgroundColor="reactBlue.100" px={[4, null, null, 8]} py={['3.1em', null, null, '6.1em']}>
        <Grid gap="2px" justifyContent="center" gridAutoFlow="row" textAlign="center" mx="auto" maxWidth="6xl">
          <Heading as="span" fontFamily="body" fontWeight="300" mb="8px" textTransform="uppercase" fontSize={20} textAlign="center">
            Ingin Belajar React?
          </Heading>
          <Heading as="h1" fontFamily="body" fontWeight="600" fontSize={48} textAlign="center">
            Materi Pembelajaran
          </Heading>
          <Text as="h2" mt="20px" mb="16px" fontSize={16} textAlign="center">
            Beberapa konsep React memang terlihat janggal, tapi di luar itu React sangat mudah untuk dipelajari dan dipahami, baik mereka
            yang sudah mahir dalam JavaScript modern ataupun yang baru saja memulai. Cobalah memulai dari salah satu materi di bawah.
          </Text>
          <Grid templateColumns="repeat(auto-fit, minmax(calc(296px), 1fr))" gap="24px" mt="36px">
            {featuredMaterials.map(item => (
              <LearningCard heading={item.type} title={item.title} desc={item.description} href={item.url} key={item.title} />
            ))}
            {theRest.map(item => (
              <LearningCard heading={item.type} title={item.title} desc={item.description} href={item.url} key={item.title} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Content>
  </Page>
)

export default LearningPage
