import { Text, Box, Stack, Button, Link, HStack } from '@chakra-ui/react'
import { SiGithub } from "react-icons/si";
function WorkCard({ imgUrl, siteUrl, repoUrl, title, description, techniques }) {
   return (
      <Stack spacing={3}>
         <Box
            backgroundImage={`url('${imgUrl}')`}
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            w='100%'
            h="20rem"
            borderRadius={4}
            as={Link}
            href={siteUrl}
         >
         </Box>
         <Text as={Link} href={siteUrl} fontSize="1.5rem" >{title}</Text>
         <HStack>
            {
               techniques && techniques.map((el, index) => {
                  return <Box bg={el} p={2} borderRadius="8" fontSize="0.75rem" fontWeight="bold" key={index + el}>{el}</Box>
               })
            }
         </HStack>
         <Text opacity="0.6" fontWeight={200}>{description}</Text>
         <Box>
            {
               repoUrl && <Button leftIcon={<SiGithub />} as={Link} href={repoUrl} colorScheme='white' variant='outline'>Github</Button>
            }
         </Box>

      </Stack>
   )
}

export default WorkCard