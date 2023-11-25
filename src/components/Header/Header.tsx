import React from "react"

const Header: React.FC = () => {
  return(
    <header>
      <div className="bg-gray-200 rounded h-16 shadow flex px-5 md:px-20 2xl:px-72">
        <p className="text-3xl block my-auto font-bold">Tasks List</p>
      </div>
    </header>
  )
};

export default Header;
