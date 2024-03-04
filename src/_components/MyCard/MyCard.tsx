import { Badge, Box, Card, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { createIcon } from '@chakra-ui/icons';
import backgroundimage from '../../_assets/images/bgImg2.png';
import backgroundimage2 from '../../_assets/images/bgImg1.png';
import backgroundimage3 from '../../_assets/images/bgImg3.png';
import backgroundimage4 from '../../_assets/images/bgImg4.png';
import backgroundimage5 from '../../_assets/images/bgImg5.png';
type MyCardType = {
  stylesProps?: Object;
  
};

// I could not use this icon because it was not showing properly
export const ChainIcon = createIcon({
  displayName: 'ChainIcon',
  viewBox: '0 0 25 25',
  path: (
    <>
      <path d="M12.5 19.3748L10.4375 21.4373C9.52574 22.3488 8.28927 22.8609 7.00001 22.8609C5.71075 22.8609 4.47427 22.3488 3.56251 21.4373C2.65098 20.5255 2.13892 19.289 2.13892 17.9998C2.13892 16.7105 2.65098 15.474 3.56251 14.5623L7.68751 10.4373C8.59927 9.52574 9.83575 9.01367 11.125 9.01367C12.4143 9.01367 13.6507 9.52574 14.5625 10.4373" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <path d="M12.5 5.62477L14.5625 3.56227C15.4743 2.65074 16.7107 2.13867 18 2.13867C19.2893 2.13867 20.5257 2.65074 21.4375 3.56227C22.349 4.47403 22.8611 5.7105 22.8611 6.99977C22.8611 8.28903 22.349 9.5255 21.4375 10.4373L17.3125 14.5623C16.4007 15.4738 15.1643 15.9859 13.875 15.9859C12.5857 15.9859 11.3493 15.4738 10.4375 14.5623" stroke="black" stroke-width="3" stroke-linecap="round"/>
    </>
  ),
});

export const VideoIcon = createIcon({
  displayName: 'VideoIcon',
  viewBox: '0 0 27 23',
  path: (
    <>
      <path d="M18.1973 8.57898L12.0098 4.45398C11.8545 4.35034 11.6739 4.29082 11.4874 4.28179C11.3009 4.27275 11.1154 4.31453 10.9508 4.40267C10.7861 4.49081 10.6485 4.622 10.5526 4.78224C10.4567 4.94248 10.4061 5.12576 10.4062 5.3125V13.5625C10.4061 13.7492 10.4567 13.9325 10.5526 14.0928C10.6485 14.253 10.7861 14.3842 10.9508 14.4723C11.1154 14.5605 11.3009 14.6022 11.4874 14.5932C11.6739 14.5842 11.8545 14.5247 12.0098 14.421L18.1973 10.296C18.3388 10.2019 18.4548 10.0742 18.535 9.92447C18.6153 9.7747 18.6573 9.60741 18.6573 9.4375C18.6573 9.26759 18.6153 9.1003 18.535 8.95053C18.4548 8.80075 18.3388 8.67312 18.1973 8.57898ZM12.4688 11.6354V7.24609L15.7662 9.4375L12.4688 11.6354ZM24.8438 0.15625H2.15625C1.60924 0.15625 1.08464 0.373548 0.697842 0.760342C0.311048 1.14714 0.09375 1.67174 0.09375 2.21875V16.6562C0.09375 17.2033 0.311048 17.7279 0.697842 18.1147C1.08464 18.5015 1.60924 18.7188 2.15625 18.7188H24.8438C25.3908 18.7188 25.9154 18.5015 26.3022 18.1147C26.689 17.7279 26.9062 17.2033 26.9062 16.6562V2.21875C26.9062 1.67174 26.689 1.14714 26.3022 0.760342C25.9154 0.373548 25.3908 0.15625 24.8438 0.15625ZM24.8438 16.6562H2.15625V2.21875H24.8438V16.6562ZM26.9062 21.8125C26.9062 22.086 26.7976 22.3483 26.6042 22.5417C26.4108 22.7351 26.1485 22.8438 25.875 22.8438H1.125C0.851496 22.8438 0.589193 22.7351 0.395796 22.5417C0.202399 22.3483 0.09375 22.086 0.09375 21.8125C0.09375 21.539 0.202399 21.2767 0.395796 21.0833C0.589193 20.8899 0.851496 20.7812 1.125 20.7812H25.875C26.1485 20.7812 26.4108 20.8899 26.6042 21.0833C26.7976 21.2767 26.9062 21.539 26.9062 21.8125Z" fill="black"/>
    </>
  ),
});
export const PdfIcon = createIcon({
  displayName: 'PdfIcon',
  viewBox: '0 0 33 33',
  path: (
    <>
      <path opacity="0.2" d="M26.8125 11.3438H19.5938V4.125L26.8125 11.3438Z" fill="black"/>
      <path d="M28.875 19.5938C28.875 19.8673 28.7664 20.1296 28.573 20.323C28.3796 20.5164 28.1173 20.625 27.8438 20.625H24.75V22.6875H26.8125C27.086 22.6875 27.3483 22.7961 27.5417 22.9895C27.7351 23.1829 27.8438 23.4452 27.8438 23.7188C27.8438 23.9923 27.7351 24.2546 27.5417 24.448C27.3483 24.6414 27.086 24.75 26.8125 24.75H24.75V26.8125C24.75 27.086 24.6414 27.3483 24.448 27.5417C24.2546 27.7351 23.9923 27.8438 23.7188 27.8438C23.4452 27.8438 23.1829 27.7351 22.9895 27.5417C22.7961 27.3483 22.6875 27.086 22.6875 26.8125V19.5938C22.6875 19.3202 22.7961 19.0579 22.9895 18.8645C23.1829 18.6711 23.4452 18.5625 23.7188 18.5625H27.8438C28.1173 18.5625 28.3796 18.6711 28.573 18.8645C28.7664 19.0579 28.875 19.3202 28.875 19.5938ZM11.8594 22.1719C11.8594 23.1291 11.4791 24.0472 10.8022 24.7241C10.1253 25.401 9.20727 25.7812 8.25 25.7812H7.21875V26.8125C7.21875 27.086 7.1101 27.3483 6.9167 27.5417C6.72331 27.7351 6.461 27.8438 6.1875 27.8438C5.914 27.8438 5.65169 27.7351 5.4583 27.5417C5.2649 27.3483 5.15625 27.086 5.15625 26.8125V19.5938C5.15625 19.3202 5.2649 19.0579 5.4583 18.8645C5.65169 18.6711 5.914 18.5625 6.1875 18.5625H8.25C9.20727 18.5625 10.1253 18.9428 10.8022 19.6197C11.4791 20.2965 11.8594 21.2146 11.8594 22.1719ZM9.79688 22.1719C9.79688 21.7616 9.6339 21.3682 9.34381 21.0781C9.05371 20.788 8.66026 20.625 8.25 20.625H7.21875V23.7188H8.25C8.66026 23.7188 9.05371 23.5558 9.34381 23.2657C9.6339 22.9756 9.79688 22.5821 9.79688 22.1719ZM21.1406 23.2031C21.1406 24.4339 20.6517 25.6143 19.7814 26.4845C18.9111 27.3548 17.7308 27.8438 16.5 27.8438H14.4375C14.164 27.8438 13.9017 27.7351 13.7083 27.5417C13.5149 27.3483 13.4062 27.086 13.4062 26.8125V19.5938C13.4062 19.3202 13.5149 19.0579 13.7083 18.8645C13.9017 18.6711 14.164 18.5625 14.4375 18.5625H16.5C17.7308 18.5625 18.9111 19.0514 19.7814 19.9217C20.6517 20.792 21.1406 21.9724 21.1406 23.2031ZM19.0781 23.2031C19.0781 22.5194 18.8065 21.8636 18.323 21.3801C17.8395 20.8966 17.1838 20.625 16.5 20.625H15.4688V25.7812H16.5C17.1838 25.7812 17.8395 25.5096 18.323 25.0261C18.8065 24.5426 19.0781 23.8869 19.0781 23.2031ZM5.15625 14.4375V5.15625C5.15625 4.60924 5.37355 4.08464 5.76034 3.69784C6.14714 3.31105 6.67174 3.09375 7.21875 3.09375H19.5938C19.7292 3.09364 19.8634 3.12023 19.9886 3.17198C20.1138 3.22374 20.2275 3.29966 20.3234 3.39539L27.5421 10.6141C27.6378 10.71 27.7138 10.8237 27.7655 10.9489C27.8173 11.0741 27.8439 11.2083 27.8438 11.3438V14.4375C27.8438 14.711 27.7351 14.9733 27.5417 15.1667C27.3483 15.3601 27.086 15.4688 26.8125 15.4688C26.539 15.4688 26.2767 15.3601 26.0833 15.1667C25.8899 14.9733 25.7812 14.711 25.7812 14.4375V12.375H19.5938C19.3202 12.375 19.0579 12.2664 18.8645 12.073C18.6711 11.8796 18.5625 11.6173 18.5625 11.3438V5.15625H7.21875V14.4375C7.21875 14.711 7.1101 14.9733 6.9167 15.1667C6.72331 15.3601 6.461 15.4688 6.1875 15.4688C5.914 15.4688 5.65169 15.3601 5.4583 15.1667C5.2649 14.9733 5.15625 14.711 5.15625 14.4375ZM20.625 10.3125H24.3233L20.625 6.61418V10.3125Z" fill="black"/>
    </>
  ),
});

  const MyCard = ({ isChecked }: { isChecked: boolean }) => {
    return (
      <Flex flexWrap='wrap' borderRadius={"10px"} gap='24px' justifyContent={{base:'center', md:'between'}} mb={5}>
        <Box mx={{base:0, md:0}} zIndex={100} w={{base:"250px" , lg:"250px"}} height="280px" boxShadow={"md"} border={"1px solid #F2F2F2"} borderRadius={"10px"} mt={9} mb={{sm:-9,lg:9}} pos={"relative"}>
          <Box top={"-63px"} borderRadius={"10px"} left={"34px"} width={"100%"} height={"200px"} pos={"absolute"} bgImage={backgroundimage} bgPosition="center" bgRepeat="no-repeat">
          </Box>
          <Box>
              <Flex  flexDirection={"column"} justifyContent={"center"} alignItems={"start"} mx={"30px"} my={"70px"}>    
                <VideoIcon zIndex={1}  boxSize={6} />
                <Heading mt={"35px"} fontFamily={"body"} variant={"sub_title"} color={"primaryColor"}>
                  The ultimate guide to Workplace Chat
                </Heading>
                <Text 
                  fontFamily={"body"} 
                  variant={"banner_text2"} 
                  color={"sampleColor"} 
                  mt={3}
                  textAlign={"center"}>
                  Sample Topic
                  </Text>
                  <Badge color={"#222222"} fontFamily={"body"} mt={4} fontSize={"11px"} fontWeight={"500"} textTransform={"capitalize"} px={2} py={1} rounded={"full"}>{isChecked ? "Wellbeing" : "Secure Base"}</Badge> 
              </Flex>
          </Box>
        </Box>
        <Box mx={{base:0, md:0}} w={{base:"250px" , lg:"250px"}} boxShadow={"md"} height="280px" border={"1px solid #F2F2F2"} borderRadius={"10px"}  mt={{sm:9}} pos={"relative"}>
          <Box top={"-44px"} borderRadius={"10px"} left={"0px"} width={"100%"} height={"200px"} pos={"absolute"} bgImage={backgroundimage3} bgPosition="center" bgRepeat="no-repeat">
          </Box>
          <Box>
              <Flex  flexDirection={"column"} justifyContent={"center"} alignItems={"start"} mx={"30px"} my={"70px"}>    
                <PdfIcon zIndex={1} boxSize={7} />
                <Heading mt={"35px"} fontFamily={"body"} variant={"sub_title"} color={"primaryColor"}>
                  The ultimate guide to Workplace Chat
                </Heading>
                <Text 
                  fontFamily={"body"} 
                  variant={"banner_text2"} 
                  color={"sampleColor"} 
                  mt={3}
                  textAlign={"center"}>
                  Sample Topic
                  </Text>
                  <Badge color={"#222222"} fontFamily={"body"} mt={4} fontSize={"11px"} fontWeight={"500"} textTransform={"capitalize"} px={2} py={1} rounded={"full"}>{isChecked ? "Sense of Appreciation" : "Secure Base"}</Badge> 
              </Flex>
          </Box>
        </Box>
        <Box mx={{base:0, md:0}} w={{base:"250px" , lg:"250px"}} boxShadow={"md"} height="280px" border={"1px solid #F2F2F2"} borderRadius={"10px"} mt={{lg:9,}} pos={"relative"}>
          <Box top={"-63px"} borderRadius={"10px"} left={"34px"} width={"100%"} height={"200px"} pos={"absolute"} bgImage={backgroundimage} bgPosition="center" bgRepeat="no-repeat">
          </Box>
          <Box>
              <Flex  flexDirection={"column"} justifyContent={"center"} alignItems={"start"} mx={"30px"} my={"70px"}>    
                <VideoIcon zIndex={1} boxSize={6} />
                <Heading mt={"35px"} fontFamily={"body"} variant={"sub_title"} color={"primaryColor"}>
                  The ultimate guide to Workplace Chat
                </Heading>
                <Text 
                  fontFamily={"body"} 
                  variant={"banner_text2"} 
                  color={"sampleColor"} 
                  mt={3}
                  textAlign={"center"}>
                  Sample Topic
                  </Text>
                  <Badge color={"#222222"} fontFamily={"body"} mt={4} fontSize={"11px"} fontWeight={"500"} textTransform={"capitalize"} px={2} py={1} rounded={"full"}>{isChecked ? "Sense of Appreciation" : "Wellbeing"}</Badge> 
              </Flex>
          </Box>
        </Box>
        <Box mx={{base:0, md:0}} w={{base:"250px" , lg:"250px"}} boxShadow={"md"} height="280px" border={"1px solid #F2F2F2"} borderRadius={"10px"} mt={{lg:9, xl:0}} pos={"relative"}>
          <Box top={"-44px"} borderRadius={"10px"} left={"0px"} width={"100%"} height={"200px"} pos={"absolute"} bgImage={backgroundimage2} bgPosition="center" bgRepeat="no-repeat">
          </Box>
          <Box>
              <Flex  flexDirection={"column"} justifyContent={"center"} alignItems={"start"} mx={"30px"} my={"70px"}>    
              <PdfIcon zIndex={1} boxSize={7} />
                <Heading mt={"35px"} fontFamily={"body"} variant={"sub_title"} color={"primaryColor"}>
                  The ultimate guide to Workplace Chat
                </Heading>
                <Text 
                  fontFamily={"body"} 
                  variant={"banner_text2"} 
                  color={"sampleColor"} 
                  mt={3}
                  textAlign={"center"}>
                  Sample Topic
                  </Text>
                  <Badge color={"#222222"} fontFamily={"body"} mt={4} fontSize={"11px"} fontWeight={"500"} textTransform={"capitalize"} px={2} py={1} rounded={"full"}>{isChecked ? "Mission and Vision" : "Secure Base"}</Badge> 
              </Flex>
          </Box>
        </Box>
        <Box mx={{base:0, md:0}} w={{base:"250px" , lg:"250px"}} boxShadow={"md"} height="280px" border={"1px solid #F2F2F2"} borderRadius={"10px"} pos={"relative"}>
          <Box top={"-53px"} borderRadius={"10px"} left={"0px"} width={"100%"} height={"200px"} pos={"absolute"} bgImage={backgroundimage4} bgPosition="center" bgRepeat="no-repeat">
          </Box>
          <Box>
              <Flex  flexDirection={"column"} justifyContent={"center"} alignItems={"start"} mx={"30px"} my={"70px"}>    
                <VideoIcon zIndex={1} boxSize={6} />
                <Heading mt={"35px"} fontFamily={"body"} variant={"sub_title"} color={"primaryColor"}>
                  The ultimate guide to Workplace Chat
                </Heading>
                <Text 
                  fontFamily={"body"} 
                  variant={"banner_text2"} 
                  color={"sampleColor"} 
                  mt={3}
                  textAlign={"center"}>
                  Sample Topic
                  </Text>
                  <Badge color={"#222222"} fontFamily={"body"} mt={4} fontSize={"11px"} fontWeight={"500"} textTransform={"capitalize"} px={2} py={1} rounded={"full"}>{isChecked ? "Wellbeing" : "Learning Organisation"}</Badge> 
              </Flex>
          </Box>
        </Box>
        <Box mx={{base:0, md:0}} w={{base:"250px" , lg:"250px"}} boxShadow={"md"} height="280px" border={"1px solid #F2F2F2"} borderRadius={"10px"} pos={"relative"}>
          <Box top={"-42px"} borderRadius={"10px"} left={"29px"} width={"100%"} height={"200px"} pos={"absolute"} bgImage={backgroundimage5} bgPosition="center" bgRepeat="no-repeat">
          </Box>
          <Box>
              <Flex  flexDirection={"column"} justifyContent={"center"} alignItems={"start"} mx={"30px"} my={"70px"}>    
              <PdfIcon zIndex={1} boxSize={7} />
                <Heading mt={"35px"} fontFamily={"body"} variant={"sub_title"} color={"primaryColor"}>
                  The ultimate guide to Workplace Chat
                </Heading>
                <Text 
                  fontFamily={"body"} 
                  variant={"banner_text2"} 
                  color={"sampleColor"} 
                  mt={3}
                  textAlign={"center"}>
                  Sample Topic
                  </Text>
                  <Badge color={"#222222"} fontFamily={"body"} mt={4} fontSize={"11px"} fontWeight={"500"} textTransform={"capitalize"} px={2} py={1} rounded={"full"}>Secure Base</Badge> 
              </Flex>
          </Box>
        </Box>
      </Flex>
    );
};

export default MyCard;