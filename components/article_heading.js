import { Text } from '@chakra-ui/react'
function ArticleHeading({ children }) {
   return (
      <Text
         fontSize="1.5rem"
         borderBottom="1px"
         d="inline"
         borderColor="gray"
         fontWeight="bold"
      >
         {children}
      </Text>
   )
}

export default ArticleHeading