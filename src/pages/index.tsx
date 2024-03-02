import { Box, Center, CheckboxIcon, Flex, Grid, GridItem, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { SearchIcon} from '@chakra-ui/icons';
import { createIcon } from '@chakra-ui/icons';
import MyCard from "../_components/MyCard/MyCard";
import MyCheckbox from "../_components/MyCheckbox/MyCheckbox";


export const UpDownIcon = createIcon({
  displayName: 'UpDownIcon',
  viewBox: '0 0 26 27',
  path: (
    <path fill-rule="evenodd" clip-rule="evenodd" 
    d="M11.375 2.6665C9.90667 2.66663 8.45963 3.0179 7.15464 3.69101C5.84965 4.36411 4.72455 5.33954 3.8732 6.5359C3.02186 7.73227 2.46896 9.11488 2.26063 10.5684C2.0523 12.0219 2.19459 13.5041 2.67562 14.8915C3.15665 16.2788 3.96248 17.531 5.02587 18.5435C6.08926 19.5561 7.37938 20.2997 8.78859 20.7122C10.1978 21.1248 11.6852 21.1944 13.1268 20.9152C14.5684 20.6359 15.9223 20.016 17.0755 19.1072L21.0319 23.0635C21.2362 23.2608 21.5098 23.37 21.7939 23.3676C22.0779 23.3651 22.3496 23.2512 22.5505 23.0503C22.7514 22.8494 22.8653 22.5777 22.8678 22.2937C22.8702 22.0096 22.761 21.736 22.5637 21.5317L18.6074 17.5753C19.6777 16.2175 20.3441 14.5858 20.5304 12.8669C20.7167 11.148 20.4152 9.41136 19.6606 7.85577C18.906 6.30018 17.7287 4.98847 16.2634 4.07075C14.7981 3.15304 13.104 2.66639 11.375 2.6665ZM4.33336 11.8748C4.33336 10.0073 5.07525 8.2162 6.39582 6.89563C7.71639 5.57506 9.50746 4.83317 11.375 4.83317C13.2426 4.83317 15.0337 5.57506 16.3542 6.89563C17.6748 8.2162 18.4167 10.0073 18.4167 11.8748C18.4167 13.7424 17.6748 15.5335 16.3542 16.854C15.0337 18.1746 13.2426 18.9165 11.375 18.9165C9.50746 18.9165 7.71639 18.1746 6.39582 16.854C5.07525 15.5335 4.33336 13.7424 4.33336 11.8748Z" fill="#4F4F4F"/>
  ),
})

export default function Page () {
const [isChecked, setIsChecked] = useState<boolean>(false);
const handleCheckboxChange = (newValue: boolean) => {
setIsChecked(newValue);
};
   return (
    <Box>
        <Flex flexDirection={"column"} bg={"backgroundColor1"} height={"380px"} width={"100%"} alignItems={"center"} justifyContent={"center"}>
            <Heading fontFamily={"body"} as='h1' variant={{base: "banner_head_sm", lg: "banner_head_lg"}} color={"primaryColor"}>
                Resources
            </Heading>
            <Text 
            fontFamily={"body"} 
            variant={"banner_text"} 
            color={"primaryColor"} 
            px={2}
            w={{sm:"80%" , lg:"45%"}} 
            mt={3}
            textAlign={"center"}>
            Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue
            </Text>
            <InputGroup mt={5} py={3} w={{sm:"90%", md:"60%"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.3em'
                pt={"40px"}
                pl={"30px"}
                alignItems={"center"}
                >
                <UpDownIcon boxSize={6} />
                </InputLeftElement>
                <Input pl={"60px"} py={"25px"} fontSize={"15px"}  placeholder='Search by title or keyword' _placeholder={{color: 'placeholderColor', }} focusBorderColor='#314EF9' border={{md:"1.4px solid #A1A1A1"}} bg={"#fff"} color="placeholderColor" borderRadius={"10px"} />
                
            </InputGroup>
        </Flex>
        <Grid
            minH='200px'
            px={{md:"4rem"}}
            py={{md:"3rem"}}
            border={"1px solid #F2F2F2"}
            templateColumns={{sm:'repeat(7, 1/2fr)',md:'repeat(7, 1fr)'}}
            
        >
            <GridItem colSpan={{md:2}}>
                <MyCheckbox  onCheckboxChange={handleCheckboxChange} />
            </GridItem>
            <GridItem colSpan={{sm:6, md:5}}>
                <MyCard isChecked={isChecked} />
            </GridItem>
        </Grid>
    </Box>
    );
};