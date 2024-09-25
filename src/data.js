import { useEffect, useState } from "react";

// Work Component
function Work() {
  const [studentData, setStudentData] = useState([]); // Local state for storing students

  useEffect(() => {
    // Fetch data from API
    fetch('/api/students')
      .then((res) => res.json())
      .then((json) => {
        setStudentData(json); // Set the data in the state
      })
      .catch((error) => {
        console.log("Error fetching the data", error);
      });
  }, []); // Empty dependency array, so the effect runs only once

  return (
    <div>
      <h1>Students</h1>
      {/* Display the students in the UI */}
      <ul>
        {studentData.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

// If you need to export the student data
export function getStudentData() {
  return fetch('/api/students')
    .then(res => res.json())
    .then(json => {
      return json; // Return fetched data
    })
    .catch((error) => {
      console.log("Error fetching the data", error);
      return [];
    });
}

export default Work;
