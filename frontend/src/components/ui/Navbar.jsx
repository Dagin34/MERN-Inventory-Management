import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ColorModeProvider } from './color-mode'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const navigate = useNavigate();

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
      <div className="flex flex-wrap">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading text-accent" onClick={() => {navigate("/")}}>
                Desired Shopping.
              </a>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li><a className="text-light-gray hover:text-accent dark:text-primary dark:hover:text-accent" onClick={() => {navigate("/")}}>Home</a></li>
                <li><a className="text-light-gray hover:text-accent dark:text-primary dark:hover:text-accent" onClick={() => {navigate("/create")}}>Create</a></li>
                <li><a className="text-light-gray hover:text-accent dark:text-primary dark:hover:text-accent" href="">Collections</a></li>
                <li><a className="text-light-gray hover:text-accent dark:text-primary dark:hover:text-accent" href="">Contact Us</a></li>
              </ul>
              <div className="heart hidden xl:flex items-center space-x-5">
                <button onClick={toggleDarkMode} className="w-6 h-6 hover:bg-accent dark:hover:bg-accent bg-white dark:bg-primary rounded-lg font-bold">
                </button>
                <a className="flex items-center hover:text-gray-200 dark:text-primary" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4 ">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75 dark:text-primary"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200 dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              </div>
            </div>
            <a className="xl:hidden flex mr-6 items-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200 dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="flex absolute -mt-5 ml-4 dark:text-primary"></span>
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75 dark:text-primary"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500 dark:text-primary"></span>

            </a>
            <a className="navbar-burger self-center mr-12 xl:hidden dark:stroke-primary" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200 stroke-current dark:stroke-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section >
      </div >
      {/* <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a title="Follow me on twitter" href="https://www.twitter.com/asad_codes" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"></a>
          <img className="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg" />

        </div>
      </div > */}
    </>
  );
}

export default Navbar