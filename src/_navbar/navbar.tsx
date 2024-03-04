import { Avatar, Box, Button, Center, Divider, Flex, FormControl, FormLabel, HStack, Icon, IconButton, IconProps, Image, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, Switch, Text, createIcon, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Logo from "../_assets/icons/logo.svg";
import { CloseIcon} from "@chakra-ui/icons";


export const BarIcon = createIcon({
  displayName: 'BarIcon',
  viewBox: '0 0 32 25',
  path: (
    <>
      <line x1="1.5" y1="1.5" x2="29.637" y2="1.5" stroke="#3C3C3C" stroke-width="3" stroke-linecap="round"/>
      <line x1="1.5" y1="12.5" x2="29.64" y2="12.5" stroke="#3C3C3C" stroke-width="3" stroke-linecap="round"/>
      <line x1="1.5" y1="23.5" x2="29.637" y2="23.5" stroke="#3C3C3C" stroke-width="3" stroke-linecap="round"/>
    </>
  ),
});
export const DownIcon = createIcon({
  displayName: 'DownIcon',
  viewBox: '0 0 13 13',
  path: (
    <>
      <path d="M3.24981 3.90039L6.49981 7.15039L9.7498 3.90039L11.0498 4.55039L6.49981 9.10039L1.94981 4.55039L3.24981 3.90039Z" fill="#525252"/>
    </>
  ),
});

const Links = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Resources",
    path: "/",
  },
  {
    name: "Toolkit",
    path: "/",
  },
];
  
const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box>
    <Link 
    px={2}
    py={7}
    fontSize={"navlinksFS"}
    fontWeight={"navlinksFW"}
    fontFamily={"poppins"}
    color={"primaryColor"}
    rounded={"none"}
    _hover={{
      textDecoration: "",
      color: useColorModeValue("navActiveColor", "#fff"),
      borderBottom: "2px solid #314EF9",
      backgroundColor: "transparent",
      bg: useColorModeValue("transparent", "gray.700"),
    }} href={path}>
      {children}
    </Link>
  </Box>
);
  
export default function Navbar () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box px={4} width={"100%"} border={"1px solid #ECECEC"} boxShadow={"md"}>
      <Flex height={"76.59px"} alignItems={"center"} mx={{ base: "0px", lg: "50px"}} justifyContent={"space-between"}>   
        <HStack alignItems={"center"}>
          <Box display={"flex"} alignItems={"center"}>
          <img src={Logo} alt="..." />
          <Box color={"darkColor"} mx={2} fontSize={"logoFS"} fontWeight={"logoFW"}  lineHeight={"logoLH"}>LOGO</Box>
          </Box>
          <HStack
            as={"nav"}
            spacing={5}
            ms={3}
            display={{ base: "none", md: "flex" }}
          >
            {Links.map(({ name, path }) => (
              <NavLink key={path} path={path}>
                {name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <FormControl display='flex' alignItems='center'>
            <Switch id='employee' colorScheme="blue" />
            <FormLabel display={{ base: "none", md: "block" }} fontSize={"navlinksFS"} fontWeight={"navlinksFW"} fontFamily={"poppins"} color={"darkColor"} htmlFor='employee' ml={2} mb='0'>
              Switch to Employee
            </FormLabel>
          </FormControl>
          <Center height='25px'>
            <Divider borderWidth={"1.4px"} mx={4} borderColor={"#E4E4E4"} fontWeight={"bold"}  orientation='vertical' />
          </Center>
          <Menu>
            <Box
              display={"Flex"}
              alignItems={"center"}
              rounded={"full"}
              cursor={"pointer"}
              
            >
              <Avatar
                size={"sm"}
                fontWeight={"bold"}
                name="Jonathan Adeola"
                bg={"red"}
              />
              <Text ms={3} display={{ base: "none", md: "block" }} lineHeight={"profileLH"} fontFamily={"heading"} fontSize={"profileFS"} fontWeight={"navlinksFW"} color={"profileNameColor"}>Jonathan </Text>
              <DownIcon />
            </Box>
          </Menu>
          <IconButton
          size={"md"}
          bg={"none"}
          icon={isOpen ? <CloseIcon /> : <BarIcon boxSize={6} />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          ms={2 }
          onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map(({ name, path }) => (
              <NavLink key={path} path={path}>
                {name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
