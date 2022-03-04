import { Text, Link, VStack, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
function About() {
   return (
      <VStack spacing={4}>
         <Text bg="secondary" p={3} borderRadius="8" textAlign="center" fontFamily="Open Sans">
            Hi! I'm Poom Muangthai. I'm currently working as a full stack freelance developer.
            Mostly thing that I work on is Node, Vue and React.
         </Text>
         <Button as={Link} href="https://docs.google.com/document/d/1rqtkpJWKlk8ksRUuLhszJFgZd441fWpu/edit?usp=sharing&ouid=114866621988823577924&rtpof=true&sd=true" bg="primary" rightIcon={<ChevronRightIcon />} colorScheme="red">
            Resume
         </Button>
      </VStack>

   )
}
export default About