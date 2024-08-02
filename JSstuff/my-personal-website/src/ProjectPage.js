import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projects = [
  {
    year: "March 2023 - June 2023",
    title: "Learning through backpropagation",
    description: "Studied data science fundamentals and completed specializations in machine learning and deep learning.",
    details: `
      <h3>Course Overview:</h3>
      <p>Started with a comprehensive course in Data Analysis and Visualization with Python, hosted by Jovian, covering data cleaning, visualization, and introductory machine learning. Then progressed to complete a series of Coursera specializations on foundational and advanced concepts in machine learning and deep learning.</p>
      <h3>Key Learning Areas:</h3>
      <ul>
        <li>Data Science Fundamentals: Importation, Cleaning, EDA, Visualization</li>
        <li>Machine Learning: Supervised and Unsupervised Learning, Regression, Decision Trees</li>
        <li>Deep Learning: Neural Networks, CNN, RNN, NLP</li>
        <li>TensorFlow: Custom Models, Computer Vision Techniques, Generative Deep Learning</li>
      </ul>
      <h3>Projects:</h3>
      <p>Conducted a detailed analysis of global methane emissions for the Jovian course.</p>
      <h3>Certifications:</h3>
      <p>Earned certificates for Jovian course and Coursera specializations in Machine Learning, Deep Learning, and TensorFlow Advanced Techniques.</p>
    `
  },
  {
    year: "August 2023 - June 2024",
    title: "Internship timestep",
    description: "Built and deployed full-stack web applications for a small startup.",
    details: `
      <h3>Internship Overview:</h3>
      <p>Joined a small team of developers at a growing startup, contributing to the development of innovative web applications and services.</p>
      <h3>Key Responsibilities:</h3>
      <ul>
        <li>Used Flask and SQLAlchemy with MySQL to build a service website to pool money for group purchases.</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li>Front-End: Flask, Jinja, HTML/JS/CSS</li>
        <li>Back-End: Flask-Login, Flask-SQLAlchemy, Werkzeug, WTForms, SendGrid</li>
        <li>Version Control: Git, GitHub</li>
      </ul>
    `
  },
  {
    year: "January 2024 - Present",
    title: "Kaggling batch",
    description: "Participated in multiple Kaggle competitions, applying machine learning and computer vision techniques to real-world datasets.",
    details: `
      <h4><strong>First Kaggle Competition: <a href="https://www.kaggle.com/competitions/hms-harmful-brain-activity-classification", target="_blank">HMS - Harmful Brain Activity Classification</a> (Jan 2024 - April 2024):</strong></h4>
      <p>Classification of harmful brain activity in EEG recordings using deep learning models.</p>
      <h4>Key Techniques:</h4>
      <ul>
        <li>K-Fold Cross-Validation</li>
        <li>Transfer Learning with Pretrained Models</li>
        <li>Usage of GPUs</li>
        <li>Ensembling of Multiple Models</li>
      </ul>
      <h4>Results:</h4>
      <p>Top 20% ranking on the Kaggle leaderboard.</p>

      <h4><strong>Ongoing Kaggle Competition: <a href="https://www.kaggle.com/competitions/isic-2024-challenge", target="_blank">ISIC 2024 - Skin Cancer Detection with 3D-TBP</a> (June 2024 - Present):</strong></h4>
      <p>Developing computer vision models to detect skin malignancies.</p>
      <h4>Key Techniques:</h4>
      <ul>
        <li>Image Preprocessing and Augmentation</li>
        <li>Dealing with Extreme Class Imbalance</li>
        <li>Model Selection and Hyperparameter Tuning</li>
        <li>Transfer Learning with Pretrained Models</li>
        <li>Ensembling and Stacking Techniques</li>
        <li>Test Time Augmentation</li>
        <li>Monte Carlo Dropout</li>
      </ul>
      <h4>Current Progress:</h4>
      <p>Fine-tuning model hyperparameters and optimizing the ensemble strategy.</p>
    `
  },
  {
    year: "May 2024 - Present",
    title: "Epoch of research",
    description: "Authored a research paper and contributed to the open-source community through code implementation.",
    details: `
      <h3>Research Paper (May 2024 - July 2024):</h3>
      <p>Authored the paper <strong>"Analysis of Modern Computer Vision Models for Blood Cell Classification"</strong>.</p>
      <h4>Key Contributions:</h4>
      <ul>
        <li>Data Preprocessing/Balancing and Augmentation Techniques</li>
        <li>Model Selection and Hyperparameter Tuning</li>
        <li>Evaluation and Comparison of Models Through Various Metrics</li>
      </ul>
      <h4>Results:</h4>
      <p>Published on <a href="https://arxiv.org/abs/2407.00759v1", href="_blank">arXiv</a> , providing a valuable learning experience in the research process, including literature review, experimentation, and paper writing.
      The process of writing the paper deepened my understanding of modern computer vision techniques such as efficient bottlenecks, vision transformers, and other advanced architectures.
      Additionally, I was able to learn how to write sections of a research paper, including the abstract, introduction, methodology, results, and conclusion.
      For citations, I utilized Zotero to manage references and citations, and Microsoft Word and LaTeX for writing the paper.</p>
      <br>
      <p>Paper is also available on <a href="https://paperswithcode.com/paper/analysis-of-modern-computer-vision-models-for", target="_blank">PapersWithCode</a>, 
        <a href="https://www.researchgate.net/publication/381882721_Analysis_of_Modern_Computer_Vision_Models_for_Blood_Cell_Classification", target="_blank">ResearchGate</a>,
        and <a href="https://www.semanticscholar.org/paper/Analysis-of-Modern-Computer-Vision-Models-for-Blood-Kim-Urbana-Champaign/7f8631836f72f45ab31601391a5808e4babc629d" target="_blank">Semantic Scholar</a>.</p>
      <br>
      <h3>Open-Source Research Implementation (July 2024):</h3>
      <p>Recreated and published the code from a research paper, <a href="https://arxiv.org/abs/1806.01531" target="_blank">Deep Mixture of Experts via Shallow Embedding</a>, that lacked a public implementation.</p>
      <h4>Paper Description:</h4>
      <p>A highly cited paper that showed the application of Mixture of Experts (MoE) for convolution layer through a channel-based gating mechanism.</p>
      <h4>Implementation:</h4>
      <p>Fully recreated the model architecture and training process in PyTorch, and published the code on <a href="https://github.com/RyanKim17920/DeepMoE" target="_blank">GitHub</a>.</p>
    `
  }
];

const ProjectPage = ({ darkMode }) => {
  const { year } = useParams();
  const project = projects.find(p => p.year === year);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={`project-page ${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-900 min-h-screen`}>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 mb-4 inline-block">← Back to Timeline</Link>
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title} ({year})</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
        <div className="prose dark:prose-invert lg:prose-xl" dangerouslySetInnerHTML={{ __html: project.details }}></div>
      </div>
    </div>
  );
};

export default ProjectPage;