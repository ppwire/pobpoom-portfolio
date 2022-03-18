import { Text, Link, VStack, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
function About() {
   return (
      <VStack spacing={4}>
         <Text bg="secondary" p={3} borderRadius="8" textAlign="center" fontFamily="Open Sans">
            Hi! I am Poom Muangthai. I am currently looking for work.
            Mostly thing that I work on is Node and Vue.
         </Text>
         <Button as={Link} href="https://bit.ly/3MYyM9D" bg="primary" rightIcon={<ChevronRightIcon />} colorScheme="red">
            Resume
         </Button>
      </VStack>

   )
}
export default About