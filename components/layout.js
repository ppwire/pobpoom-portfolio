import { Container } from '@chakra-ui/react'
import Nav from './nav'
function Layout({ children }) {
   return (
      <>
         <Container maxW='container.md' pt={6} >
         <Nav></Nav>
         </Container>
         
         <Container mt={8}>
            <main>
               {children}
            </main>
         </Container>
      </>
   )
}

export default Layout