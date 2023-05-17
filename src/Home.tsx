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
  Divider
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
  const [selectedGuru, setSelectedGuru] = useState("Ethan");
  const [selectedLength, setSelectedLength] = useState("5");

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
        <Flex align="center" justify="center" mt={4} mb={12}>
        <Text fontSize="2xl" mr={2}>
          🌱
        </Text>
        <Heading as="h2" size="lg" color='#6DB714'>
          claritea
        </Heading>
      </Flex>
      <Heading as="h3" size="sm" textAlign="center" mt={6} mb={6}>
        Choose your guru
      </Heading>
      <Stack align={"center"}>
        {gurus.map((guru, index) => (
          <Flex align={"center"} justify={"center"}>
            <Avatar name={guru.name} src={guru.image} mr={4} />
            <Button
              key={index}
              variant={selectedGuru === guru.name ? "solid" : "outline"}
              colorScheme={
                selectedGuru === guru.name ? "blackAlpha" : undefined
              }
              size="md"
              borderRadius="md"
              my={1}
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
      <br></br>
      <br></br>
      <Divider mt={6} mb={6} width={"400px"} /> {/* Add Divider component */}
      <br></br>
      <Stack align={"center"}>
        <Heading as="h3" size="sm" textAlign="center" mt={6} mb={2}>
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
              size="md"
              borderRadius="md"
              my={1}
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
        </Stack>
        <Stack align={"center"}>
      <Flex width={"25rem"} mt={12} mb={12}>
      <Button
          position="fixed"
          bottom={4}
          left={0}
          right={0}
          mx="auto"
          width="fit-content"
          colorScheme="teal"
          size="lg"
          borderRadius="lg"
          px={6}
          py={3}
          onClick={handleStartSession}
        >
          <FaPlay style={{ marginRight: '0.5rem' }} />
          Start Session
        </Button>
      </Flex>
      </Stack>
    </Stack>
  );
};

export default Page;
