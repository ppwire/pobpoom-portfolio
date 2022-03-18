import Profile from '../components/profile'
import Article from '../components/article'
import ArticleItem from '../components/article_item'
import ArticleItems from '../components/article_items'
import { Stack, Button, Flex } from '@chakra-ui/react'
import educationData from './api/education.json'
import experiencesData from './api/experiences.json'
import hobbiesData from './api/hobbies.json'
import skillsData from './api/skills.json'
import Contact from '../components/contact'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <Head>
        <title>Pobpoom | Main</title>
        <meta name="main" content="My information main page" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main >
        <Stack spacing={8}>
          <Profile></Profile>

          <Article title="Education" align={{ base: "start", md: "center" }}>
            <Stack >
              {
                educationData.map((el, key) => {
                  return <ArticleItem {...el} align={{ base: "start", md: "center" }} key={key}></ArticleItem>
                })
              }
            </Stack>
          </Article>

          <Article title="Experiences" align={{ base: "start", md: "center" }}>
            <Stack >
              {
                experiencesData.map((el, key) => {
                  return <ArticleItem {...el} align={{ base: "start", md: "center" }} key={key}></ArticleItem>
                })
              }
            </Stack>
          </Article>

          <Article title="Skills" align={{ base: "start", md: "center" }}>
            <Stack justify="space-between" direction={{ base: "column", md: "row" }} spacing={2}>
              {
                skillsData.map((el, key) => {
                  return <ArticleItems {...el} key={key} align={{ base: "start" }}></ArticleItems>
                })
              }
            </Stack>
          </Article>
          <Article title="Hobbies" align={{ base: "start", md: "center" }} >
            <Stack >
              {
                hobbiesData.map((el, key) => {
                  return <ArticleItem {...el} align={{ base: "start" }} key={key}></ArticleItem>
                })
              }
            </Stack>
          </Article>
          <Flex justify={{ base: "start", md: "center" }}>
            <Link href="/works" passHref>
              <Button variant='outline'>Wanna see my works ?</Button>
            </Link>
          </Flex>
          <Contact></Contact>
        </Stack>
      </main>
    </>
  )
}
