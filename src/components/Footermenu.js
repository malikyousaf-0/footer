import React from "react";
import { Flex, VStack, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";

import { AiFillThunderbolt } from "react-icons/ai";

export default function Footermenu(props) {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on medium screens and above
        align="center" // Align items at the center
        justify="space-between" // Space out items evenly
        padding={4} // Add padding
        // Background color
        color="white" // Text color
      >
        <Flex align="center">
          <Box>
            <HStack>
              <AiFillThunderbolt color="purple" size={22} />
              <Text fontWeight="bold" fontSize="xl" mr={4}>
             {props.Logo}
              </Text>
            </HStack>

            <Text color="grey">
              Test Your IQ in simple and <br /> easy step not complex
            </Text>
          </Box>
          {/* <Image src="/path/to/image.png" alt="Footer Image" boxSize="40px" /> */}
        </Flex>

        {/* Right section with three menus */}
        <VStack spacing={2} align="flex-start">
          <Text fontWeight="bold">IQTEST</Text>
          <Text color="grey">Quiz</Text>
          <Text color="grey">Result</Text>
          <Text color="grey">Prizing</Text>
        </VStack>

        <VStack spacing={2} align="flex-start">
          <Text fontWeight="bold">Support</Text>
          <Text color="grey">Hell</Text>
          <Text color="grey">FAQ</Text>
          <Text color="grey">Support</Text>
        </VStack>

        <VStack spacing={2} align="flex-start">
          <Text fontWeight="bold">Legal</Text>
          <Text color="grey">Privacy Policy</Text>
          <Text color="grey">Term of Services</Text>
          <Text color="grey">Cookies Policy</Text>
        </VStack>
      </Flex>
    </>
  );
}
