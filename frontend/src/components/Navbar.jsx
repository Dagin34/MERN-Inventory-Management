import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <div className="flex flex-wrap w-screen">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-12 max-md:px-2 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading text-accent" onClick={() => { navigate("/") }}>
                Desired Shopping.
              </a>
              <ul className="max-lg:hidden flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li><a className="text-light-gray hover:text-accent dark:text-primary dark:hover:text-accent cursor-pointer" onClick={() => { navigate("/") }}>Home</a></li>
                <li><a className="text-light-gray hover:text-accent dark:text-primary dark:hover:text-accent cursor-pointer" onClick={() => { navigate("/create") }}>Create</a></li>
                <li><a className="text-light-gray hover:text-accent dark:text-primary dark:hover:text-accent cursor-pointer" href="">Contact Us</a></li>
              </ul>
              <div className="heart hidden xl:flex items-center space-x-5">
                {/* <button onClick={toggleDarkMode} className="w-6 h-6 hover:bg-accent dark:hover:bg-accent bg-white dark:bg-primary rounded-lg font-bold">
                </button> */}
                <MdDarkMode className='dark:text-primary dark:hover:text-accent hover:text-accent text-light-gray text-3xl'
                  onClick={toggleDarkMode} />
              </div>
            </div>
            <div className='flex justify-end'>
              <a className="navbar-burger flex self-center mr-4 xl:hidden text-primary" href="#" onClick={toggleSidebar}>
                <FaBars className='text-xl dark:text-primary dark:hover:text-accent hover:text-accent text-light-gray' />
              </a>
            </div>
          </nav>
        </section >
      </div >
      <div className={`fixed top-0 right-0 h-full bg-tertiary bg-secondary dark:bg-white w-3/5 max-sm:w-full  transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <ul className="flex flex-col p-4 space-y-8">
          <li className='flex justify-between items-center'>
            <a className="text-3xl"><FaXmark className='cursor-pointer hover:text-secondary text-primary' onClick={toggleSidebar} /></a>
          </li>
          <li><a className="text-light-gray hover:text-accent dark:text-primary dark:hover:text-accent cursor-pointer" onClick={() => { navigate("/") }}>Home</a></li>
          <li><a className="text-light-gray hover:text-accent dark:text-primary dark:hover:text-accent cursor-pointer" onClick={() => { navigate("/create") }}>Create</a></li>
          <li><a className="text-light-gray hover:text-accent dark:text-primary dark:hover:text-accent cursor-pointer" href="">Contact Us</a></li>
          <li>
            <a className='flex justify-start space-x-2'>
              <MdDarkMode className='dark:text-primary dark:hover:text-accent hover:text-accent text-light-gray text-2xl'
                onClick={toggleDarkMode} /> <span className='dark:text-primary dark:hover:text-accent hover:text-accent text-light-gray' onClick={toggleDarkMode}>Toggle Dark Mode</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar