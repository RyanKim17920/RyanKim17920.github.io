import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const TimelineItem = ({ year, title, description, isVisible }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 100 });
    }
  }, [isVisible, controls]);

  return (
    <motion.div 
      className="timeline-item bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6 w-full transition-colors duration-300"
      initial={{ opacity: 0, x: 100 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{year}</h3>
      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <Link to={`/project/${year}`} className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-semibold transition-colors duration-300">
        Learn More <ArrowRight className="ml-2" size={18} />
      </Link>
    </motion.div>
  );
};

const SkillItem = ({ skill }) => {
  const controls = useAnimation();

  const handleHover = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    controls.start({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(37, 99, 235, 0.2) 0%, transparent 50%)`,
      rotateX: 10 * ((y - rect.height / 2) / rect.height),
      rotateY: -10 * ((x - rect.width / 2) / rect.width),
      scale: 1.05,
    });
  };

  const handleHoverEnd = () => {
    controls.start({ background: 'none', rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center cursor-pointer text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      animate={controls}
      onMouseMove={handleHover}
      onMouseLeave={handleHoverEnd}
    >
      {skill}
    </motion.div>
  );
};

const Home = ({ darkMode }) => {
  const [visibleItems, setVisibleItems] = useState({});
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  const timelineItems = [
    {
      year: "May 2024 - Present",
      title: "Epoch of research",
      description: "Authored a research paper and contributed to the open-source community through code implementation."
    },
    {
      year: "January 2024 - Present",
      title: "Kaggling batch",
      description: "Participated in Kaggle competitions, applying machine learning techniques to real-world datasets and challenges."
    },
    {
      year: "August 2023 - June 2024",
      title: "Internship timestep",
      description: "Built and deployed full-stack web applications for a small startup."
    },
    {
      year: "March 2023 - June 2023",
      title: "Learning through backpropagation",
      description: "Studied data science fundamentals and completed specializations in machine learning and deep learning."
    },
  ];

  const skills = [
    "Python", "PyTorch", "TensorFlow", "Keras", "Scikit-learn",
    "Matplotlib", "NumPy", "Pandas", "Flask", "Java",
    "C++", "HTML/CSS/JS", "React", "Git", "Docker"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisibleItems(prev => ({
          ...prev,
          [entry.target.dataset.index]: entry.isIntersecting
        }));
      });
    }, { threshold: 0.5, root: null, rootMargin: "0px" });

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-800 dark:to-blue-600 text-white transition-colors duration-300">
        <div className="text-center px-4 py-16">
          <img src="/api/placeholder/150/150" alt="Ryan" className="rounded-full mx-auto mb-8 border-4 border-white shadow-lg" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Ryan</h1>
          <p className="text-xl md:text-2xl mb-8">Machine Learning Student Researcher</p>
          <p className="max-w-2xl mx-auto mb-12 text-lg">Exploring the frontiers of AI with a focus on explainable models and ethical implications of machine learning in society.</p>
          <a href="#journey" className="bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300">Explore My Work</a>
        </div>
      </section>

      <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <section id="journey" ref={timelineRef} className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">My Journey</h2>
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div key={item.year} ref={el => itemRefs.current[index] = el} data-index={index}>
                <TimelineItem 
                  {...item} 
                  isVisible={visibleItems[index]} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">Let's Connect</h2>
          <p className="text-xl mb-12 text-gray-600 dark:text-gray-400">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <div className="mt-4 flex justify-center space-x-4">
              <a href="https://github.com/ryankim17920" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-github text-2xl"><img src="github.png" alt="github" width={30} height={30}></img></i>
              </a>
              <a href="https://www.linkedin.com/in/ryan-kim-59a762319/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-linkedin text-2xl"><img src="linkedin.png" alt="linkedin" width={30} height={30}></img></i>
              </a>
              <a href="https://www.kaggle.com/ryankim17920" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-kaggle text-2xl"><img src="kaggle.png" alt="kaggle" width={30} height={30}></img></i>
              </a>
              <a href="mailto:ryankim17920@gmail.com" className="text-gray-400 hover:text-blue-600 transition duration-300">
                <i className="fas fa-envelope text-2xl"><Mail width={30} height={30}/></i>
              </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;