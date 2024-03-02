import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Nav from "./_navbar/navbar";
import Content from "./pages/index";
import customTheme from "./theme";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Box minH="100vh" m={0} overflowX={"hidden"}>
      {/* <Grid minH="100vh" p={3}> */}
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <Nav />
        <Content />
      {/* </Grid> */}
    </Box>
    
  </ChakraProvider>
)
