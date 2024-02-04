import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button onClick={toggleDropdown} className="border px-4 py-2">
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="absolute bg-white shadow-md p-4 mt-2">
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
