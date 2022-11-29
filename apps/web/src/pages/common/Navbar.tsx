import React from 'react'

const Navbar = () => {
  return (
    <>
     
<nav className="shadow-lg shadow-blue-500/50 p-3 border-gray-200 rounded bg-gray-50
 dark:bg-gray-100 dark:border-gray-700">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" className="flex items-center">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhUPEBAVFhUXFRUWERUXFxUVEhUWFhgWFxYWGBUYISggHholHhgVITIhJSkrLi8uFx8/ODMsNygtLi0BCgoKDg0OGxAQGy0lICUvLS0tLTUtKy0tNS0tLS0tLy0tLS0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKcBLgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYDBQcBCAL/xABGEAACAQIDAwgGBQkHBQAAAAABAgADEQQSIQUGMQcTIkFRYXGRFDJScoGhI0KxstIWF1Ric4KSk9EkM1OiwcLhY3SDs/D/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAgYB/8QAMhEAAQMCBAMHBAICAwAAAAAAAAECAwQREiExQQVRcRMigZGhscFh0eHwFVIUMlNigv/aAAwDAQACEQMRAD8A7jERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREARKzjDjvTkFMD0Swz+pbgc1yenmvwtpw75Tt4dp7Zw7VKruyUg5ClUoMgBNl1sWtw1PbLEdOr1REcnn6dStJVIxFVWrkttPXp+Tq8g7R2nRwy85XqpTXtYgX7h2nuE4nX3z2g4s2Mf90U0PmqgzRYl2qNnqOzt1szFm8zrLLeHOv3l8iuvEWKndQ61tHlUwdM2pJVq94UInm5B+U01TlgP1cDp31v6JObNTn4KyylDCm1/Ffix8SsVTq2D5XqJNq2Eqp3oyVLfA5ZdNh7x4bGi+HrK5GrLqtRfFDrbv4T5zKT80MS9F1q0nKOpurKbMD/8AdXAyOShjtduXqWGVFz6miVTk93mO0cLzlRQtVGyVgPVYgAh17iDw6jcS1zKVLKqFoTDVq5WRbesSPCylv9JmkXFevS95vuPPgJUREAqe/O9p2YKTCgKvOFxq+TLlCn2TfjKn+eB/0Afzj+CSuWsXXC+9V+xJznYezPSsRSww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"
                className="h-6 mr-3 sm:h-10 border-spacing-1"
              />
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm 
    text-gray-900 rounded-lg md:hidden hover:bg-gray-100 
    focus:outline-none focus:ring-2 focus:ring-gray-200 
    dark:text-gray-900 dark:hover:bg-gray-700
     dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row
       md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 
       md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent 
       dark:border-gray-700">
        <li>
          <a href="'../../reg/register" className="block py-2 pl-3 pr-4 text-black 
          bg-blue-700 rounded md:bg-transparent md:text-vlack-900 md:p-0
           md:dark:text-black dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Register</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 
          rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
          md:hover:text-blue-700 md:p-0 dark:text-gray-400 
          md:dark:hover:text-black dark:hover:bg-gray-700 
          dark:hover:text-black md:dark:hover:bg-transparent">Employee List</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 
          rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
          md:hover:text-blue-700 md:p-0 dark:text-gray-400 
          md:dark:hover:text-black dark:hover:bg-gray-700
           dark:hover:text-black md:dark:hover:bg-transparent">Varification</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar



