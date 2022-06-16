import { useState, useEffect } from "react";
import * as API from "../services/LaunchesStudents";
import { StudentItem } from "./StudentItem";

import { Heading} from "@chakra-ui/react";


export function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    API.getAllStudents().then(setStudents).catch(console.log);
  }, []);

  return (
    <>
        <Heading align="center" as="h1" size="lg" m={4}>
            Student Manager App
        </Heading>
        {students.length === 0 ? (
        <div>Loading...</div>
        ) : (
        <section>
          {students.map((student) => (
            <StudentItem key={student.id} {...student} />
          ))}
        </section>
      )}
    </>
  );
}