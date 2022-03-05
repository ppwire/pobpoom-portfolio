import { Text, VStack, Button } from '@chakra-ui/react'
import Link from 'next/link'
function Custom404() {
   return (
      <VStack>
         <Text >404 Page not found :(</Text>
         <Link href="/">
            <Button>Go Back</Button>
         </Link>
      </VStack>

   )
}

export default Custom404;