import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-6">
      <div className="bg-gray-100 rounded-lg shadow dark:bg-gray-300">
        <div className="w-full px-5 md:px-20 lg:px-72 w-full p-4 md:flex md:items-center md:justify-between">
          <span className="text-gray-500 sm:text-center dark:text-gray-400">© 2023 Tasks Manager.
          </span>
          <ul className="flex flex-wrap items-center mt-3 font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6 text-gray-500">Github Link</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
