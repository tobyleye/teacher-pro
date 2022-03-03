import { Box, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";
import TestInformationForm from "./TestInformationForm";
import TestEditor from "./TestEditor";
import { StateProvider } from "./StateProvider";

export default function TestCreator() {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep((step) => step + 1);
  };
  const prevStep = () => setStep((step) => step - 1);

  return (
    <Box>
      <Box
        as="header"
        sx={{
          borderBottom: "1px solid",
          borderBottomColor: "gray.200",
          pb: 1,
          mb: 8,
        }}
      >
        <Heading fontSize="30px" mb="2px">
          Test creator
        </Heading>
        <Text fontSize="md" color="gray.600">
          Enter a name for your new test.
        </Text>
      </Box>

      <StateProvider>
        {step === 0 && <TestInformationForm onEditQuestions={nextStep} />}
        {step === 1 && <TestEditor onGoBack={prevStep} />}
      </StateProvider>
    </Box>
  );
}
