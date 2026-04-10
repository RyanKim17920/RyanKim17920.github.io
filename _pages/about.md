---
layout: about
title: about
permalink: /
subtitle: Incoming CS @ UIUC — building ML systems and full-stack tools.

profile:
  align: right
  more_info: >
    <p>Palatine, IL</p>
    <p><a href="mailto:ryankim17920@gmail.com">ryankim17920@gmail.com</a></p>

selected_papers: false
social: false

announcements:
  enabled: false

latest_posts:
  enabled: false
---

I'm a senior at William Fremd High School, heading to the University of Illinois Urbana-Champaign in August 2026 to study Computer Science. I build ML systems from scratch, systems-level software, and open-source tools. Currently researching clinical ML at Memorial Sloan Kettering and Weill Cornell Medicine, and non-coding DNA prognostic models as a Simons Fellow at Stony Brook.

<div class="clearfix"></div>

<h2 class="section-heading">Experience</h2>

<div class="experience-list">

  <div class="experience-item">
    <div class="experience-header">
      <div class="experience-title"><strong>Simons Summer Research Fellow</strong> · Yurovsky Lab, Stony Brook University</div>
      <div class="experience-date">Jun 2025 — Present</div>
    </div>
    <p>DNABERT-based prognostic model for glioblastoma survival via Cox regression on non-coding regulatory DNA mutations; identified age-related survival signals and racial disparities encoded in mutational scores.</p>
  </div>

  <div class="experience-item">
    <div class="experience-header">
      <div class="experience-title"><strong>Lead Technical Developer</strong> · MathLinks.org</div>
      <div class="experience-date">Nov 2025 — Present</div>
    </div>
    <p>Raised $20k in funding (Hudson River Trading, Innovate901 First Place). Built a full-stack math competition platform serving 150k+ members across 11 partner organizations.</p>
  </div>

  <div class="experience-item">
    <div class="experience-header">
      <div class="experience-title"><strong>Research Intern</strong> · Advanced Computing &amp; Oncology Lab, Memorial Sloan Kettering</div>
      <div class="experience-date">Dec 2024 — Jan 2026</div>
    </div>
    <p>Built a DSPy-optimized LLM pipeline to extract disease progression events from CT/PET/clinical reports. Co-authored abstract on referral event analysis accepted at ACRO 2026.</p>
  </div>

  <div class="experience-item">
    <div class="experience-header">
      <div class="experience-title"><strong>Research Intern</strong> · AI in Medicine &amp; Computational Biology Lab, Weill Cornell Medicine</div>
      <div class="experience-date">Oct 2024 — Present</div>
    </div>
    <p>Investigated systematic bias in AI tumor purity estimators across TCGA and internal cohorts; demonstrated that scaling data volume and model size fails to resolve generalization gaps across cohorts.</p>
  </div>

  <div class="experience-item">
    <div class="experience-header">
      <div class="experience-title"><strong>Founder</strong> · <a href="https://papers2code.org">Papers2Code.org</a></div>
      <div class="experience-date">Jan 2024 — Present</div>
    </div>
    <p>Founded platform indexing 300k+ ML/AI papers lacking public code implementations; built pipeline to map papers to GitHub repositories.</p>
  </div>

  <div class="experience-item">
    <div class="experience-header">
      <div class="experience-title"><strong>Full-Stack Developer</strong> · Cyberlinc, Inc.</div>
      <div class="experience-date">Aug 2023 — Jul 2024</div>
    </div>
    <p>Engineered a full-stack crowdfunding platform (Flask / SQLAlchemy) with secure payment integration.</p>
  </div>

</div>

<h2 class="section-heading">Selected Projects</h2>

<div class="projects-grid">

  <a class="project-card" href="https://github.com/RyanKim17920" target="_blank" rel="noopener">
    <div class="project-card-header">
      <h3>nanoDINOv3</h3>
      <span class="project-date">2026</span>
    </div>
    <p>Complete DINOv3 self-supervised ViT training system implemented in dependency-free pure Python — student-teacher EMA, multi-crop augmentation, and centering mechanism.</p>
    <div class="project-tags">Python · Computer Vision · Self-Supervised</div>
  </a>

  <a class="project-card" href="https://papers2code.org" target="_blank" rel="noopener">
    <div class="project-card-header">
      <h3>Papers2Code</h3>
      <span class="project-date">2024 — Present</span>
    </div>
    <p>Platform indexing 300k+ ML/AI papers without public code. Built scraping and mapping pipeline connecting papers to GitHub repositories.</p>
    <div class="project-tags">Python · Full-Stack · Data Pipeline</div>
  </a>

  <a class="project-card" href="https://github.com/RyanKim17920/Deep-Mixture-of-Experts-via-Shallow-Embedding" target="_blank" rel="noopener">
    <div class="project-card-header">
      <h3>Deep MoE Reproduction</h3>
      <span class="project-date">2024</span>
    </div>
    <p>Open-source reproduction of "Deep Mixture of Experts via Shallow Embedding" — a paper that had no public implementation. Full architecture and training loop.</p>
    <div class="project-tags">PyTorch · Computer Vision · Paper Reproduction</div>
  </a>

  <a class="project-card" href="https://mathlinks.org" target="_blank" rel="noopener">
    <div class="project-card-header">
      <h3>MathLinks.org</h3>
      <span class="project-date">2025 — Present</span>
    </div>
    <p>Full-stack math competition platform for 150k+ members across 11 partner organizations. Raised $20k (Hudson River Trading, Innovate901 1st Place).</p>
    <div class="project-tags">Full-Stack · Web · Platform</div>
  </a>

</div>

<h2 class="section-heading">Publications</h2>

<div class="publication-item">
  <div class="publication-title"><strong>From Text to Treatment: Automated Identification of Airway Events and Referral Patterns in Lung Cancer Imaging Using Locally Deployed CPU-Only LLMs</strong></div>
  <div class="publication-meta">Amoako-Boadu, Kim A., <strong>Kim R.</strong>, et al. · <em>ACRO 2026 Annual Meeting</em> (Abstract) · MSK &amp; Weill Cornell</div>
  <p>CPU-only LLM pipeline (LLaMA3.1-8B, Qwen3-4B with DSPy / MIPROv2) to classify lung cancer CT reports by specialty referral category; analyzed 370 clinically annotated reports at MSK.</p>
</div>

<h2 class="section-heading">Skills</h2>

<div class="skills-block">
  <p><strong>Languages</strong> &nbsp;·&nbsp; Python, Java, C/C++, SQL (PostgreSQL), JavaScript, HTML/CSS</p>
  <p><strong>ML / Data</strong> &nbsp;·&nbsp; PyTorch, TensorFlow, Polars, Pandas, NumPy, Scikit-learn, Matplotlib, Plotly, R</p>
  <p><strong>Web / Backend</strong> &nbsp;·&nbsp; React, Next.js, Express.js, Flask, FastAPI, MongoDB, SQLAlchemy</p>
  <p><strong>Tools</strong> &nbsp;·&nbsp; Git, Linux, Docker, VS Code</p>
</div>

<h2 class="section-heading">Elsewhere</h2>

<div class="contact-row">
  <a href="https://github.com/RyanKim17920" target="_blank" rel="noopener">GitHub</a> &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/ryankim17920/" target="_blank" rel="noopener">LinkedIn</a> &nbsp;·&nbsp;
  <a href="mailto:ryankim17920@gmail.com">Email</a> &nbsp;·&nbsp;
  <a href="/assets/pdf/ryan_kim_cv.pdf" target="_blank" rel="noopener">CV (PDF)</a>
</div>
