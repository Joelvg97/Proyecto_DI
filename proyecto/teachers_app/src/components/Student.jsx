import { useState } from "react";

// Componente individual de estudiante
export const Student = ({
  id,
  name,
  image,
  incrementPresents,
  incrementAbsents,
  incrementLates,
}) => {
  // Estado de asistencia
  const [attendance, setAttendance] = useState("Present");

  // Colores según el estado
  const attendanceColors = {
    Present: "text-green-700 bg-green-200 border-2 border-white",
    Absent: "text-red-700 bg-red-200 border-2 border-white",
    Late: "text-yellow-700 bg-yellow-200 border-2 border-white",
  };

  // Estilo de botón según si está seleccionado
  const pressedButton = (type) =>
    attendance === type
      ? "bg-blue-500 text-white border-2 border-blue-500 rounded-2xl py-2 grow"
      : "bg-gray-300 border-2 border-gray-300 rounded-2xl py-2 grow";

  return (
    <section className="bg-white border-2 border-white rounded-2xl p-4">
      {/* Información del estudiante */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3 justify-start">
          <img
            alt={`Avatar of ${name}`}
            src={`/img/${image}.jpg`}
            className="rounded-full w-12 h-12"
          />
          <div className="text-left">
            <p className="font-bold">{name}</p>
            <p className="text-gray-500">ID: {id}</p>
          </div>
        </div>

        {/* Estado actual */}
        <span
          className={`${attendanceColors[attendance]} rounded-2xl py-2 w-24 text-center`}
        >
          {attendance}
        </span>
      </div>

      {/* Botones de asistencia */}
      <div className="flex gap-2">
        <button
          onClick={() => {
            setAttendance("Present");
            incrementPresents(attendance);
          }}
          className={pressedButton("Present")}
        >
          Present
        </button>

        <button
          onClick={() => {
            setAttendance("Absent");
            incrementAbsents(attendance);
          }}
          className={pressedButton("Absent")}
        >
          Absent
        </button>

        <button
          onClick={() => {
            setAttendance("Late");
            incrementLates(attendance);
          }}
          className={pressedButton("Late")}
        >
          Late
        </button>
      </div>
    </section>
  );
};