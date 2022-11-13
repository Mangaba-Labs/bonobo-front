import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { Button } from "../../..";
import Share from "../../../../assets/images/share.svg";

export function HelpOrder() {
  function onClickSend() {}

  return (
    <Box height="100%" width="100%">
      <Text fontSize="3rem" fontWeight="bold" mb="2rem">
        Help
      </Text>
      <Text fontSize="1.1rem" fontWeight="bold">
        Email your issue to the seller
      </Text>
      <Box
        bg="darkCard"
        my="1.7rem"
        px="2rem"
        py="1rem"
        borderRadius="0.4rem"
        display="flex"
        flexDir="column"
        width="67rem"
      >
        <Box alignItems="center" display="flex" justifyContent="space-between">
          <Box display="flex" flexDir="row">
            <Image
              alt="Product Image"
              borderRadius=".4rem"
              height="5rem"
              width="5rem"
              fit="cover"
              mr="1rem"
              src="https://i.pinimg.com/236x/dd/b3/b5/ddb3b52fd9e39af5af2a628900c8f89f--funny-monkey-pictures-random-pictures.jpg"
            />
            <Box>
              <Box alignItems="center" display="flex" flexDirection="row">
                <Text fontWeight="bold">Seller Name:</Text>
                <Text fontWeight="400" ml="0.5rem">
                  Fulano de Tal
                </Text>
              </Box>
              <Box
                alignItems="flex-start"
                display="flex"
                flexDirection="row"
                mt="0.7rem"
              >
                <Text fontWeight="bold">Email: </Text>
                <Text fontWeight="400" ml=".5rem" width="22rem">
                  jabacule@filmes.com
                </Text>
              </Box>
            </Box>
          </Box>
          <Button
            rightIcon={<Share height="1.3rem" width="1.3rem" />}
            scheme="blue"
            width="20rem"
          >
            Send
          </Button>
        </Box>
        <Text fontSize="1.1rem" fontWeight="bold" my="1.5rem">
          Purchase Description
        </Text>

        <Box alignItems="center" display="flex" flexDir="row">
          <Image
            alt="Product Image"
            borderRadius=".4rem"
            height="10rem"
            width="10rem"
            fit="cover"
            mr="1rem"
            src="http://img.washingtonpost.com/rf/image_960w/2010-2019/WashingtonPost/2016/10/19/Production/Daily/A-Section/Images/North_Korea_Smoking_Chimp-ebe42.jpg"
          />
          <Box>
            <Box
              alignItems="center"
              display="flex"
              flexDir="row"
              justifyContent="space-between"
            >
              <Text fontSize="2.5rem" fontWeight="medium">
                Product Name
              </Text>
              <Text fontWeight="bold">Date: 23/01/2022</Text>
            </Box>
            <Text fontWeight="bold" my=".4rem">
              $ 999.99
            </Text>
            <Text>
              <strong>Descrição: </strong> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Suspendisse scelerisque scelerisque
              mi.
            </Text>
          </Box>
        </Box>
      </Box>
      <Text fontSize="1.1rem" fontWeight="bold">
        Payment method
      </Text>
      <Box
        bg="darkCard"
        borderRadius=".4rem"
        display="flex"
        flexDir="row"
        pl="2rem"
        py="1rem"
        mt="1.5rem"
        width="25rem"
      >
        <Box
          alignItems="center"
          bg="gray.400"
          borderRadius=".4rem"
          display="flex"
          height="4rem"
          justifyContent="center"
          width="4rem"
        >
          <Image
            alt="Payment type logo"
            height="2.5rem"
            width="2.5rem"
            src="https://cdn-icons-png.flaticon.com/512/4021/4021708.png"
          />
        </Box>
        <Box ml="1rem">
          <Text fontWeight="bold" mb="1rem">
            Mastercard
          </Text>
          <Text>**** **** **** 4343</Text>
        </Box>
      </Box>
    </Box>
  );
}
