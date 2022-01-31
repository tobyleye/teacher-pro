import {
  Box,
  Heading,
  Button,
  CloseButton,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Option from "./Option";

function QuestionEditor({}) {
  const [question, setQuestion] = useState({
    type: null,
    text: "",
    options: ["option1", "option2", "option3"],
  });

  return (
    <Box>
      <Box bg="gray.100" py={8}>
        <Box width="70%" mx="auto">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Heading size="md">Question #1</Heading>
            <CloseButton />
          </Box>
          <Textarea
            bg="white"
            value={question.text}
            placeholder="Enter question here..."
          />

          <Box mt={3}>
            <VStack alignItems="stretch" spacing={2}>
              {question.options.map((opt, index) => (
                <Option index={index} option={opt} />
              ))}
            </VStack>
            <Box mt={2} textAlign="right">
              <Button variant="link">
                <Box color="blue" display="flex" alignItems="center">
                  Add option <AddIcon ml={1} h={3} />
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default QuestionEditor;
