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
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <Box>
        <Heading mb={4} size="lg" textAlign="center">Create new account</Heading>
      <form>
        <VStack spacing={5}>
          <FormControl isRequired>
            <FormLabel htmlFor="fullname">Fullname</FormLabel>
            <Input id="fullname" type="text" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" />
          </FormControl>

          <Button type="submit" isFullWidth colorScheme="blue">
            Register
          </Button>
        </VStack>
        <Box mt={4}>
          <Text textAlign="center">
            Already have an account? <Link to="/account/login">Login</Link>
          </Text>
        </Box>
      </form>
    </Box>
  );
}
