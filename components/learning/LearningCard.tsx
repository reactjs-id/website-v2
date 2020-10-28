import * as React from 'react'
import { PseudoBox, Flex, Link, Heading, Text } from '@chakra-ui/core'

import { LinkButton } from '~/components/ui'

interface LearningCardProps {
  title?: string
  heading?: string
  href?: string
  desc?: string
}

const LearningCard: React.FC<LearningCardProps> = ({ heading, title, href, desc }) => {
  return (
    <PseudoBox
      role="group"
      backgroundColor="white"
      border="none"
      boxShadow="rgba(0, 0, 0, 0.25) 0px 2px 4px"
      minHeight="320px"
      borderRadius="8px"
      py="1em"
      px="1.5em"
      cursor="pointer"
      _hover={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 6px 8px' }}
    >
      <Link h="100%" href={href} isExternal _hover={{ outline: 'none' }}>
        <Flex flexDirection="column" alignItems="flex-start" h="inherit">
          <Heading color="astronautBlue" as="h4" mb="4px" fontSize="md" fontWeight={300} textTransform="uppercase">
            {heading}
          </Heading>
          <Heading textAlign="left" color="gray08" as="h5" fontSize="2xl" fontWeight={600}>
            {title}
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
      </Link>
    </PseudoBox>
  )
}

export default LearningCard
