export const AttendanceStats = ({
  totalStudents,
  presents,
  absents,
  lates,
}) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:grid-cols-4">
      <div className="bg-white border-2 border-white rounded-2xl p-4">
        <p className="text-gray-600">Total Students</p>
        <p className="text-black font-bold text-3xl">{totalStudents}</p>
      </div>
      <div className="bg-white border-2 border-white rounded-2xl p-4">
        <p className="text-gray-600">Present</p>
        <p className="text-green-500 font-bold text-3xl">{presents}</p>
      </div>
      <div className="bg-white border-2 border-white rounded-2xl p-4">
        <p className="text-gray-600">Absent</p>
        <p className="text-red-600 font-bold text-3xl">{absents}</p>
      </div>
      <div className="bg-white border-2 border-white rounded-2xl p-4">
        <p className="text-gray-600">Late</p>
        <p className="text-yellow-500 font-bold text-3xl">{lates}</p>
      </div>
    </section>
  );
};
