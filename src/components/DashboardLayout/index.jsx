import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Grid,
  Text,
  Button,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Link as StyledLink
} from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";
import {  FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom"

function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/account/login')
  }

  return (
    <Grid h="100vh" gridTemplateColumns="240px 1fr">
      {/* side menu */}
      <Box bg="gray.50" py={8} px={4}>
        <Box fontWeight="800" fontSize="2xl" mb={8}>
          Teacher{" "}
          <Box as="span" color="yellow.400">
            Pro
          </Box>
        </Box>
        <Button isFullWidth colorScheme="blue" as={Link} to="tests/new">
          Create Test
        </Button>

        <Box mt={12}>
          <StyledLink display="block" fontSize="lg" as={Link} width="100%" to="tests">Tests</StyledLink>
        </Box>
      </Box>

      {/* main content */}
      <Box
        p={6}
        display="grid"
        h="full"
        gridTemplateRows="auto 1fr"
        overflow="auto"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={8}
        >
          <Box>
            <InputGroup>
              <Input placeholder="search for tests" />
              <InputRightElement>
                <SearchIcon />
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<FaUser />}
                sx={{
                  outline: "none",
                  bg: "transparent",
                  fontSize: "md",
                }}
              >
                <Text>johndoe@gmail.com</Text>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>

        <Box overflow="auto" h="full">
          <Outlet />
        </Box>
      </Box>
    </Grid>
  );
}

export default DashboardLayout;
