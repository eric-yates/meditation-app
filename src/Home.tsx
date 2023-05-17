import React, { useState } from "react";
import {
  Box,
  Heading,
  Avatar,
  Text,
  Flex,
  Select,
  Button,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const gurus = [
  { name: "Ethan" },
  { name: "Ava" },
  { name: "Aarva" },
  { name: "Nari" },
  { name: "Jamal" },
  { name: "Zara" },
];

const lengths = [
  { value: "3", label: "3" },
  { value: "5", label: "5" },
  { value: "10", label: "10" },
];

const Page = () => {
  const [selectedGuru, setSelectedGuru] = useState("");
  const [selectedLength, setSelectedLength] = useState("");

  const handleGuruChange = (value: string) => {
    setSelectedGuru(value);
  };

  const handleLengthChange = (value: string) => {
    setSelectedLength(value);
  };

  const handleStartSession = () => {
    // Perform start session logic
    console.log("Starting session...");
  };

  return (
    <Stack align={"center"}>
     <Heading as="h1" size="lg" textAlign="center" mt={4} mb={6}>
        claritea
      </Heading>
      <Heading as="h3" size="sm" textAlign="center" mb={6}>
        Choose your guru
      </Heading>
      <Stack>
        {gurus.map((guru, index) => (
          <Flex align={"center"} justify={"center"}>
            <Avatar name={guru.name} src="#" mr={4} />
            <Button
              key={index}
              variant={selectedGuru === guru.name ? "solid" : "outline"}
              colorScheme={
                selectedGuru === guru.name ? "blackAlpha" : undefined
              }
              size="lg"
              borderRadius="md"
              my={2}
              _hover={{
                cursor: "pointer",
              }}
              width={"300px"}
              onClick={() => handleGuruChange(guru.name)}
            >
              <Flex align="center" justify="space-between">
                <Text flex={4} ml={4} mr={2} width="10rem">
                  {guru.name}
                </Text>
              </Flex>
            </Button>
          </Flex>
        ))}
      </Stack>
        <Heading as="h3" size="sm" textAlign="center" mb={6}>
            Choose your length in minutes
        </Heading>
        <ButtonGroup ml={4}>
          {lengths.map((length) => (
            <Button
              key={length.value}
              colorScheme={selectedLength === length.value ? 'primaryButton' : 'white'}
              size="lg"
              borderRadius="md"
              px={4}
              py={2}
              _hover={{
                cursor: 'pointer',
              }}
              onClick={() => handleLengthChange(length.value)}
            >
              {length.label}
            </Button>
          ))}
        </ButtonGroup>
      <Flex width={"30rem"}>
        <Button
          colorScheme="teal"
          leftIcon={<FaPlay />}
          onClick={handleStartSession}
          size="lg"
          w="100%"
        >
          Start Session
        </Button>
      </Flex>
    </Stack>
  );
};

export default Page;
