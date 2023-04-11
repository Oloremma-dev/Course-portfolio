import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box maxW='lg' borderRadius='lg' bg="white" overflow='hidden'>
      <VStack>
        <Image src={imageSrc} borderRadius='lg' w='100%' />
        <Box color='black' alignItems='start' p="3">
          <Heading as="h5" size='sm'>{title}</Heading>
          <Text pt="3" pb="3" color='gray' fontSize='sm'>{description}</Text>
          <HStack>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
