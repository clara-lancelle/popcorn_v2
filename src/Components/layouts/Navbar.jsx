import useDebounce from "../../useDebounce";
import HandleSearch from "../HandleSearch";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

function AppNavbar() {
  const [search, setSearch] = useDebounce(1000);

  return (
    <Navbar className="border-gray-200 bg-gray-50 justify-around">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap ">
          🍿 PopCorn
        </span>
      </Link>
      <NavbarToggle />

      <NavbarCollapse>
        <div className="relative md:block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="search"
            onInput={(e) => setSearch(e.target.value.replace(/ /g, "+"))}
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search..."
          />
        </div>
        <ul className="flex flex-col md:items-center font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
          <li>
            <NavLink
              to="/fav"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rated"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
            >
              Rated movies
            </NavLink>
          </li>
        </ul>
      </NavbarCollapse>

      {search && <HandleSearch search={search} />}
    </Navbar>
  );
}

export default AppNavbar;
