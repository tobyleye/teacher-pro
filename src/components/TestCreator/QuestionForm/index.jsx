import {
  Box,
  Heading,
  Button,
  CloseButton,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Option from "./Option";

function QuestionEditor({ index }) {
  const [question, setQuestion] = useState({
    type: null,
    text: "",
    options: Array(3).fill(""),
    answer: null,
  });
  let toast = useToast();

  const updateOption = (index, newValue) => {
    setQuestion({
      ...question,
      options: question.options.map((opt, idx) =>
        index === idx ? newValue : opt
      ),
    });
  };
  const addOption = () => {
    if (question.options.length === 4) {
      toast({
        status: "error",
        title: "Oops!",
        description: "sorry you cant add more than 4 options",
      });
      return;
    }

    setQuestion({
      ...question,
      options: question.options.concat(""),
    });
  };

  const updateQuestion = (changes) => {
    setQuestion({
      ...question,
      ...changes,
    });
  };

  const setAnswer = (answer) => {
    setQuestion({
      ...question,
      answer: answer,
    });
  };

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
            <Heading size="md">Question #{index + 1}</Heading>
            <CloseButton />
          </Box>
          <Textarea
            bg="white"
            value={question.text}
            onChange={(e) => updateQuestion({ text: e.target.value })}
            placeholder="Enter question here..."
          />

          <Box mt={3}>
            <VStack alignItems="stretch" spacing={2}>
              {question.options.map((opt, index) => (
                <Option
                  index={index}
                  value={opt}
                  onChange={updateOption}
                  isAnswer={opt === question.answer}
                  onSelectAnswer={setAnswer}
                />
              ))}
            </VStack>
            <Box mt={2} textAlign="right">
              <Button
                variant="link"
                rightIcon={<AddIcon ml={1} h={3} />}
                onClick={addOption}
              >
                Add option
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default QuestionEditor;
