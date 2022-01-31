import { Box, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";
import TestInformation from "./TestInformationForm";
import TestEditor from "./TestEditor";

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
        <Heading fontSize="22px" mb="2px">
          Test creator
        </Heading>
        <Text fontSize="sm" color="gray.600">
          Enter a name for your new test.
        </Text>
      </Box>

      {step === 0 && <TestInformation onEditQuestions={nextStep} />}

      {step === 1 && <TestEditor onGoBack={prevStep} />}
    </Box>
  );
}
