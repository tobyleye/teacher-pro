import { Box, FormLabel, Button, Input } from "@chakra-ui/react";

function TestInformation({ onEditQuestions }) {
  return (
    <Box bg="gray.50" py={12}>
      <Box maxWidth={600} mx="auto">
        <Box mb={4}>
          <FormLabel fontSize="sm">Test name</FormLabel>
          <Input bg="white"/>
        </Box>
        <Box mb={4}>
          <FormLabel fontSize="sm">
            Number of points for no anser
            <Box>(values from -99 to 0)</Box>
          </FormLabel>
          <Input bg="white"/>
        </Box>
        <Box mb={4}>
          <FormLabel fontSize="sm">
            Number of points for wrong anser
            <Box>(values from -99 to 0</Box>
          </FormLabel>
          <Input bg="white" />
        </Box>
        <Button colorScheme="blue" isFullWidth onClick={onEditQuestions}>
          Edit questions
        </Button>
      </Box>
    </Box>
  );
}

export default TestInformation;
