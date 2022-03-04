import { Text } from '@chakra-ui/react'
import {
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   IconButton,
   Flex,
   Spacer,
   Image,
   Box,
   Button
} from '@chakra-ui/react'

import styled from '@emotion/styled'

import { ChevronDownIcon } from '@chakra-ui/icons'
import Link from 'next/link'

function Nav() {

   const Logo = styled.div`
      display:flex;
      cursor: pointer;
   `

   return (
      <nav>
         <Flex align="center">
            <Link href="/">
               <Logo>
                  <Image src="/logo.svg" mr={2}></Image>
                  <Text fontSize="1rem" color="white" fontWeight="700">Pobpoom</Text>
               </Logo>
            </Link>
            <Spacer />

            <Box display={{ base: "none", md: "inline-block" }}>
               <Link href="/work">
                  <Button colorScheme='white' variant='link'>
                     Work
                  </Button>
               </Link>

            </Box>

            <Box display={{ base: 'inline-block', md: "none" }} color="secondary">
               <Menu >
                  <MenuButton
                     as={IconButton}
                     icon={<ChevronDownIcon />}
                     size="sm"
                     color="white"
                     variant='outline'
                  />
                  <MenuList>
                     <Link href="/work">
                        <MenuItem >
                           Work
                        </MenuItem>
                     </Link>
                  </MenuList>
               </Menu>
            </Box>
         </Flex>
      </nav>
   )
}

export default Nav