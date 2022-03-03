import { Center, Image, Text, VStack } from '@chakra-ui/react'
import About from './about'
function Profile() {
   return <Center>
      <VStack spacing={4}>
         <Image src="/profile.png" borderRadius='full'
         ></Image>
         <VStack spacing={1}>
            <Text fontWeight="bold" fontSize="2rem" fontFamily="Open Sans">Poom Muangthai</Text>
            <Text fontSize="1.5rem" lineHeight="1">Full stack developer</Text>
         </VStack>
         <About></About>
      </VStack>
   </Center>
}
export default Profile