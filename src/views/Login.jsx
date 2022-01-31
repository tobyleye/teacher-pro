import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  VStack,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/d");
  };

  return (
    <Box>
      <Heading mb={5} size="lg" textAlign="center">
        Welcome back
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={5}>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" />
          </FormControl>

          <Button type="submit" isFullWidth colorScheme="blue">
            Login
          </Button>
        </VStack>
        <Box mt={4}>
          <Text textAlign="center">
            Don't have an account? <Link to="/account/signup">Signup</Link>
          </Text>
        </Box>
      </form>
    </Box>
  );
}
