import {
  Heading,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TestList() {
  const tests = [
    {
      id: 1,
      name: "Computer Science",
      status: "published",
      createdAt: "03-10-2022",
    },
    { id: 2, name: "Maths", status: "draft", createdAt: "03-10-2022" },
    { id: 3, name: "English", status: "draft", createdAt: "03-10-2022" },
    { id: 4, name: "Physis", status: "published", createdAt: "03-10-2022" },
    { id: 5, name: "Economics", status: "draft", createdAt: "03-10-2022" },
  ];
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={8}
      >
        <Heading fontWeight="500">Tests</Heading>
        <Button as={Link} to="/d/tests/new">
          Create new
        </Button>
      </Box>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Status</Th>
            <Th>Creation Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tests.map((item) => {
            return (
              <Tr key={item.id}>
                <Td>{item.name}</Td>
                <Td>{item.status}</Td>
                <Td>{item.createdAt}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
