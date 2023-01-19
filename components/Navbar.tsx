import Link from 'next/link';

const Navbar = ({ handleSearch = false }: { handleSearch?: any }) => {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      {!!handleSearch && (
        <div className="search-container">
          <form>
            <input
              type="text"
              placeholder="Search Desk"
              onChange={handleSearch}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
