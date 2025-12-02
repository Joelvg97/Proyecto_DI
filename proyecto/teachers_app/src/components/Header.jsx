export const Header = () => {
  return (
    <header className="bg-white border-2 border-white rounded-2xl flex justify-between items-center p-8">
      <div className="flex items-center gap-2">
        <img src="/img/school.png" className="rounded-full w-8 h-8" />
        <h1 className="text-3xl font-bold">Attendance Dashboard</h1>
      </div>
      <button>
        <img src="/img/user.png" className="rounded-full w-8 h-8" />
      </button>
    </header>
  );
};