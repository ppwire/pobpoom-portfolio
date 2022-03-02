import { Text, Box, VStack, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
function About() {
   return (
      <VStack spacing={4}>
         <Text bg="secondary" p={3} borderRadius="8" textAlign="center" fontFamily="Open Sans">
            Hi! I'm Poom Muangthai. I'm currently working as a full stack freelance developer.
            Mostly thing that I work on is Node, Vue and React.
         </Text>
         <Button bg="primary" rightIcon={<ChevronRightIcon />} colorScheme="red">
            Resume
         </Button>
      </VStack>

   )
}
export default About