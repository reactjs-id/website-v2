import * as React from 'react'
import { NextPage } from 'next'

import { Content, Page, PageBody } from '~/components/layouts'
import LearningSection from '../components/learning/LearningSection'

const LearningPage: NextPage = () => (
  <Page title="Learning">
    <Content>
      <PageBody bgColor="lightBlue">
        <LearningSection />
      </PageBody>
    </Content>
  </Page>
)
export default LearningPage
