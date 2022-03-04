import { Flex, Icon, Button, Link  } from '@chakra-ui/react'
import { SiGithub, SiGmail } from "react-icons/si";
function Contact() {
   return (
      <Flex justify="center" align={{ base: "start", md: "center" }} direction="column">
         <Button as={Link} href="https://github.com/ppwire" leftIcon={<Icon as={SiGithub} />} color='primary' variant='link'>
            @ppwire
         </Button >
         <Button leftIcon={<Icon as={SiGmail} />} color='primary' variant='link'>
            @poom.mth
         </Button >
      </Flex>
   )
}

export default Contact