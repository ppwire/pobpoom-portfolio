import { Text, Stack } from '@chakra-ui/react'
function ArticleItem({ title, description, date, align }) {
   return (
      <Stack spacing={1} align={align}>
         <Text fontSize="1.25rem">
            {title}
         </Text>
         <Text opacity="0.8">
            {description}
         </Text>
         <Text color="primary" fontWeight="light">
            {date}
         </Text>
      </Stack>
   )
}

export default ArticleItem