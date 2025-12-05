import { useState } from "react";
import { Header, Student, AttendanceStats, SearchBar } from "./components/";
import { initialStudents } from "./data/db";

export default function App() {
  const totalStudents = initialStudents.length;
  const [presents, setPresents] = useState(totalStudents);
  const [absents, setAbsents] = useState(0);
  const [lates, setLates] = useState(0);

  const incrementPresents = (prevAttendance) => {
    if (presents < totalStudents && prevAttendance === "Absent") {
      setAbsents((prev) => prev - 1);
      setPresents((prev) => prev + 1);
    }
    if (prevAttendance === "Late" && lates > 0) {
      setLates((prev) => prev - 1);
    }
  };

  const incrementAbsents = (prevAttendance) => {
    if (absents < totalStudents) {
      if (prevAttendance === "Present") {
        setPresents((prev) => prev - 1);
        setAbsents((prev) => prev + 1);
      }
      if (prevAttendance === "Late") {
        setLates((prev) => prev - 1);
        setPresents((prev) => prev - 1);
        setAbsents((prev) => prev + 1);
      }
    }
  };

  const incrementLates = (prevAttendance) => {
    if (
      prevAttendance === "Absent" &&
      lates < totalStudents &&
      presents < totalStudents
    ) {
      setAbsents((prev) => prev - 1);
      setLates((prev) => prev + 1);
      setPresents((prev) => prev + 1);
    }
    if (prevAttendance === "Present") {
      setLates((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      <Header />

      <main className="p-8">
        <div>
          <AttendanceStats
            totalStudents={initialStudents.length}
            presents={presents}
            absents={absents}
            lates={lates}
          />
        </div>
        <div className="flex justify-end">
          <SearchBar />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 lg:grid-cols-3">
          {initialStudents.map((student) => (
            <Student
              key={student.id}
              id={student.id}
              name={student.name}
              image={student.image}
              incrementPresents={incrementPresents}
              incrementAbsents={incrementAbsents}
              incrementLates={incrementLates}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
