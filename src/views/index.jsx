import { Center, Box, Heading } from "@chakra-ui/react";

export default function Index() {
  return (
    <Center h="100vh">
      <Heading size="2xl">
        Welcome to Teacher <Box as="span" color="yellow.600">Pro</Box>
      </Heading>
    </Center>
  );
}
