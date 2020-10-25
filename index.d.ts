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

declare module 'next-mdx-remote/render-to-string' {
  import { GrayMatterFile } from 'gray-metter'

  type ComponentsType = {
    [key in ComponentType]?: React.FC
  }

  type ComponentType =
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

  type ArgumentTwoType = {
    components: ComponentType
  }

  export default function renderToString(content: GrayMatterFile, ArgumentTwoType): any
}
