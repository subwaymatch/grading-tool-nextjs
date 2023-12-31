import { Button, TextInput } from "flowbite-react";
import { useState } from "react";

const StudentInfo = ({ allStudents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            value={allStudents[currentIndex]?.firstName || ""}
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
            value={allStudents[currentIndex]?.lastName || ""}
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
            value={allStudents[currentIndex]?.netId || ""}
          />
        </div>
        <div className="flex justify-between">
          <Button
            onClick={() => {
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
              }
            }}
          >
            ←
          </Button>
          <Button
            onClick={() => {
              if (currentIndex < allStudents.length - 1)
                setCurrentIndex(currentIndex + 1);
            }}
          >
            →
          </Button>
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
