"use strict";(self.webpackChunkmy_personal_website=self.webpackChunkmy_personal_website||[]).push([[541],{5541:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(5043),s=a(9927),i=a(1984),n=a(5475),l=a(5692),o=a(5327),c=a(579);const d=e=>{let{year:t,title:a,description:o,isVisible:d}=e;const x=(0,s.s)();return(0,r.useEffect)((()=>{d?x.start({opacity:1,x:0}):x.start({opacity:0,x:100})}),[d,x]),(0,c.jsxs)(i.P.div,{className:"timeline-item bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6 w-full transition-colors duration-300",initial:{opacity:0,x:100},animate:x,transition:{duration:.5},children:[(0,c.jsx)("h3",{className:"text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:t}),(0,c.jsx)("h4",{className:"text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200",children:a}),(0,c.jsx)("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:o}),(0,c.jsxs)(n.N_,{to:"/project/".concat(t),className:"inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-semibold transition-colors duration-300",children:["Learn More ",(0,c.jsx)(l.A,{className:"ml-2",size:18})]})]})},x=e=>{let{skill:t}=e;const a=(0,s.s)();return(0,c.jsx)(i.P.div,{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center cursor-pointer text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300",whileHover:{scale:1.05},animate:a,onMouseMove:e=>{const t=e.currentTarget.getBoundingClientRect(),r=e.clientX-t.left,s=e.clientY-t.top;a.start({background:"radial-gradient(circle at ".concat(r,"px ").concat(s,"px, rgba(37, 99, 235, 0.2) 0%, transparent 50%)"),rotateX:(s-t.height/2)/t.height*10,rotateY:(r-t.width/2)/t.width*-10,scale:1.05})},onMouseLeave:()=>{a.start({background:"none",rotateX:0,rotateY:0,scale:1})},children:t})},h=e=>{let{darkMode:t}=e;const[a,s]=(0,r.useState)({}),i=(0,r.useRef)(null),n=(0,r.useRef)([]);return(0,r.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{s((t=>({...t,[e.target.dataset.index]:e.isIntersecting})))}))}),{threshold:.5,root:null,rootMargin:"0px"});return n.current.forEach((t=>{t&&e.observe(t)})),()=>{n.current.forEach((t=>{t&&e.unobserve(t)}))}}),[]),(0,c.jsxs)("div",{className:"home ".concat(t?"dark":""),children:[(0,c.jsx)("section",{className:"min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-800 dark:to-blue-600 text-white transition-colors duration-300",children:(0,c.jsxs)("div",{className:"text-center px-4 py-16",children:[(0,c.jsx)("img",{src:"/api/placeholder/150/150",alt:"Ryan",className:"rounded-full mx-auto mb-8 border-4 border-white shadow-lg"}),(0,c.jsx)("h1",{className:"text-5xl md:text-6xl font-bold mb-4",children:"Ryan"}),(0,c.jsx)("p",{className:"text-xl md:text-2xl mb-8",children:"Machine Learning Student Researcher"}),(0,c.jsx)("p",{className:"max-w-2xl mx-auto mb-12 text-lg",children:"Exploring the frontiers of AI with a focus on explainable models and ethical implications of machine learning in society."}),(0,c.jsx)("a",{href:"#journey",className:"bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300",children:"Explore My Work"})]})}),(0,c.jsx)("section",{id:"skills",className:"py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:(0,c.jsxs)("div",{className:"max-w-6xl mx-auto px-4",children:[(0,c.jsx)("h2",{className:"text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200",children:"My Skills"}),(0,c.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",children:["Python","PyTorch","TensorFlow","Keras","Scikit-learn","Matplotlib","NumPy","Pandas","Flask","Java","C++","HTML/CSS/JS","React","Git","Docker"].map(((e,t)=>(0,c.jsx)(x,{skill:e},t)))})]})}),(0,c.jsx)("section",{id:"journey",ref:i,className:"py-24 bg-white dark:bg-gray-800 transition-colors duration-300",children:(0,c.jsxs)("div",{className:"max-w-4xl mx-auto px-4",children:[(0,c.jsx)("h2",{className:"text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200",children:"My Journey"}),(0,c.jsx)("div",{className:"space-y-6",children:[{year:"May 2024 - Present",title:"Epoch of research",description:"Authored a research paper and contributed to the open-source community through code implementation."},{year:"January 2024 - Present",title:"Kaggling batch",description:"Participated in Kaggle competitions, applying machine learning techniques to real-world datasets and challenges."},{year:"August 2023 - June 2024",title:"Internship timestep",description:"Built and deployed full-stack web applications for a small startup."},{year:"March 2023 - June 2023",title:"Learning through backpropagation",description:"Studied data science fundamentals and completed specializations in machine learning and deep learning."}].map(((e,t)=>(0,c.jsx)("div",{ref:e=>n.current[t]=e,"data-index":t,children:(0,c.jsx)(d,{...e,isVisible:a[t]})},e.year)))})]})}),(0,c.jsx)("section",{className:"py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:(0,c.jsxs)("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[(0,c.jsx)("h2",{className:"text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200",children:"Let's Connect"}),(0,c.jsx)("p",{className:"text-xl mb-12 text-gray-600 dark:text-gray-400",children:"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."}),(0,c.jsxs)("div",{className:"mt-4 flex justify-center space-x-4",children:[(0,c.jsx)("a",{href:"https://github.com/ryankim17920",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition duration-300",children:(0,c.jsx)("i",{className:"fab fa-github text-2xl",children:(0,c.jsx)("img",{src:"github.png",alt:"github",width:30,height:30})})}),(0,c.jsx)("a",{href:"https://www.linkedin.com/in/ryan-kim-59a762319/",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition duration-300",children:(0,c.jsx)("i",{className:"fab fa-linkedin text-2xl",children:(0,c.jsx)("img",{src:"linkedin.png",alt:"linkedin",width:30,height:30})})}),(0,c.jsx)("a",{href:"https://www.kaggle.com/ryankim17920",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition duration-300",children:(0,c.jsx)("i",{className:"fab fa-kaggle text-2xl",children:(0,c.jsx)("img",{src:"kaggle.png",alt:"kaggle",width:30,height:30})})}),(0,c.jsx)("a",{href:"mailto:ryankim17920@gmail.com",className:"text-gray-400 hover:text-blue-600 transition duration-300",children:(0,c.jsx)("i",{className:"fas fa-envelope text-2xl",children:(0,c.jsx)(o.A,{width:30,height:30})})})]})]})})]})}}}]);
//# sourceMappingURL=541.b71cdc54.chunk.js.map