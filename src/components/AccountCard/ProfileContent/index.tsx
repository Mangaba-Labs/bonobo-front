import { Box, Text, Image } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Button } from "../..";
import Edit from "../../../assets/images/edit.svg";
import { ProfileContext } from "../context";

export function ProfileContent() {
  const { setScreen } = useContext(ProfileContext);
  function onPressEditPassword() {
    setScreen("password");
  }

  function onPressEditProfile() {
    setScreen("editProfile");
  }

  return (
    <Box height="100%" width="100%">
      <Box>
        <Text fontSize="3rem" fontWeight="bold" mb="2rem">
          My Account
        </Text>
        <Text fontSize="1.1rem" fontWeight="bold">
          Profile
        </Text>
        <Box
          alignItems="center"
          bg="darkCard"
          borderRadius="0.4rem"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          my="1.7rem"
          px="2rem"
          py="1rem"
          width="90%"
        >
          <Image
            alt="Profile Pic"
            borderRadius=".4rem"
            height="5rem"
            width="5rem"
            fit="cover"
            mr="1rem"
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/101006-charlie-hmed-10a.jpg"
          />
          <Box>
            <Box alignItems="center" display="flex" flexDirection="row">
              <Text fontWeight="bold">Name:</Text>
              <Text fontWeight="400" ml="0.5rem">
                Fulano de Tal
              </Text>
            </Box>
            <Box
              alignItems="center"
              display="flex"
              flexDirection="row"
              mt="0.7rem"
            >
              <Text fontWeight="bold">Email: </Text>
              <Text fontWeight="400" ml=".5rem">
                fulano@detal.com
              </Text>
            </Box>
          </Box>

          <Button
            leftIcon={<Edit height="1rem" width="1rem" />}
            ml="15rem"
            textColor="black"
            scheme="green"
            width="20rem"
            onClick={onPressEditProfile}
          >
            Edit
          </Button>
        </Box>
        <Text fontSize="1.1rem" fontWeight="bold">
          Password
        </Text>
        <Box
          alignItems="center"
          bg="darkCard"
          borderRadius="0.4rem"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          my="1.7rem"
          px="2rem"
          py="1rem"
          width="90%"
        >
          <Text fontWeight="bold">Password: **********</Text>
          <Button
            leftIcon={<Edit height="1rem" width="1rem" />}
            textColor="black"
            scheme="green"
            width="20rem"
            onClick={onPressEditPassword}
          >
            Edit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
