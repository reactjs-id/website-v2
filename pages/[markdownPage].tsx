import * as React from 'react'
import fs from 'fs'
import { GetStaticProps } from 'next'
import matter from 'gray-matter'
import path from 'path'
import { Text } from '@chakra-ui/core'
import remark from 'remark'
import remarkHTML from 'remark-html'
import htmr from 'htmr'

import { Content, Page, PageBody, PageHeader } from '~/components/layouts'
import { postFilePaths, POSTS_PATH } from '~/utils/mdxUtils'
import { Link as MarkdownLink, Heading as MarkdownHeading } from '~/components/layouts/markdown'

type PropsType = {
  source: string
  frontMatter: {
    title: string
  }
}

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const transform = {
  p: ({ children }) => <Text mb={6}>{children}</Text>,
  a: MarkdownLink,
  h2: MarkdownHeading
} as ComponentsType

export default function PostPage({ source, frontMatter }: PropsType) {
  const content = htmr(source, { transform })

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
