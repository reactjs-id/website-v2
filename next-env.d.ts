/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'next-mdx-remote/hydrate' {
  import React, { ReactNode } from 'react'

  interface ArgumentFirst {
    compiledSource: {
      compiledSource: string
      renderedOutput: string
      scope?: {}
    }
    renderedOutput: any
    scope?: any
  }

  interface ArgumentsSecond {
    components?: any
  }

  type IResult = React.ReactElement<HTMLDivElement>

  export default function hydrate({ compiledSource, renderedOutput, scope = {} }: ArgumentFirst, { components }: ArgumentsSecond): IResult
}

type ElementType =
  | 'a'
  | 'blockquote'
  | 'code'
  | 'delete'
  | 'em'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'hr'
  | 'img'
  | 'inlineCode'
  | 'li'
  | 'ol'
  | 'p'
  | 'pre'
  | 'strong'
  | 'sup'
  | 'table'
  | 'td'
  | 'thematicBreak'
  | 'tr'
  | 'ul'

declare type ComponentsType = {
  [key in ElementType]?: React.ComponentType
}
