import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // It can be used to store a mutable value that does not cause a re-render when updated.

  const user = {
    name: "Tanish Mundra", 
    avatar: "TM"
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-[#FDFBF7] border-b border-stone-200 sticky top-0 z-50 font-sans">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="shrink-0 cursor-pointer group">
          <a href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-gray-900 tracking-tight group-hover:text-[#C66B4F] transition-colors duration-300">
              DevLog.
            </span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-600">
          <a 
            href="/" 
            className="hover:text-[#C66B4F] transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="/write" 
            className="hover:text-[#C66B4F] transition-colors duration-200"
          >
            Write Post
          </a>
          <a 
            href="/about" 
            className="hover:text-[#C66B4F] transition-colors duration-200"
          >
            About
          </a>
        </nav>

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 pl-3 pr-2 py-1.5 rounded-full hover:bg-stone-100 transition-all border border-transparent hover:border-stone-200"
          >
            <span className="text-sm font-semibold text-gray-800 hidden sm:block">
              {user.name}
            </span>
            <div className="w-8 h-8 bg-stone-200 rounded-full flex items-center justify-center text-stone-600 text-xs font-bold border border-stone-300">
              {user.avatar}
            </div>

            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-xl border border-stone-100 py-2 origin-top-right animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-2 border-b border-stone-100 mb-2 md:hidden">
                <p className="text-sm font-bold text-gray-800">{user.name}</p>
              </div>
              <button 
                onClick={() => console.log("Logout clicked")}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                Log out
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;