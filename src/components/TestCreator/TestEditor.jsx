import { Box, Heading, Button, Grid, Center } from "@chakra-ui/react";
import { AddIcon, ArrowBackIcon, CloseIcon, CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";
import QuestionForm from "./QuestionForm";

function AddQuestionForm({ onAddQuestion }) {
  return (
    <Box bg="gray.100" py={6} px={6} textAlign="center">
      <Box display="flex" alignItems="center" justifyContent="center" mb={8}>
        <Heading size="md" fontWeight={500} mr={2}>
          Add Question
        </Heading>
        <AddIcon />
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Button
          colorScheme="blue"
          variant="outline"
          size="lg"
          onClick={() => onAddQuestion("single-correct-answer")}
        >
          Single correct answer
        </Button>
        <Button
          colorScheme="blue"
          variant="outline"
          size="lg"
          onClick={() => onAddQuestion("multiple-correct-answer")}
        >
          Multiple correct answer
        </Button>
      </Grid>
    </Box>
  );
}

function TestEditor({ onGoBack }) {
  const [questions, setQuestions] = useState([]);

  const onAddQuestion = (questionType) => {
    let newQuestion = {
      type: questionType,
      text: "",
      options: Array(3).fill(""),
    };
    setQuestions((qs) => qs.concat(newQuestion));
  };

  return (
    <Box>
      <Box as="header" mb={4}>
        <Button variant="link" leftIcon={<ArrowBackIcon />} onClick={onGoBack}>
          Go back to test information
        </Button>
      </Box>

      {questions.map((q, index) => {
        return (
          <Box mb={4}>
            <QuestionForm key={index} question={q} />
          </Box>
        );
      })}

      <AddQuestionForm onAddQuestion={onAddQuestion} />

      <Box mb={4} />

      <Center>
        <Button colorScheme="blue" isFullWidth maxW={400}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignitems="center"
            w="full"
          >
            <Box>Create Test</Box>
            <AddIcon />
          </Box>
        </Button>
      </Center>
    </Box>
  );
}

export default TestEditor;
