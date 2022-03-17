import Head from 'next/head'
import ArticleHeading from '../components/article_heading'
import WorkCard from '../components/work_card'
import { Box, Stack, Flex, Button } from '@chakra-ui/react'
import workData from './api/works.json'
import Link from 'next/link'

function Work() {
   return (
      <>
         <Head>
            <title>Pobpoom | Work</title>
            <meta name="description" content="My works" />
            <link rel="icon" href="/favicon.svg" />
         </Head>
         <Box mb={12}>
            <ArticleHeading >Works</ArticleHeading>
         </Box>
         <Stack spacing={12} mb={12}>
            {
               workData && workData.map((el, key) => {
                  return <WorkCard {...el} key={key}></WorkCard>
               })
            }
         </Stack>
         <Flex justify={{ base: "start", md: "center" }}>
            <Link href="/">
               <Button variant='outline'>Back to my bio</Button>
            </Link>
         </Flex>
      </>
   )
}

export default Work