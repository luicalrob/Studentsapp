import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Flex, Text, Spacer, Tag, Button, Icon, HStack  } from "@chakra-ui/react";
import { HiCalendar,HiOutlineLocationMarker, HiLibrary, HiPhone, HiMail } from "react-icons/hi";
import * as API from "../services/LaunchesStudents";

import dayjs from "dayjs";
import "dayjs/locale/es";

export function StudentDetails() {

  const { id } = useParams();
  const [student, setStudent] = useState({});
  useEffect(() => {
    API.getStudentById(id).then(setStudent).catch(console.log);
  }, [id]);


  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      {!student ? (
        <div>Loading...</div>
      ) : (
        <>
          <Flex>
            <Text fontSize="2xl">
              Student <strong>{student.name} {student.surname}</strong> 
            </Text>
            <Spacer />
          </Flex>

          <Flex align="center">
            <Icon as={HiCalendar} color="gray.500" />
            <Text fontSize="sm" ml={1} color="gray.500">
                {dayjs(student.birthDate).locale("es").format("D MMMM, YYYY")}
            </Text>
          </Flex>

          <HStack spacing={6}>
            <Box> <Flex align="center"> 
              <Icon as={HiOutlineLocationMarker} color="gray.500" />
              <Text fontSize="md" ml={1}> Address: </Text> 
            </Flex></Box>
            <Box> <Text fontSize="md" color='black'> <strong>{student.address}</strong> </Text> </Box>
          </HStack>

          <HStack spacing={6}>
            <Box> <Flex align="center"> 
              <Icon as={HiLibrary} color="gray.500" />
              <Text fontSize="md" ml={1}> University: </Text> 
            </Flex></Box>
            <Box> <Text fontSize="md" color='black'> <strong>{student.university}</strong> </Text> </Box>
          </HStack>

          <HStack spacing={6}>
            <Box> <Flex align="center"> 
              <Icon as={HiPhone} color="gray.500" />
              <Text fontSize="md" ml={1}> Phone: </Text> 
            </Flex></Box>
            <Box> <Text fontSize="md" color='black'> <strong>{student.phoneNumber}</strong> </Text> </Box>
          </HStack>

          <HStack spacing={6}>
            <Box> <Flex align="center"> 
              <Icon as={HiMail} color="gray.500" />
              <Text fontSize="md" ml={1}> Email: </Text> 
            </Flex></Box>
            <Box> <Text fontSize="md" color='black'> <strong>{student.email}</strong> </Text> </Box>
          </HStack>
          
          <HStack spacing={6}>
            <Box> <Flex align="center"> 
              <Text fontSize="md" ml={1}> Degree: </Text> 
            </Flex></Box>
            <Box> <Text fontSize="md" color='black'> <strong>{student.degree}</strong> </Text> </Box>
          </HStack>

          <HStack spacing={6}>
            <Box> <Flex align="center"> 
              <Text fontSize="md" ml={1}> Course: </Text> 
            </Flex></Box>
            <Box> <Text fontSize="md" color='black'> <strong>{student.course}</strong> </Text> </Box>
          </HStack>
        </>
      )}
    </Box>
  );
}
