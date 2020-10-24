import * as React from 'react'
import fs from 'fs'
import { GetStaticProps } from 'next'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString, { ComponentsType } from 'next-mdx-remote/render-to-string'
import path from 'path'
import dynamic from 'next/dynamic'
import { Text } from '@chakra-ui/core'

import { Content, Page, PageBody, PageHeader } from '~/components/layouts'
import { postFilePaths, POSTS_PATH } from '~/utils/mdxUtils'

type PropsType = {
  source: any // because its compiled resource
  frontMatter: {
    title: string
  }
}

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  p: ({ children }) => <Text mb={6}>{children}</Text>,
  a: dynamic(() => import('~/components/layouts/markdown/Link')),
  h2: dynamic(() => import('~/components/layouts/markdown/Heading'))
} as ComponentsType

export default function PostPage({ source, frontMatter }: PropsType) {
  const content = hydrate(source, { components })

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

  const mdxSource = await renderToString(content, { components, scope: data })

  return {
    props: {
      source: mdxSource,
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
