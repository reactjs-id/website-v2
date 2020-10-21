import * as React from 'react'
import { NextPage } from 'next'

import { Box } from '@chakra-ui/core'
import { Content, Page } from '~/components/layouts'
import LearningSection from '../components/learning/LearningSection'

const LearningPage: NextPage = () => (
  <Page title="Learning">
    <Content>
      <Box backgroundColor="lightBlue" paddingX="8.5em" paddingY="6em">
        <LearningSection />
      </Box>
    </Content>
  </Page>
)
export default LearningPage
