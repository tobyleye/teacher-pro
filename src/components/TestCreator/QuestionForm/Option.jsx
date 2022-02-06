import { Box, Input, IconButton, CloseButton } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

function Option({ value, index, onChange, isAnswer, onSelectAnswer }) {
  return (
    <Box>
      <Box
        bg="white"
        border="1px solid"
        display="grid"
        gridTemplateColumns="1fr auto auto"
        alignItems="center"
        borderColor="gray.300"
        gridColumnGap="5px"
      >
        <Box>
          <Input
            value={value}
            border="none"
            _focus={{
              border: "none",
            }}
            placeholder={`Option ` + (index + 1)}
            onChange={(e) => onChange(index, e.target.value)}
          />
        </Box>
        <IconButton
          my={1}
          icon={<CheckIcon />}
          onClick={() => onSelectAnswer(isAnswer ? null : value)}
          colorScheme={isAnswer?'green': 'gray'}
        />
        <CloseButton
          flexShrink="0"
          bg="white"
          h="full"
          borderRadius="none"
          borderLeft="1px solid"
          borderLeftColor="gray.300"
          paddingLeft={5}
          paddingRight={5}
        />
      </Box>
    </Box>
  );
}

export default Option;
