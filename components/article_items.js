import { Text ,Stack} from '@chakra-ui/react'
function ArticleItems({ title, item, align }) {
   return (
      <Stack spacing={1} align={align}>
         <Text fontSize="1.25rem">
            {title}
         </Text>
         {
            item.map((el, key) => {
               return <Text opacity="0.8" key={key}>{el}</Text>
            })
         }
      </Stack>
   )
}

export default ArticleItems