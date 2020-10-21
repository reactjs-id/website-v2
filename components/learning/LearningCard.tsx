import * as React from 'react'
import { Box, Text, PseudoBox } from '@chakra-ui/core'

import { ArrowRightIcon } from '../ui'

interface LearningCardProps {
  title?: string
  heading?: string
  href?: string
  desc?: string
}

const LearningCard: React.FC<LearningCardProps> = ({ heading, title, href, desc }) => {
  return (
    <PseudoBox
      as="a"
      href={href}
      minH="320px"
      display="flex"
      flexDir="column"
      height="100%"
      backgroundColor="white"
      color="gray08"
      borderRadius="8px"
      shadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
      transition="box-shadow 0.3s ease"
      _hover={{ color: 'gray', textDecoration: 'none', shadow: '0px 6px 8px rgba(0, 0, 0, 0.25)' }}
      _focus={{ color: 'gray', textDecoration: 'none', shadow: '0px 6px 8px rgba(0, 0, 0, 0.25)' }}
      _active={{ color: 'gray', textDecoration: 'none' }}
      _visited={{ color: 'gray', textDecoration: 'none' }}
    >
      <Box as="header" margin={0} padding="16px 24px 0">
        {heading && (
          <Text as="h4" mb="4px" fontSize="16px" lineHeight="24px" fontWeight="300" color="blue" textTransform="uppercase">
            {heading}
          </Text>
        )}
        <Text as="h5" m={0} fontSize="20px" lineHeight="28px" fontWeight="600">
          {title}
        </Text>
      </Box>
      <Box as="section" margin={0} padding="16px 24px 0" flex="1 1 auto">
        <Text as="p" mt="20px" fontSize="16px" lineHeight="24px">
          {desc}
        </Text>
      </Box>
      <Box as="footer" margin={0} padding="16px 24px">
        <PseudoBox
          as="button"
          href={href}
          backgroundColor="darkBlue"
          color="white"
          p="0 16px"
          height="40px"
          borderRadius="4px"
          display="flex"
          flexDir="row"
          alignItems="center"
        >
          <span>Kunjungi Situs</span>
          <PseudoBox as="span" display="block" width="16px" height="16px" ml="8px">
            <ArrowRightIcon />
          </PseudoBox>
        </PseudoBox>
      </Box>
    </PseudoBox>
  )
}

export default LearningCard
