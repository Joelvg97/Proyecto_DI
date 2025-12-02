export const SearchBar = () => {
  return (
    <section className="bg-white border-2 border-white rounded-2xl mt-10 py-2 w-60">
      <div>
        <label className="flex items-center gap-2">
          <div>
            <img src="/img/lupa.png" className="rounded-full w-8 h-8" />
          </div>
          <input placeholder="Search student name..." />
        </label>
      </div>
    </section>
  );
};
