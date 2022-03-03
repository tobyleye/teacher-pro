import { Box, Heading, Button, Grid, Center, useToast } from "@chakra-ui/react";
import { AddIcon, ArrowBackIcon } from "@chakra-ui/icons";
import QuestionForm from "./QuestionForm";
import { useStateProvider } from "./StateProvider";

function TestEditor({ onGoBack }) {
  const { state, dispatch } = useStateProvider();

  const { questions } = state;
  const toast = useToast();

  const onAddQuestion = (questionType) => {
    if (questions.length >= 10) {
      toast({
        description:
          "Sorry you can only add up to 10 questions, to add more kindly consider becoming a premium member",
        status: "error",
      });
      return;
    }

    let question = {
      type: questionType,
      text: "",
      options: Array(3).fill(""),
      answer: null,
    };

    dispatch({
      type: "addNewQuestion",
      payload: question,
    });
  };

  return (
    <Box>
      <Box as="header" mb={4}>
        <Button variant="link" leftIcon={<ArrowBackIcon />} onClick={onGoBack}>
          Go back to test information
        </Button>
      </Box>

      {questions.map((question, index) => {
        return (
          <Box mb={4} key={index}>
            <QuestionForm
              index={index}
              question={question}
              dispatch={dispatch}
            />
          </Box>
        );
      })}

      <AddQuestionForm onAddQuestion={onAddQuestion} />

      <Box mb={10} />

      <Center>
        <Button
          colorScheme="blue"
          isFullWidth
          maxW={400}
          rightIcon={<AddIcon />}
        >
          Create Test
        </Button>
      </Center>
    </Box>
  );
}

function AddQuestionForm({ onAddQuestion }) {
  return (
    <Box bg="gray.100" py={8} px={6} rounded="md" textAlign="center">
      <Box display="flex" alignItems="center" justifyContent="center" mb={8}>
        <Heading size="md" fontWeight={600} mr={2}>
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

export default TestEditor;
