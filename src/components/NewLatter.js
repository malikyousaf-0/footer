import React from "react";
import { VStack, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { FaEnvelopeOpen } from "react-icons/fa";

import { FormControl, Input, Button } from "@chakra-ui/react";

export default function NewLatter() {
  return (
    <>
      <Box
        bg="blue.500" // Sets the background color to blue
        borderRadius="50%" // Sets the border radius to 50% to make it circular
        w="70px" // Sets the width
        h="70px" // Sets the height
        display="flex" // Makes the container a flex container
        justifyContent="center" // Centers the content horizontally
        alignItems="center"
        marginLeft="1.4rem"
      >
        <FaEnvelopeOpen size={22} />
      </Box>
      <HStack padding={4} direction={{ base: "column", md: "row" }}>
        <VStack align="flex-start">
          <Text
            fontWeight="light"
            fontSize={{ base: "2rem", md: "3rem" }}
            mr={4}
          >
            Keep with the latest
          </Text>
          <Text fontWeight="light" fontSize={{ base: "lg", md: "xl" }} mr={4}>
            Join our news latter to uptodata on feature and release
          </Text>
        </VStack>
        <VStack w="60%">
          <Text fontWeight="bold" marginBottom="rem" fontSize="xl">
            Stay Upto Date
          </Text>
          <HStack>
            <FormControl>
              {/* <FormLabel>Email address</FormLabel> */}
              <Input
                type="email"
                w={{ base: "100%", md: "30rem" }}
                placeholder="Enter Your Email"
                padding={7}
                borderRadius="2rem"
              />
              <Button
                colorScheme="teal"
                size="lg"
                padding={7}
                borderRadius="2rem"
                marginLeft="1rem"
              >
                Subscribe
              </Button>
            </FormControl>
          </HStack>
        </VStack>
      </HStack>
    </>
  );
}
