const Navbar = ({ search, setSearch, filter, setFilter }) => {
  return (
    <nav className="navbar">
      <h1>🌍 WorldWise Explorer</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;