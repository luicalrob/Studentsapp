import { Routes, Route, Link } from "react-router-dom";

import { StudentList } from "./components/StudentList";
import { StudentDetails } from "./components/StudentDetails";

import { Image} from "@chakra-ui/react";
import logo from "./assets/Unit4_Logo.jpg";

export function AppStudents() {
  return (
    <>
      <Image m={4} src={logo} width={300}/>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="student/:id" element={<StudentDetails />} />
      </Routes>
    </>
  );
}