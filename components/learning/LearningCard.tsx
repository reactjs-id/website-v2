import * as React from 'react'
import { Flex, Link, Heading, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'

import { LinkButton } from '~/components/ui'

interface LearningCardProps {
  title?: string
  heading?: string
  href?: string
  desc?: string
}

const LearningCard: React.FC<LearningCardProps> = ({ heading, title, href, desc }) => {
  return (
    <Flex
      flexDirection="column"
      role="group"
      backgroundColor="white"
      position="relative"
      border="none"
      boxShadow="rgba(0, 0, 0, 0.25) 0px 2px 4px"
      minHeight="320px"
      borderRadius="8px"
      p={4}
      textAlign="left"
      cursor="pointer"
      _hover={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 6px 8px' }}
    >
      <Heading color="astronautBlue" as="h4" mb="4px" size="sm" fontWeight={300} textTransform="uppercase">
        {heading}
      </Heading>
      <Heading textAlign="left" color="gray08" as="h5" size="md" fontWeight={600}>
        <Link
          href={href}
          isExternal
          _focus={{ boxShadow: 'rgba(26, 255, 214, 0.6) 0px 0px 0px 3px' }}
          css={css`
            &::after {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              content: '';
            }
          `}
        >
          {title}
        </Link>
      </Heading>
      <Text textAlign="left" as="p" mt="0.5em" mb="1.3em">
        {desc}
      </Text>
      <LinkButton
        _hover={undefined}
        _groupHover={{ backgroundColor: 'reactBlue.900' }}
        as="span"
        mt="auto"
        backgroundColor="reactBlue.800"
        color="white"
      >
        Kunjungi Situs
      </LinkButton>
    </Flex>
  )
}

export default LearningCard
