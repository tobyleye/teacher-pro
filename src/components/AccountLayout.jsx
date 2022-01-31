import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import QuoteSlideshow from "./QuotesSlideshow";

export default function AccountLayout() {
  return (
    <Box height="100vh" bg="yellow.800">
      <Box
        maxWidth={{ base: "100%", lg: "1280px" }}
        py="40px"
        px={6}
        mx="auto"
        height="100%"
        display="flex"
        justifyContent={{ base: "center", lg: "space-between" }}
      >
        <Box
          display={{ base: "none", lg: "flex" }}
          width="40%"
          color="white"
          alignItems="center"
        >
          <QuoteSlideshow />
        </Box>
        <Box
          display="flex"
          alignItems={{base: 'flex-start', lg: "center"}}
          width={{ base: "380px", lg: "45%" }}
        >
          <Box bg="white" borderRadius="md" width="100%" py={8} px={8}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
