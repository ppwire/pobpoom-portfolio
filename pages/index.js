import Profile from '../components/profile'
import Article from '../components/article'
import ArticleItem from '../components/article_item'
import ArticleItems from '../components/article_items'
import { Stack } from '@chakra-ui/react'
import educationData from './api/education.json'
import experiencesData from './api/experiences.json'
import hobbiesData from './api/hobbies.json'
import skillsData from './api/skills.json'
import Contact from '../components/contact'

export default function Home() {

  return (
    <main >
      <Stack spacing={8}>
        <Profile></Profile>

        <Article title="Education" align={{ base: "start", md: "center" }}>
          <Stack >
            {
              educationData.map((el, key) => {
                return <ArticleItem title={el.title} description={el.description} date={el.date} align={{ base: "start", md: "center" }} key={key}></ArticleItem>
              })
            }
          </Stack>
        </Article>

        <Article title="Experiences" align={{ base: "start", md: "center" }}>
          <Stack >
            {
              experiencesData.map((el, key) => {
                return <ArticleItem title={el.title} description={el.description} date={el.date} align={{ base: "start", md: "center" }} key={key}></ArticleItem>
              })
            }
          </Stack>
        </Article>

        <Article title="Skills" align={{ base: "start", md: "center" }}>
          <Stack justify="space-between" direction={{ base: "column", md: "row" }} spacing={2}>
            {
              skillsData.map((el, key) => {
                return <ArticleItems title={el.title} item={el.item} key={key} align={{ base: "start" }}></ArticleItems>
              })
            }
          </Stack>
        </Article>
        <Article title="Hobbies" align={{ base: "start", md: "center" }} >
          <Stack >
            {
              hobbiesData.map((el, key) => {
                return <ArticleItem title={el.title} description={el.description} date={el.date} align={{ base: "start" }} key={key}></ArticleItem>
              })
            }
          </Stack>
        </Article>
            <Contact></Contact>
      </Stack>
    </main>
  )
}
