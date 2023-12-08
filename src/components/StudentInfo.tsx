import { Button, TextInput } from "flowbite-react";
import { use, useEffect, useState } from "react";

const StudentInfo = ({ students }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log("Students:", students);
  }, [students]);

  const navigateStudents = (direction: string) => {
    if (direction == "next" && currentIndex < students.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction == "prev" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    console.log("Current Index:", currentIndex);
  }, [currentIndex]);

  return (
    <div className="flex space-x-4">
      <div>
        <div className="mb-2">Student Information</div>
        <div className="mb-4">
          <label
            htmlFor="first-name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            First Name:
          </label>
          <TextInput
            id="first-name"
            type="text"
            value={students[currentIndex]?.firstName || ""}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="last-name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Last Name:
          </label>
          <TextInput
            id="last-name"
            type="text"
            value={students[currentIndex]?.lastName || ""}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="net-id"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            NetID:
          </label>
          <TextInput
            id="net-id"
            type="text"
            value={students[currentIndex]?.netId || ""}
            readOnly
          />
        </div>
        <div className="flex justify-between">
          <Button onClick={() => navigateStudents("prev")}>←</Button>
          <Button onClick={() => navigateStudents("next")}>→</Button>
        </div>
      </div>
      <div>
        <div className="mb-2">Jump To</div>
        <div className="mb-4">
          <label
            htmlFor="filter"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Filter:
          </label>
          <select id="filter" className="form-select block w-full mt-1">
            <option value="all">All</option>
            <option value="graded">Graded</option>
            <option value="ungraded">Ungraded</option>
          </select>
        </div>
        {/* Add search input and button here */}
      </div>
    </div>
  );
};

export default StudentInfo;
