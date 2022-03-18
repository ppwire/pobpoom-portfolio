import { extendTheme } from '@chakra-ui/react'
import "@fontsource/outfit"
import "@fontsource/open-sans"

const theme = extendTheme({
   fonts: {
      body: 'Outfit, Open Sans, sans-serif'
   },
   colors: {
      primary: "#C84B31",
      secondary: "#2D4263",
      gray: "#52627B",
      background: "#191919",
      Vue: "#3eaf7c",
      Express: "#454545",
      React: "#61DAFB",
      NestJS: "#EA2845",
      NextJS: "#0070f3"
   },
   styles: {
      global: {
         body: {
            bg: "#191919",
            color: "white"
         }
      }
   }
})

export default theme