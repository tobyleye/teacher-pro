import { Box, FormLabel, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function TestInformation({ onEditQuestions }) {
  const [state, setState] = useState({
    name: "",
    pointsForNoAnswer: 0,
    pointsForWrongAnswer: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditQuestions();
  };

  return (
    <Box bg="gray.50" py={12}>
      <Box maxWidth={600} mx="auto">
        <form onSubmit={handleSubmit}>
          <Box mb={6}>
            <FormLabel fontSize="md">Test name</FormLabel>
            <Input bg="white" placeholder="Enter a test name" required />
          </Box>
          <Box mb={6}>
            <FormLabel fontSize="md">
              <Box>Number of points for no answer</Box>
              <Box>(values from -99 to 0)</Box>
            </FormLabel>
            <Input bg="white" defaultValue="0" />
          </Box>
          <Box mb={6}>
            <FormLabel fontSize="md">
              <Box>Number of points for wrong anser</Box>
              <Box>(values from -99 to 0</Box>
            </FormLabel>
            <Input bg="white" defaultValue="0" />
          </Box>
          <Button
            type="submit"
            colorScheme="blue"
            isFullWidth
            rightIcon={<FaArrowRight />}
          >
            Edit questions
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default TestInformation;
