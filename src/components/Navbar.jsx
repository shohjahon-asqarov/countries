import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const storedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(storedTheme || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <header className='shadow-navbar-shadow dark:shadow-navbar-dark-shadow sticky top-0 z-10 bg-white dark:bg-dark-card dark:text-white'>
            <div className="container">
                <div className="flex py-6 justify-between items-center">
                    <NavLink to='/'><span className='text-base sm:text-2xl font-extrabold'>Where in the world?</span></NavLink>

                    <button onClick={changeTheme} className="flex justify-center items-center space-x-1 text-sm sm:text-base cursor-pointer">
                        <i className='bi bi-moon'></i>
                        <span className='font-semibold'>Dark Mode</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar