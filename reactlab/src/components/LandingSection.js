import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";


const greeting = "Hello, I am Olorunjuwonlo";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing='50px'>
    <VStack>
        <Avatar size='2xl' name='Olorunjuwonlo' src={require("../images/avatar.jpg")} />
      <Heading as='h5' size='sm'>{greeting}</Heading>
    </VStack>
    <VStack>
      <Heading fontSize='50px' size='lg'>{bio1}</Heading>
      <Heading fontSize='50px' size='lg'>{bio2}</Heading>
    </VStack>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
