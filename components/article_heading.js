import { Text } from '@chakra-ui/react'
function ArticleHeading({ children, color = "white" }) {
   return (
      <Text
         fontSize="1.5rem"
         borderBottom="1px"
         d="inline"
         borderColor="gray"
         fontWeight="bold"
         color={color}
      >
         {children}
      </Text>
   )
}

export default ArticleHeading