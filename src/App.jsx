import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views";
import DashboardLayout from "./components/DashboardLayout";
import CreateTest from "./views/CreateTest";
import TestList from "./views/TestList";

const theme = extendTheme({
  fonts: {
    heading: "Jost, sans-serif",
    body: "Jost, sans-serif",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/d" element={<DashboardLayout />}>
            <Route index path="tests" element={<TestList />} />
            <Route path="tests/new" element={<CreateTest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
