// ─────────────────────────────────────────────────────────────
// All of the site's text lives in this file.
// Replace anything in [square brackets] with your own details.
// Delete an item from a list to remove it from the page.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Jin (Ken) Bai",
  // Portrait image in the public/ folder (a square image works best).
  // Leave it empty ("") to show the initials tile instead.
  portrait: "/portrait-pixel.png",
  // Shown in the element tile when there is no portrait. Two letters reads best.
  symbol: "Jb",
  role: "Cloud engineer",
  location: "", // shown in the status panel instead
  // The first thing visitors read: a greeting and one short line.
  greeting: "Hi, I'm Jin (Ken) Bai.",
  tagline: "I build cloud infrastructure, keep it secure, and engineer the data pipelines that run on it.",
  // Facts shown on the element tile. Keep each value short.
  tileFacts: [
    { label: "MS", value: "Cybersecurity" },
    { label: "BS", value: "Chemistry" },
  ],
  // Shown in the sidebar's status panel. Keep values short.
  status: [
    { label: "Status", value: "Open to work", live: true },
    { label: "Focus", value: "Cloud & cybersecurity" },
    { label: "Building", value: "CVE risk tracker" },
    { label: "Location", value: "Currently Relocating" },
  ],
  email: "jin.ken.bai@gmail.com",
  resumeUrl: "/resume.pdf", // put resume.pdf in the public/ folder
  links: [
    { label: "GitHub", url: "https://github.com/ElsieElsevier" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jin-bai/" },
  ],
};

export const about = [
  "Most recently, I was a cloud engineer at FinLocker, a SOC 2–audited fintech, where I worked across Azure infrastructure, security operations and data engineering. I also worked on AI for cybersecurity at Kennesaw State and UMSL, building AI agents used in a live competition by students from 15 universities.",
  "I hold an M.S. in Cybersecurity from the University of Missouri–St. Louis and a B.S. in Chemistry from the University of Missouri. I'm looking for my next role in cloud, security or data engineering.",
];

// The project you most want recruiters to see. Shown large at the top.
export const featured = {
  title: "CVE Exploit Risk Tracker",
  status: "In progress",
  summary:
    "A serverless pipeline on AWS that joins CISA's Known Exploited Vulnerabilities catalog, NVD and EPSS scores every day, and publishes a dashboard of which vulnerabilities are being exploited and which are likely to be next.",
  stack: ["Python", "AWS Lambda", "S3", "EventBridge", "Parquet", "Terraform"],
  links: [
    // { label: "Live dashboard", url: "/dashboard" },
    // Add once the repo exists, so visitors don't hit a missing page:
    // { label: "Source code", url: "https://github.com/ElsieElsevier/vuln-intel-pipeline" },
  ],
};

export const projects = [
  {
    title: "Event Ingestion and Medallion ETL on Azure",
    kind: "Professional work, FinLocker",
    year: "2025 to 2026",
    summary:
      "Data engineering on a fintech's Azure data platform. I built a metadata-driven Synapse pipeline that ingests Braze customer-engagement events (Apache Avro) into event-specific SQL tables, upserting by event ID and archiving or quarantining each file depending on the result. I also wrote PySpark notebooks that turn raw Parquet payloads into Silver and Gold tables using staging tables, SQL MERGE and watermark-based incremental loads. When Synapse limitations stalled the work, I rebuilt it in Microsoft Fabric with Bronze, Silver and Gold layers, where it went into production alongside other Fabric pipelines I built.",
    stack: ["Azure Synapse", "PySpark", "SQL MERGE", "Apache Avro", "Parquet", "Microsoft Fabric", "Medallion architecture"],
    links: [],
  },
  {
    title: "SMS Spam Classification: TF-IDF vs. BERT",
    kind: "Cybersecurity capstone",
    year: "2025",
    summary:
      "A four-person team project to catch spam text messages while rarely flagging legitimate ones. We compared TF-IDF baselines with classifiers trained on fixed BERT embeddings, using a deduplicated dataset and a stratified train, validation and test split. I led business understanding, data understanding and data preparation, and built the BERT model: a pretrained BERT encoder turns each message into a vector, and a small neural network classifies it. Chosen on validation F1, it reached 98.45% accuracy on 774 unique test messages, with 93.75% precision and recall on spam, and wrongly flagged only 6 of 678 legitimate messages.",
    stack: ["Python", "TensorFlow", "Keras", "BERT", "TF-IDF", "scikit-learn", "CRISP-DM"],
    links: [
      { label: "Source code", url: "https://github.com/ElsieElsevier/llm-spam-text-biclassification" },
    ],
  },
  {
    title: "Arrangely: Wedding Seating Planner",
    kind: "Hackathon, 2nd place",
    year: "2024, rebuilt 2026",
    summary:
      "Our team built Arrangely in 36 hours at e{hack}2024, hosted by SIUE at the T-REX technology center in St. Louis, and placed 2nd; I wrote its Python machine learning core. In 2026 I rebuilt it as a single Flask app that runs entirely on your computer. Hosts describe guests in plain language, a local sentence-embedding model turns each description into a vector, and spectral clustering groups similar guests. It then fits the groups to tables, keeping couples together, honoring keep-apart requests and seat limits, and evening out table sizes, with the same input always giving the same plan. It comes with an API and automated tests.",
    stack: ["Python", "Flask", "Sentence embeddings", "Spectral clustering", "scikit-learn", "pytest"],
    links: [
      { label: "Source code", url: "https://github.com/ElsieElsevier/arrange.ly-wedding-seating-optimizer" },
    ],
  },
  {
    title: "Income Classification with PyTorch",
    kind: "Machine learning",
    year: "2025",
    summary:
      "A PyTorch neural network that predicts whether a person earns more than $50K a year from census data, trained on 32,561 rows and tested on 16,281. I built it as my first machine learning project, then came back to fix its bugs, including an early-stopping copy bug that kept the wrong weights, and to test which improvements actually helped. Averaged over 5 seeds, it reaches 86.16% accuracy and 0.916 ROC-AUC, tying logistic regression; gradient boosting scores highest at 87.24%. A feature study found that binning numeric features gave the biggest gain.",
    stack: ["Python", "PyTorch", "scikit-learn", "pandas", "Jupyter"],
    links: [
      { label: "Source code", url: "https://github.com/ElsieElsevier/pytorch-income-classification" },
      {
        label: "Open in Colab",
        url: "https://colab.research.google.com/github/ElsieElsevier/pytorch-income-classification/blob/main/IncomeBracketStoppage.ipynb",
      },
    ],
  },
];

export const publications = [
  {
    title:
      "Neural Thurstone Model: Leveraging Latent Spaces for Collective Intelligence in Ranking Predictions",
    venue: "Proceedings of the Annual Meeting of the Cognitive Science Society, Vol. 47, 2025",
    authors: "Necdet Gurkan, Jin Bai",
    summary:
      "We combined a classic statistical model for merging many people's rankings with neural networks and pretrained AI embeddings. The new model ranked items more accurately when little ranking data was available, could rank items nobody had ranked before, and on some tasks improved further using reasoning generated by large language models.",
    url: "https://escholarship.org/uc/item/0wh63804",
  },
];

// Newest first.
export const experience = [
  {
    role: "Cloud Engineer",
    org: "FinLocker (Technical Operations)",
    dates: "June 2025 to April 2026",
    points: [
      "Built Terraform infrastructure as code to replicate the SaaS platform into a new Azure tenant for a perpetual-license client offering, single-handedly redeploying the full dev infrastructure in about a month with Microsoft Copilot and the Microsoft MCP server.",
      "Migrated live pipelines (~20K records a day) from Azure Synapse to Microsoft Fabric as the sole architect, configuring secure endpoints and rewriting Python staging writes as set-based SQL with staggered schedules, which halved Fabric capacity (F16 to F8) and saved ~$1,050 a month.",
      "Hardened the platform with Private Endpoints on every connected resource, managed identities for new services, and secrets split from a few shared Key Vaults into 100+ scoped vaults.",
      "Released to stage and prod (~2 a month) as 1 of 2 authorized engineers, opening new pods to traffic through Kubernetes ingress and egress YAML and the WAF.",
      "Upgraded dev and stage AKS clusters (~100 nodes each) in after-hours change windows with no notable downtime, and migrated 50+ VMs from retired agents to Azure Monitor Agent.",
      "Contained a phishing compromise of 3 accounts, including the CEO's, within 1 hour with no data exposure, and investigated a Defender data-exfiltration alert through to a formal report.",
      "Supported 40 to 50 employees across Entra ID, Active Directory, Microsoft 365 and Barracuda VPN, imaging ~10 laptops and 2 Mac minis and handling onboarding and offboarding.",
      "Enforced Intune compliance for ~50 devices and wrote remediation scripts that silently install and update software, rolling out Claude CLI to non-developers.",
      "Automated a daily executive report with Logic Apps and SQL, replacing the CTO's 15-minute manual script.",
      "Supported a successful SOC 2 audit, and drove an AI vendor project that documented 100+ repositories for the first time.",
    ],
  },
  {
    role: "AI Security Engineer (Contractor)",
    org: "Kennesaw State University",
    dates: "January 2026 to April 2026",
    points: [
      "Deployed the ADAM blue-team AI advisor (self-hosted Mistral LLM, Pinecone RAG, Docker containers on AWS EKS) at CCDC, coaching students from 15 universities against professional red teamers; teams held out 3 to 7.8 hours of an 8-hour event.",
    ],
  },
  {
    role: "Journeyman Operations Research Analyst (AI Security Engineering)",
    org: "University of Missouri–St. Louis",
    dates: "May 2025 to December 2025",
    points: [
      "Wrote the blue-team agent's RAG pipeline in Python: split 5 security standards (CIS Controls, NIST and Ubuntu hardening guides; ~255K words) into 730 overlapping chunks, embedded them and indexed them in Pinecone.",
      "Owned LLM selection and tool-use architecture for the red- and blue-team agents (Nmap, Metasploit, Hydra), and built guardrails that block hallucinated destructive commands like rm -rf, plus an editor to revise commands before they run.",
      "Demoed the platform to Booz Allen Hamilton and DoD stakeholders, securing 4 more months of funding.",
    ],
  },
  {
    role: "Lead Pharmacy Technician",
    org: "CVS Pharmacy",
    dates: "December 2019 to December 2021",
    points: [
      "Supported patients and pharmacy staff as lead technician, including vaccinating elderly residents at nursing homes.",
    ],
  },
];

export const education = [
  {
    degree: "MS, Cybersecurity (Information Systems & Technology)",
    school: "University of Missouri–St. Louis",
    year: "May 2025",
  },
  {
    degree: "BS, Chemistry",
    school: "University of Missouri",
    year: "December 2018",
  },
  {
    degree: "Full-Stack Development Bootcamp",
    school: "LaunchCode",
    year: "Expected April 2027",
  },
];

export const certifications = [
  { name: "CompTIA Security+", issuer: "CompTIA", year: "2026 to 2029" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024 to 2027" },
];

export const skills = [
  {
    group: "Cloud",
    items: ["Azure", "AKS", "Azure VMs", "Front Door", "Key Vault", "Azure Monitor", "Log Analytics", "App Insights", "Logic Apps", "AWS", "EKS"],
  },
  {
    group: "Data",
    items: [
      "Azure Synapse",
      "Microsoft Fabric",
      "PySpark",
      "SQL MERGE",
      "Parquet",
      "Apache Avro",
      "Incremental loads",
    ],
  },
  {
    group: "Infrastructure",
    items: ["Terraform", "Kubernetes", "Docker", "Azure DevOps", "Git", "CI/CD", "Change management", "VMware", "VirtualBox"],
  },
  {
    group: "Security",
    items: [
      "Incident response",
      "Defender for Endpoint & Cloud",
      "Entra ID",
      "Conditional Access",
      "Managed identities",
      "RBAC",
      "VNets",
      "NSGs",
      "Private Endpoints",
      "Barracuda WAF & Firewall",
      "TLS/PKI",
      "DNS",
      "SOC 2",
      "Nmap",
      "Metasploit",
    ],
  },
  {
    group: "IT operations",
    items: ["Intune", "Microsoft 365", "Active Directory", "WSUS", "Windows", "macOS", "Linux", "Barracuda VPN", "Jira"],
  },
  { group: "Languages", items: ["Python", "PowerShell", "Bash", "SQL", "KQL", "HCL", "JavaScript", "HTML/CSS"] },
  {
    group: "AI & ML",
    items: ["Microsoft Copilot", "MCP", "LLMs", "RAG", "Pinecone", "PyTorch", "TensorFlow", "BERT", "Bayesian modeling"],
  },
];

// Tools you've used but wouldn't call hands-on production experience.
// Shown as a single plain line under the skill chips.
export const familiar = ["Splunk", "Zscaler", "Bicep (editing existing templates)"];