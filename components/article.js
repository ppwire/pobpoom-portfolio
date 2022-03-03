import { Stack } from '@chakra-ui/react'
import ArticleHeading from './article_heading'
function Article({ title, align, children }) {
   return (
      <article>
         <Stack direction="column" spacing={1} align={align} mb={2}>
            <ArticleHeading>{title}</ArticleHeading>
         </Stack>
         {children}
      </article>

   )
}
export default Article;