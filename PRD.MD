Sohail Ahmed Cybersecurity Portfolio PRD
1. Document Information

Product Name: Sohail Ahmed Cybersecurity Portfolio
Purpose: This PRD outlines the requirements for building a personal portfolio website to showcase Sohail Ahmed's expertise in cybersecurity, including his professional experience, skills, projects, and education. The site will serve as a digital resume and professional showcase to attract potential employers, clients, or collaborators in the cybersecurity field.
Scope: A single-page or multi-page static/dynamic website focused on content presentation. No backend required unless specified for future expansions (e.g., contact form submissions). Optimized for quick loading and mobile responsiveness.

2. Business Objectives

Primary Goal: Create a professional online presence that highlights Sohail's 3+ years of hands-on experience in Vulnerability Assessment & Penetration Testing (VAPT), Static Application Security Testing (SAST), Dynamic Application Security Testing (DAST), and related cybersecurity domains.
Key Outcomes:

Increase visibility for job opportunities in cybersecurity roles (e.g., Security Analyst, Penetration Tester).
Demonstrate technical skills through detailed project descriptions and skill listings.
Facilitate easy contact via email, LinkedIn, or phone.
Achieve high user engagement with clean, intuitive navigation and visually appealing design themed around cybersecurity (e.g., dark mode, subtle tech motifs like code snippets or lock icons).


Success Metrics (Post-Launch):

Page load time < 2 seconds.
Mobile responsiveness (tested on devices via browser dev tools).
SEO optimization for searches like "Sohail Ahmed cybersecurity portfolio" or "VAPT expert portfolio".
Analytics integration (e.g., Google Analytics) to track visits (optional, implement if time allows).



3. Target Audience

Primary Users:

Recruiters and hiring managers in cybersecurity firms (e.g., Net-Square Solutions, banks like Kotak Mahindra).
Potential clients for freelance VAPT or security consulting.
Peers in the cybersecurity community (e.g., via HackTheBox, TryHackMe).


User Personas:

Persona 1: Tech Recruiter (Age 30-45, busy professional): Needs quick scans of experience, skills, and projects. Values quantifiable achievements (e.g., "identified 150+ findings").
Persona 2: Cybersecurity Enthusiast (Age 25-35, developer/hacker): Interested in deep dives into projects like psGen or ML-based IDS, with links to tools/GitHub if available.


User Needs:

Easy navigation to sections (e.g., Experience, Projects).
Downloadable resume PDF.
Professional yet approachable tone, avoiding jargon overload.



4. Functional Requirements
4.1 High-Level Features

Navigation: Fixed top navbar with links to sections: Home/About, Experience, Skills, Projects, Education, Contact.
Home/About Section: Hero banner with profile photo (placeholder if none provided), name, tagline ("Security Analyst with 3+ years in VAPT & Application Security"), and brief summary from resume. Include contact details (phone: 9820810772, email: imsohail1305@gmail.com, LinkedIn: www.linkedin.com/in/sohail97/).
Experience Section: Timeline or card-based layout for roles:

Security Analyst at Net-Square Solutions Pvt. Ltd. (Oct 2023 – Present): Bullet points on VAPT engagements, SAST for Kotak Mahindra Bank, custom payload generators.
Founder & Lead Developer at Burette (Oct 2020 – May 2022): AWS-based game-server provisioning, scaling to 130 customers, $13,000 profit.


Skills Section: Categorized lists or icons/badges:

Security: Red Teaming, Active Directory (AD), Penetration Testing, etc. (tools: Burp Suite, Metasploit, Nessus, Acunetix, OWASP ZAP, Nmap, Wireshark, Shodan, Subfinder, TryHackMe, HackTheBox).
Networking & Infrastructure: Networking, AWS (EC2, S3, Route53, IAM, VPC, Spot Instances), Server Hosting, Docker, MySQL.
DevSecOps & Automation: Terraform, Jenkins, Git, CI/CD, Boto3, PyQT5.
Programming & Platforms: Python, PowerShell, Bash, Node.js, Electron.js, Flask, Kali Linux, RHEL.
Machine Learning & Data Analysis: Scikit-learn, TensorFlow, Pandas.
Tools & Utilities: OCR (Tesseract), JADX, Android Studio, Checkmarx, MobSF, Postman.
Use progress bars, icons (e.g., from Font Awesome), or simple bullet lists for visual appeal.


Projects Section: Detailed cards for key projects with descriptions, technologies used, and outcomes:

Fraudulent ICO Detection System (MSc Dissertation): Python 3 tool using OCR (Tesseract) and NLP for whitepaper analysis; Electron.js UI via Python Eel.
psGen: Encoded Payload Generator for OOB Attacks: Node.js-based tool generating PowerShell payloads for data exfiltration over DNS.
Machine Learning-Based Intrusion Detection System (IDS): AI-powered IDS using Random Forest, SVM, Neural Networks on CIC-IDS2017 dataset (93% accuracy); feature selection pipeline and anomaly detection proposal.
Include screenshots/mockups if available; add GitHub links (placeholders).


Education Section:

MSc in IT Security, Nottingham Trent University, UK (2019–2020).
Major Project: Commendation; Cyber Security & Research Methods: Mid Commendation.


Contact Section: Form for inquiries (name, email, message) with email submission (use Formspree or similar free service if backend needed; otherwise, mailto link). Social links (LinkedIn, GitHub placeholder).
Footer: Copyright, resume download link (upload the provided PDF), back-to-top button.
Additional Features:

Dark/Light mode toggle (cybersecurity theme favors dark).
Search bar for skills/projects (if using JS framework).
Animations: Subtle fade-ins on scroll (using AOS library or CSS).



4.2 User Stories

As a recruiter, I want to view experience in a timeline so I can quickly see career progression.
As a peer, I want expandable project details so I can learn about tools like Burp Suite or TensorFlow without cluttering the page.
As a visitor, I want a downloadable resume so I can save it offline.
As Sohail, I want easy content updates (e.g., via Markdown or simple CMS like Netlify CMS if static site).

5. Non-Functional Requirements

Performance: Optimize images, minify CSS/JS; aim for Lighthouse score >90.
Accessibility: WCAG 2.1 AA compliance (alt text for images, keyboard navigation, color contrast).
Responsiveness: Mobile-first design (Bootstrap or Tailwind CSS); breakpoints for desktop, tablet, mobile.
Security: HTTPS enforcement; no user data storage if contact form used; sanitize any inputs.
SEO: Meta tags (title: "Sohail Ahmed | Cybersecurity Portfolio", description from profile); Open Graph for social sharing; sitemap.xml.
Browser Compatibility: Latest Chrome, Firefox, Safari, Edge; polyfills if needed.
Localization: English only; RTL not required.
Scalability: Static site for now; easy to add pages later.

6. Design Requirements

Visual Style:

Color Scheme: Dark background (#1a1a1a), accents in blue (#007BFF) for links/buttons, green (#28a745) for success metrics (e.g., "93% accuracy").
Typography: Sans-serif fonts (e.g., Roboto or Inter); headings bold, body 16px.
Layout: Single-page application (SPA) with smooth scrolling sections, or multi-page for simplicity.
Icons: Use cybersecurity-themed (e.g., shield for security skills, code for projects) from Heroicons or Font Awesome.
Images: Profile photo (upload placeholder); project screenshots (generate or use stock if needed).


Wireframes (High-Level Description for Cursor IDE):

Header: Logo (name in bold), nav menu.
Hero: Full-width with photo, summary, CTA buttons (View Projects, Download Resume).
Sections: Grid or flexbox for cards; 2-3 columns on desktop, 1 on mobile.
Footer: Centered links.


UI/UX Principles: Minimalist, professional; avoid flashy elements to maintain trust in cybersecurity context.

7. Technical Requirements

Recommended Stack (Flexible for Cursor IDE generation):

Frontend: HTML5, CSS3 (with Tailwind CSS or Bootstrap for rapid styling), Vanilla JS or React.js for interactivity.
Build Tools: Vite or Parcel for bundling; no complex setup.
Hosting: Netlify or Vercel for free deployment (drag-and-drop static site).
Version Control: Git repository structure (src/, assets/, components/).
Libraries:

UI: Tailwind CSS, AOS (animations).
Forms: EmailJS or Formspree (no backend).
Icons: Font Awesome.


File Structure Example:
text/
├── index.html (or App.js if React)
├── styles.css (or tailwind.config.js)
├── assets/
│   ├── images/ (profile.jpg, resume.pdf, project-screenshots/)
│   └── icons/
├── components/ (if React: Experience.jsx, Projects.jsx)
└── scripts.js



Development Guidelines:

Use semantic HTML (e.g., ,  for projects).
Ensure code is modular and commented.
Integrate resume PDF download: .
Test: Unit tests for JS if applicable; manual cross-browser testing.



8. Content Specifications

All content pulled from provided resume PDF:

Profile: Use exact summary text.
Experience: Bullet points as-is, with quantifiable metrics bolded (e.g., 150+ findings, 80% remediation).
Skills: Categorize as in resume; link tools to official docs if relevant (e.g., Burp Suite to portswigger.net).
Projects: Expand descriptions slightly for engagement but stay factual.
Education: Include commendations.


Placeholders: Add GitHub repo links for projects (e.g., "View on GitHub"); profile photo URL.
Tone: Professional, confident, technical without overwhelming.

9. Risks and Assumptions

Risks: Content updates may require redeployment; ensure mobile testing.
Assumptions: User (Sohail) will provide any missing assets (e.g., photos, GitHub links). No e-commerce or user accounts needed. Places where images or assets are not available will have a placeholder.