import React, { useState, useEffect } from "react";
import {
  MdOutlineDarkMode,
  MdOutlineMenu,
  MdSearch,
  MdClose,
  MdOutlineLightMode,
  MdErrorOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
import useSidebar from "../store/useSidebar";
import { useShallow } from "zustand/shallow";
import useTheme from "../store/useTheme";

const Header = () => {
  const [toggleSidebar] = useSidebar(
    useShallow((state) => [state.toggleSidebar])
  );
  const [theme, toggleTheme] = useTheme(
    useShallow((state) => [state.theme, state.toggleTheme])
  );

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Example dataset (replace with your data or API)
  const pages = [
    { name: "Dashboard", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Settings", path: "/settings" },
    { name: "Profile", path: "/profile" },
    { name: "Reports", path: "/reports" },
  ];

  // Debounce input (300ms)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  // Filter when debounced search changes
  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      setSuggestions([]);
      return;
    }
    const filtered = pages.filter((page) =>
      page.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setSuggestions(filtered);
  }, [debouncedSearch]);

  return (
    <header className="flex items-center justify-between h-11 px-6">
      {/* Left - Sidebar toggle */}
      <div
        onClick={toggleSidebar}
        className="cursor-pointer group p-1"
        aria-label="Toggle sidebar"
      >
        <MdOutlineMenu className="text-secondary group-hover:text-secondary-heavy text-2xl" />
      </div>

      {/* Center - Search */}
      <div className="relative flex-1 max-w-md mx-4">
        <div className="relative">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-2xl" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className={`w-full pl-10 pr-9 py-1.5 border border-border bg-primary text-txt 
                       placeholder:text-gray-500 focus:outline-none focus:ring-1 
                       focus:ring-secondary focus:border-0 transition
                       ${search ? "rounded-t-lg" : "rounded-full"}`}
          />
          {search && (
            <div
              onClick={() => {
                setSearch("");
                setSuggestions([]);
              }}
              className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2 text-txt hover:text-secondary"
              aria-label="Clear search"
            >
              <MdClose className="text-xl" />
            </div>
          )}
        </div>

        {/* Suggestions dropdown */}
        {search && (
          <div className="absolute left-0 right-0 bg-primary border border-border border-t-0 rounded-b-lg shadow-lg z-10">
            {suggestions.length > 0 ? (
              suggestions.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="block px-4 py-2 hover:bg-secondary/20 text-txt transition"
                  onClick={() => {
                    setSearch("");
                    setSuggestions([]);
                  }}
                >
                  {s.name}
                </Link>
              ))
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 text-gray-500">
                <MdErrorOutline className="text-xl" />
                <span>No results found</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right - Dark Mode */}
      {theme === "dark" ? (
        <div
          className="p-1 rounded-full bg-primary cursor-pointer border border-border"
          aria-label="Toggle dark mode"
          onClick={() => toggleTheme("light")}
        >
          <MdOutlineLightMode className="text-secondary text-2xl" />
        </div>
      ) : (
        <div
          className="p-1 rounded-full bg-primary cursor-pointer border border-border"
          aria-label="Toggle dark mode"
          onClick={() => toggleTheme("dark")}
        >
          <MdOutlineDarkMode className="text-secondary text-2xl" />
        </div>
      )}
    </header>
  );
};

export default Header;
