import React, { useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
  onToggle: () => void;
  isOpen: boolean;
}

const Search: React.FC<SearchProps> = ({ onSearch, onToggle, isOpen }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="mb-4">
      <button onClick={onToggle} className="text-gray-600 hover:text-gray-900">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      {isOpen && (
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md mt-2"
          placeholder="Search attractions..."
        />
      )}
    </div>
  );
};

export default Search;
