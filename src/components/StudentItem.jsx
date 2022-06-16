import { HiCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Spacer, Tag, Button, Icon } from "@chakra-ui/react";

import dayjs from "dayjs";
import "dayjs/locale/es";

export function StudentItem(student) {
  return (
    <Box key={student.id} bg="gray.100" p={4} m={4} borderRadius="lg">
        <Flex>
            <Text fontSize="2xl">
                Student <strong>{student.name}</strong> <strong>{student.surname}</strong> 
            </Text>
            <Spacer />
        </Flex>
        
        <Flex align="center">
            <Icon as={HiCalendar} color="gray.500" />
            <Text fontSize="sm" ml={1} color="gray.500">
                {dayjs(student.birthDate).locale("es").format("D MMMM, YYYY")}
            </Text>
        </Flex>

        <Link to={`/student/${student.id}`}>
            <Button mt={2} colorScheme="purple">
                More Details
            </Button>
        </Link>
    </Box>
  );
}