import React from "react"

const Header: React.FC = () => {
  return(
    <header className="px-5 md:px-20 lg:px-48">
      <div className="bg-gray-200 rounded h-16 shadow px-5 flex">
        <p className="text-3xl block my-auto font-bold">Tasks List</p>
      </div>
    </header>
  )
};

export default Header;
