import Head from 'next/head'
import ArticleHeading from '../components/article_heading'
import WorkCard from '../components/work_card'
import { Box, Stack } from '@chakra-ui/react'
import workData from './api/works.json'

function Work() {
   return (
      <>
         <Head>
            <title>Pobpoom | Work</title>
            <meta name="description" content="My works" />
            <link rel="icon" href="/favicon.svg" />
         </Head>
         <Box mb={8}>
            <ArticleHeading >Works</ArticleHeading>
         </Box>
         <Stack spacing={8}>
            {
               workData && workData.map((el, key) => {
                  return <WorkCard {...el} key={key}></WorkCard>
               })
            }
         </Stack>

      </>
   )
}

export default Work