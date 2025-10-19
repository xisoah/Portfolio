export const CONTACT = {
  phone: "9820810772",
  email: "imsohail1305@gmail.com",
  linkedin: "https://www.linkedin.com/in/sohail97/",
};

export const SUMMARY = `Security Analyst with 3+ years in VAPT & Application Security. Experienced in SAST/DAST and building custom tools for payload generation and automation.`;

export const EXPERIENCE = [
  {
    role: "Security Analyst",
    company: "Net-Square Solutions Pvt. Ltd.",
    period: "Oct 2023 – Present",
    points: [
      "Led VAPT engagements across web and mobile; identified 150+ findings.",
      "Performed SAST for Kotak Mahindra Bank with remediation guidance.",
      "Built custom payload generators and automation scripts for assessments.",
    ],
  },
  {
    role: "Founder & Lead Developer",
    company: "Burette",
    period: "Oct 2020 – May 2022",
    points: [
      "Provisioned AWS-based game servers with Terraform and CI/CD.",
      "Scaled to 130 customers; generated $13,000 profit.",
    ],
  },
];

export const SKILLS = {
  Security: [
    "Red Teaming",
    "Active Directory (AD)",
    "Penetration Testing",
    "Burp Suite",
    "Metasploit",
    "Nessus",
    "Acunetix",
    "OWASP ZAP",
    "Nmap",
    "Wireshark",
    "Shodan",
    "Subfinder",
    "TryHackMe",
    "HackTheBox",
  ],
  "Networking & Infra": [
    "Networking",
    "AWS (EC2, S3, Route53, IAM, VPC, Spot Instances)",
    "Docker",
    "MySQL",
  ],
  "DevSecOps & Automation": [
    "Terraform",
    "Jenkins",
    "Git",
    "CI/CD",
    "Boto3",
    "PyQT5",
  ],
  "Programming & Platforms": [
    "Python",
    "PowerShell",
    "Bash",
    "Node.js",
    "Electron.js",
    "Flask",
    "Kali Linux",
    "RHEL",
  ],
  "Machine Learning & Data": ["Scikit-learn", "TensorFlow", "Pandas"],
  Tools: [
    "OCR (Tesseract)",
    "JADX",
    "Android Studio",
    "Checkmarx",
    "MobSF",
    "Postman",
  ],
};

export const PROJECTS = [
  {
    title: "psGen: Encoded Payload Generator",
    subtitle: "OOB Attack Payloads",
    tech: ["Node.js", "PowerShell", "DNS exfiltration"],
    description:
      "Generates encoded PowerShell payloads supporting DNS-based data exfiltration for OOB testing workflows.",
    link: "https://psGen.xarb.me",
    github: "https://github.com/xisoah/psGen",
    image: "/images/project-psgen.svg",
  },
  {
    title: "Fraudulent ICO Detection System",
    subtitle: "MSc Dissertation",
    tech: ["Python 3", "OCR (Tesseract)", "NLP", "Electron.js", "Eel"],
    description:
      "Analyzes ICO whitepapers using OCR and NLP to detect fraud signals; desktop UI built with Electron.js bridging Python via Eel.",
    link: "#",
    github: "#",
    image: "/images/project-ico.svg",
  },
  {
    title: "ML-Based Intrusion Detection System",
    subtitle: "CIC-IDS2017",
    tech: ["Random Forest", "SVM", "Neural Networks"],
    description:
      "AI IDS using multiple models on CIC-IDS2017 with ~93% accuracy; includes feature selection pipeline and anomaly detection proposal.",
    link: "#",
    github: "#",
    image: "/images/project-ids.svg",
  },
];

export const EDUCATION = [
  {
    degree: "MSc in IT Security",
    school: "Nottingham Trent University, UK",
    period: "2019–2020",
    details: [
      "Major Project: Commendation",
      "Cyber Security & Research Methods: Mid Commendation",
    ],
  },
];
