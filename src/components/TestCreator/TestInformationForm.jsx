import { Box, FormLabel, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useStateProvider } from "./StateProvider";

function TestInformation({ onEditQuestions }) {
  const { state, dispatch } = useStateProvider();

  const [testInfo, setTestInfo] = useState(state.testInfo)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "updateTestInfo",
      payload: testInfo,
    }); 
    onEditQuestions();
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setTestInfo({
      ...testInfo,
      [name]: value 
    })
  };


  return (
    <Box bg="gray.50" py={12}>
      <Box maxWidth={600} mx="auto">
        <form onSubmit={handleSubmit}>
          <Box mb={6}>
            <FormLabel fontSize="md">Test name</FormLabel>
            <Input
              bg="white"
              placeholder="Enter a test name"
              name="name"
              value={testInfo.name}
              required
              onChange={handleInfoChange}
            />
          </Box>
          <Box mb={6}>
            <FormLabel fontSize="md">
              <Box>Number of points for no answer</Box>
              <Box>(values from -99 to 0)</Box>
            </FormLabel>
            <Input
              bg="white"
              defaultValue="0"
              name="pointsForNoAnswer"
              value={testInfo.pointsForNoAnswer}
              onChange={handleInfoChange}
            />
          </Box>
          <Box mb={6}>
            <FormLabel fontSize="md">
              <Box>Number of points for wrong anser</Box>
              <Box>(values from -99 to 0</Box>
            </FormLabel>
            <Input
              bg="white"
              defaultValue="0"
              name="pointsForWrongAnswer"
              value={testInfo.pointsForWrongAnswer}
              onChange={handleInfoChange}
            />
          </Box>
          <Box mb={6}>
            <FormLabel fontSize="md">
              <Box>Duration</Box>
            </FormLabel>
            <Input
              bg="white"
              defaultValue="5:00"
              name="duration"
              value={testInfo.duration}
              onChange={handleInfoChange}
            />
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
