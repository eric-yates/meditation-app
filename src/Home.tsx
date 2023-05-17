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
  { name: "Ethan", image: "Ethan.png"},
  { name: "Ava" , image: "Ava.png"},
  { name: "Aarav" , image: "Aarav.png"},
  { name: "Nari" , image: "Nari.png"},
  { name: "Jamal", image: "Jamal.png" },
  { name: "Zara" , image: "Zara.png"},
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
        <Flex align="center" justify="center" mt={4} mb={6}>
        <Text fontSize="2xl" mr={2}>
          🌱
        </Text>
        <Heading as="h1" size="lg">
          claritea
        </Heading>
      </Flex>
      <Heading as="h3" size="sm" textAlign="center" mb={6}>
        Choose your guru
      </Heading>
      <Stack>
        {gurus.map((guru, index) => (
          <Flex align={"center"} justify={"center"}>
            <Avatar name={guru.name} src={guru.image} mr={4} />
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
              variant={selectedLength === length.value ? "solid" : "outline"}
              colorScheme={
                selectedLength === length.value ? 'blackAlpha' : undefined
            }
              size="lg"
              borderRadius="md"
              _hover={{
                cursor: 'pointer',
              }}
              width={"100px"}
              onClick={() => handleLengthChange(length.value)}
            >
            <Flex align="center" justify="space-between">
                <Text flex={4} ml={4} mr={2} width="10rem">
                {length.label}
                </Text>
            </Flex>
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
