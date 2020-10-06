import * as React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

import { Page, PageHeader, PageBody } from '~/components/Layout'
import Content from '~/components/Content'
import relativeTime from '~/utils/relativeTime'

const lastUpdated = '2015-01-25T07:25:15+07:00'

const IndexPage: NextPage = () => (
  <Page>
    <Content>
      <PageHeader
        desc="ReactJS ID adalah komunitas para developer React dan React Native. Kami mengadakan ajang meetup setiap bulannya, dimana para developer React bertukar informasi mengenai React dan ekosistemnya."
        isHomePage
        welcomeMessage="selamat datang"
        title="Komunitas Developer ReactJS Indonesia"
      />
      <PageBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Certe non potest. Negabat igitur ullam esse artem, quae ipsa a se
          proficisceretur; Duo Reges: constructio interrete. Quid turpius quam sapientis vitam ex insipientium sermone pendere? Non igitur
          bene. Vide, quaeso, rectumne sit.
        </p>
        <p>
          Last updated: <time dateTime={lastUpdated}>{relativeTime(new Date(lastUpdated))}</time> |{' '}
          <Link href="/about" passHref>
            <a>About</a>
          </Link>
        </p>
      </PageBody>
    </Content>
  </Page>
)
export default IndexPage
