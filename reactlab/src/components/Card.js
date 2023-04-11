import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" borderRadius="lg" >
      <Image src = {imageSrc} alt={title} borderRadius="lg"></Image>
  <Heading textColor="black" size = "md" px ="3" py="4" alignSelf="self-start">{title}</Heading>
  <Text color="gray" px="3" size="lg">{description}</Text>
  <HStack alignSelf="self-start" px="3" py="4">
   <Text color="black" size ="sm">See More</Text> 
<FontAwesomeIcon icon ={faArrowRight} size ="1px" color="black"></FontAwesomeIcon>
  </HStack>
</VStack>
  );
};

export default Card;
