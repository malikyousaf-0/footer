import { Box } from "@chakra-ui/react";

import { Divider } from "@chakra-ui/react";
import NewLatter from "./NewLatter";

import Footermenu from "./Footermenu";
function Footer() {
  return (
    <Box
      bg="black"
      color="white"
      margin={4}
      borderRadius="3rem"
      padding={16}
      h="100vh"
    >
      {/* News later */}
      <NewLatter />
      {/* Divider */}
      <Divider margin={4} />
      {/* Footer menu */}
      <Footermenu Logo="IQTEST.ai" />
    </Box>
  );
}

export default Footer;
