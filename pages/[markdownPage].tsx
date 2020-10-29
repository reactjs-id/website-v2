import * as React from 'react'
import fs from 'fs'
import { GetStaticProps } from 'next'
import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'
import remarkHTML from 'remark-html'
import htmr from 'htmr'

import { Content, Page, PageBody, PageHeader } from '~/components/layouts'
import { postFilePaths, POSTS_PATH } from '~/utils/mdxUtils'
import htmrTransform from '~/utils/htmrTransform'

type PropsType = {
  source: string
  frontMatter: {
    title: string
  }
}

export default function PostPage({ source, frontMatter }: PropsType) {
  const content = htmr(source, { transform: htmrTransform })

  return (
    <Page title={frontMatter.title}>
      <Content>
        <PageHeader title={frontMatter.title} />
        <PageBody>{content}</PageBody>
      </Content>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.markdownPage}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const { content, data } = matter(source)

  const remarkedMarkdown = await remark().use(remarkHTML).process(content)
  const stringRemarkedMarkdown = remarkedMarkdown.toString()

  return {
    props: {
      source: stringRemarkedMarkdown,
      frontMatter: data
    }
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(pathFile => pathFile.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(markdownPage => ({ params: { markdownPage } }))

  return {
    paths,
    fallback: false
  }
}
