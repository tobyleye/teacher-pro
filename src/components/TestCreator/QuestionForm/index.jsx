import {
  Box,
  Heading,
  Button,
  CloseButton,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { AddIcon } from "@chakra-ui/icons";
import Option from "./Option";

const QuestionForm = React.memo(
  ({ index: questionIndex, question, dispatch }) => {
    let toast = useToast();

    const updateQuestion = (changes) => {
      dispatch({
        type: "updateQuestion",
        payload: {
          qIndex: questionIndex,
          changes: changes,
        },
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

      updateQuestion({
        options: question.options.concat(""),
      });
    };

    const updateOption = (index, value) => {
      const copy = [...question.options];
      copy[index] = value;
      updateQuestion({ options: copy });
    }

    const deleteOption = (index) => {
      updateQuestion({
        options: question.options.filter((opt, optIndex) => index !== optIndex),
      });
    }

    const setAnswer = (optionIndex) => {
      updateQuestion({ answer: optionIndex });
    };

    const onDeleteQuestion = () => {
      dispatch({
        type: "deleteQuestion",
        payload: questionIndex,
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
              <Heading size="md">Question #{questionIndex + 1}</Heading>
              <CloseButton onClick={onDeleteQuestion} />
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
                    onDelete={deleteOption}
                    isAnswer={false}
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
);

export default QuestionForm;
