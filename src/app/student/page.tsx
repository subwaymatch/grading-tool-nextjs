"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { Table } from "flowbite-react";

interface Student {
  id: number;
  name: string;
  email: string;
}

import StudentInfo from "@/components/StudentInfo";

const TestUser = () => {
  const [studentinfos, setStudentinfos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const studentinfos = await res.json();
      setStudentinfos(studentinfos);
    };

    fetchData().catch(console.error);
  }, []);

  const updatedStudentInfo = studentinfos.map((studentinfo) => {
    const [firstName, ...lastNameParts] = studentinfo.name.split(" ");
    const lastName = lastNameParts.join(" ");
    const netId = studentinfo.email.split("@")[0];

    return {
      ...studentinfo,
      firstName,
      lastName,
      netId,
    };
  });

  // console.log(updatedStudentInfo);
  return (
    <div className="flex">
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {studentinfos.map((studentinfo) => (
            <Table.Row key={studentinfo.id}>
              <Table.Cell>{studentinfo.name}</Table.Cell>
              <Table.Cell>{studentinfo.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <h1>Students</h1>
      <ul>
        {studentinfos.map((studentinfo) => (
          <li key={studentinfo.id}>
            {studentinfo.name} {studentinfo.email}
          </li>
        ))}
      </ul>

      <StudentInfo students={studentinfos} />
    </div>
  );
};

export default TestUser;
