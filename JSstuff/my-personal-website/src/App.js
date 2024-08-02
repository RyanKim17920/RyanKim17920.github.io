import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from 'lucide-react';

const Home = React.lazy(() => import('./Home'));
const Blog = React.lazy(() => import('./Blog'));
const BlogPost = React.lazy(() => import('./BlogPost'));
const ProjectPage = React.lazy(() => import('./ProjectPage'));

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <div className={`app min-h-screen ${darkMode ? 'dark' : ''}`}>
        <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled || darkMode ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-transparent'} py-4`}>
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">Ryan's Portfolio</Link>
              <div className="flex space-x-6 items-center">
                <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Home</Link>
                <Link to="/blog" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Blog</Link>
                <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                  {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <React.Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/blog" element={<Blog darkMode={darkMode} />} />
              <Route path="/blog/:id" element={<BlogPost darkMode={darkMode} />} />
              <Route path="/project/:year" element={<ProjectPage darkMode={darkMode} />} />
            </Routes>
          </React.Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;