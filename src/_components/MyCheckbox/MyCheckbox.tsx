import { Badge, Box, Card, Checkbox, CheckboxGroup, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { createIcon } from '@chakra-ui/icons';

type MyCheckboxType = {
  stylesProps?: Object;
};

export const FilterIcon = createIcon({
    displayName: 'FilterIcon',
    viewBox: '0 0 28 18',
    path: (
      <>
        <rect width="28" height="4" fill="black"/>
        <rect x="4" y="7" width="20" height="4" fill="black"/>
        <rect x="9" y="14" width="10" height="4" fill="black"/>
     </>
    ),
  });

const MyCheckbox = ({ onCheckboxChange }: { onCheckboxChange: (isChecked: boolean) => void }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onCheckboxChange(newValue);
  };
  
  return (
    <>
    
        <Box display={{ base: "none", md: "block" }} flexWrap='wrap' borderRadius={"10px"} gap='24px'>
            <Text
            color={"secondaryColor"}
            fontFamily={"body"}
            variant={"banner_text3"}
            pl={5}>
            Filters
            </Text> 
            <Box my={4} w={"80%"}>
                <Divider borderWidth={"1px"} borderColor={"#E0E0E0"} color={"red"} />
            </Box>
            <Text
            color={"secondaryColor"}
            fontFamily={"body"}
            variant={"banner_text3"}
            pl={5}>
            Key Foundational Principles
            </Text>
            <CheckboxGroup  colorScheme='gray' defaultValue={['secure', 'wellbeing']}>
                <Stack pl={5} mt={3} spacing={[1, 3]} direction={['column', 'column']}>
                    <Checkbox defaultChecked  isChecked={isChecked} onChange={handleCheckboxChange} iconColor='gray' value='secure base'>Secure Base</Checkbox>
                    <Checkbox iconColor='gray' isChecked={isChecked} onChange={handleCheckboxChange} value='appreciation'>Sense of Appreciation</Checkbox>
                    <Checkbox iconColor='gray' isChecked={isChecked} onChange={handleCheckboxChange} value='organisation'>Learning Organisation</Checkbox>
                    <Checkbox disabled defaultChecked isChecked={isChecked} iconColor='gray' value='mission'>Mission and Vision</Checkbox>
                    <Checkbox iconColor='gray' isChecked={isChecked} onChange={handleCheckboxChange} value='wellbeing'>Wellbeing</Checkbox>
                </Stack>
            </CheckboxGroup> 
            <Text
            color={"secondaryColor"}
            fontFamily={"body"}
            variant={"banner_text3"}
            pl={5}
            mt={8}>
            Document Type
            </Text>
            <CheckboxGroup  colorScheme='gray' defaultValue={['secure', 'wellbeing']}>
                <Stack pl={5} mt={3} spacing={[1, 3]} direction={['column', 'column']}>
                    <Checkbox iconColor='gray' iconSize='0rem' fontSize={"12px"} fontWeight={400} fontFamily={"body"} color={"#3F3F3F"} value='secure'>DOC</Checkbox>
                    <Checkbox iconColor='gray' fontSize={"12px"} fontWeight={400} fontFamily={"body"} color={"#3F3F3F"} value='appreciation'>Link</Checkbox>
                    <Checkbox iconColor='gray' fontSize={"12px"} fontWeight={400} fontFamily={"body"} color={"#3F3F3F"} value='organisation'>PDF</Checkbox>
                    <Checkbox iconColor='gray' fontSize={"12px"} fontWeight={400} fontFamily={"body"} color={"#3F3F3F"} value='mission'>Video</Checkbox>            </Stack>
            </CheckboxGroup> 
            <Text
            color={"secondaryColor"}
            fontFamily={"body"}
            variant={"banner_text3"}
            pl={5}
            mt={8}>
            Categories
            </Text>
            <CheckboxGroup  colorScheme='gray' defaultValue={['secure', 'wellbeing']}>
                <Stack pl={5} mt={3} spacing={[1, 3]} direction={['column', 'column']}>
                    <Checkbox iconColor='gray' iconSize='0rem' fontSize={"12px"} fontWeight={400} fontFamily={"body"} color={"#3F3F3F"} value='secure'>Sample</Checkbox>
                    <Checkbox iconColor='gray' fontSize={"12px"} fontWeight={400} fontFamily={"body"} color={"#3F3F3F"} value='appreciation'>Sample</Checkbox>
                    <Checkbox iconColor='gray' fontSize={"12px"} fontWeight={400} fontFamily={"body"} color={"#3F3F3F"} value='organisation'>Sample</Checkbox>
                    <Checkbox iconColor='gray' fontSize={"12px"} fontWeight={400} fontFamily={"body"} color={"#3F3F3F"} value='mission'>Sample</Checkbox>        
                </Stack>
            </CheckboxGroup> 
        </Box>
        <Box pos={"relative"} display={{base: "flex", md: "none"}} w={"100vw"} alignItems={"center"} py="3" bg={"#F2F2F2"} border={"1px solid #F1F1F1"} justifyContent={"center"}>
            <FilterIcon  onClick={() => setDropdown(true)} />
            <Text fontFamily={'body'} fontWeight={500} mx={1} fontSize={"16px"}>
            Show Filters
            </Text>
            {dropdown &&
            <Box pos={"absolute"} top={"100%"}>
                <Box bg={"red"}>
                    <Text>
                        filters
                    </Text>
                </Box>
            </Box>
            }
        </Box>
    </>
  );
};
export default MyCheckbox;