import { useState } from "react";
import { Header, Student, AttendanceStats, SearchBar } from "./components/";
import { initialStudents } from "./data/db";

export default function App() {
  // Cantidad total de estudiantes
  const totalStudents = initialStudents.length;

  // Estados para la asistencia
  const [presents, setPresents] = useState(totalStudents); // Todos inician como presentes
  const [absents, setAbsents] = useState(0);              // Ninguno ausente al inicio
  const [lates, setLates] = useState(0);                  // Ninguno tarde al inicio

  // Función para marcar presente
  const incrementPresents = (prevAttendance) => {
    if (presents < totalStudents && prevAttendance === "Absent") {
      setAbsents((prev) => prev - 1);
      setPresents((prev) => prev + 1);
    }
    if (prevAttendance === "Late" && lates > 0) {
      setLates((prev) => prev - 1);
    }
  };

  // Función para marcar ausente
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

  // Función para marcar tarde
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
        {/* Estadísticas de asistencia */}
        <div>
          <AttendanceStats
            totalStudents={initialStudents.length}
            presents={presents}
            absents={absents}
            lates={lates}
          />
        </div>

        {/* Barra de búsqueda */}
        <div className="flex justify-end">
          <SearchBar />
        </div>

        {/* Lista de estudiantes */}
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