import * as React from 'react'
import { Box, Link, Text, Heading, Icon, Image } from '@chakra-ui/core'

interface PageHeaderProps {
  title: string
  isHomePage?: boolean
  welcomeMessage?: string
  desc?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, desc, welcomeMessage, isHomePage = false }) => {
  if (isHomePage) {
    return (
      <Box backgroundColor="gray08" as="header" px={['1em', null, null, '3em']} py={['3.1em', null, null, '6.1em']}>
        <Box maxWidth={['100%', null, null, '50%']}>
          <Heading fontFamily="body" fontWeight="100" mb="8px" as="h2" textTransform="uppercase" color="lightBlue" fontSize={20}>
            {welcomeMessage}
          </Heading>
          <Heading as="h3" fontFamily="body" fontWeight="500" color="white" fontSize={48}>
            {title}
          </Heading>
          <Text as="p" my="20px" color="white" fontFamily="body">
            {desc}
          </Text>
          <Link
            href="https://www.meetup.com/reactindonesia/"
            isExternal
            display="grid"
            color="white"
            ml="-16px"
            padding="0 16px"
            height="40px"
            _hover={{ bg: 'lightGray' }}
            gridAutoFlow="column"
            gridAutoColumns="max-content"
            justifyContent="center"
            alignItems="center"
            width="max-content"
            borderRadius="4px"
          >
            <Text>Bergabung</Text>
            <Icon name="arrow-forward" size="21px" ml="8px" />
          </Link>
        </Box>
      </Box>
    )
  }

  return (
    <Box position="relative" backgroundColor="gray08" as="header" pt={[100, null, null, null]} pb={[0, null, null, 3]}>
      <Image position="absolute" top="0" left="0" width="100%" height="100%" objectFit="cover" src="/topography-img.png" />
      <Box padding={['24px', null, null, 0]} position="relative" zIndex={2} mx="auto" maxWidth="3xl">
        <Heading as="h1" size="2xl" color="white">
          {title}
        </Heading>
      </Box>
    </Box>
  )
}

export default PageHeader
