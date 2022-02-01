import { Center, Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Center flexDir="column" h="100vh">
      <Heading size="2xl" mb={4}>
        Welcome to Teacher{" "}
        <Box as="span" color="yellow.600">
          Pro
        </Box>
      </Heading>
      <Button as={Link} to="/account/signup">
        Get Started
      </Button>
    </Center>
  );
}
