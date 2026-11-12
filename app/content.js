// ─────────────────────────────────────────────────────────────
// All of the site's text lives in this file.
// Edit a value, commit and push: the site rebuilds and deploys itself.
// Colors in this file are keycap names: "blue", "green", "red",
// "yellow", "purple" or "gray" (defined in app/styles/tokens.css).
// ─────────────────────────────────────────────────────────────

export const site = {
  url: "https://jinbai.dev",
  name: "Jin (Ken) Bai",
  description:
    "Cloud engineer portfolio: Azure and AWS infrastructure, security, data pipelines and AI research.",
};

export const profile = {
  name: "Jin (Ken) Bai",
  portrait: "/portrait-pixel.png",
  role: "Cloud Engineer",
  location: "Currently relocating",
  openTo: "Open to work",
  summary:
    "I build cloud infrastructure, keep it secure, and engineer the data pipelines that run on it. M.S. in Cybersecurity, B.S. in Chemistry.",
  email: "jin.ken.bai@gmail.com",
  resumeUrl: "/resume.pdf",
  links: [
    { label: "GitHub", url: "https://github.com/ElsieElsevier" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jin-bai/" },
  ],
  // Quick-glance stats under the portrait. Each one is a link:
  // `to` is a page on this site, `url` is another website,
  // and `newTab: true` opens it in a new browser tab.
  stats: [
    { value: "1 yr", label: "Cloud engineering", detail: "Production Azure", color: "blue", to: "/experience#finlocker" },
    { value: "2", label: "Certifications", detail: "Security+ · AWS", color: "green", to: "/certifications", newTab: true },
    { value: "2nd", label: "Hackathon place", detail: "e{hack} 2025", color: "yellow", url: "https://devpost.com/software/arrange-ly", newTab: true },
    { value: "1", label: "Published paper", detail: "CogSci 2025", color: "red", to: "/research" },
  ],
};

// The numbered sections, in order. `color` is the keycap color of each label.
export const sections = [
  { id: "experience", number: "02", title: "Experience", color: "blue" },
  { id: "projects", number: "03", title: "Projects", color: "red" },
  { id: "lab", number: "04", title: "Project Lab", color: "yellow" },
  { id: "skills", number: "05", title: "Skills", color: "purple" },
  { id: "certifications", number: "06", title: "Certifications", color: "green" },
  { id: "research", number: "07", title: "Research", color: "yellow" },
  { id: "education", number: "08", title: "Education", color: "gray" },
];

// ── 02 Experience ────────────────────────────────────────────
// Newest first. The hub shows the first `hubCount` roles.
// Wrap a phrase in **double asterisks** to bold it.
export const experience = {
  hubCount: 3,
  intro: {
    title: "Cloud, security and AI research",
    text: "Production Azure for a SOC 2–audited fintech, plus AI security research that put an LLM advisor in front of students from 15 universities.",
  },
  roles: [
    {
      id: "finlocker",
      title: "Cloud Engineer",
      org: "FinLocker",
      place: "Technical Operations · St. Louis, MO",
      dates: "Jun 2025 – Apr 2026",
      shortDates: "2025 – 2026",
      groups: [
        {
          title: "Infrastructure & DevOps",
          color: "blue",
          points: [
            "Built Terraform infrastructure as code to replicate the SaaS platform into a new Azure tenant for a perpetual-license client offering, single-handedly redeploying the full dev infrastructure in **about a month** with Microsoft Copilot and the Microsoft MCP server.",
            "Released to stage and prod (~2 a month) as **1 of 2 authorized engineers**, opening new pods to traffic through Kubernetes ingress and egress YAML and the WAF.",
            "Upgraded dev and stage AKS clusters (**~100 nodes each**) in after-hours change windows with no notable downtime, and migrated **50+ VMs** from retired agents to Azure Monitor Agent.",
          ],
        },
        {
          title: "Data",
          color: "yellow",
          points: [
            "Migrated live pipelines (~20K records a day) from Azure Synapse to Microsoft Fabric as the sole architect, rewriting Python staging writes as set-based SQL with staggered schedules, which halved Fabric capacity (F16 to F8) and saved **~$1,050 a month**.",
            "Automated a daily executive report with Logic Apps and SQL, replacing the CTO's 15-minute manual script.",
          ],
        },
        {
          title: "Security",
          color: "red",
          points: [
            "Hardened the platform with Private Endpoints on every connected resource, managed identities for new services, and secrets split from a few shared Key Vaults into **100+ scoped vaults**.",
            "Contained a phishing compromise of 3 accounts, including the CEO's, **within 1 hour** with no data exposure, and investigated a Defender data-exfiltration alert through to a formal report.",
            "Supported a **successful SOC 2 audit**, and drove an AI vendor project that documented **100+ repositories** for the first time.",
          ],
        },
        {
          title: "IT operations",
          color: "green",
          points: [
            "Supported **40 to 50 employees** across Entra ID, Active Directory, Microsoft 365 and Barracuda VPN, imaging ~10 laptops and 2 Mac minis and handling onboarding and offboarding.",
            "Enforced Intune compliance for **~50 devices** and wrote remediation scripts that silently install and update software, rolling out Claude CLI to non-developers.",
          ],
        },
      ],
      tools: ["Azure", "AKS", "Terraform", "Microsoft Fabric", "Azure DevOps", "Entra ID", "Intune", "Defender", "Logic Apps", "Copilot & MCP"],
    },
    {
      id: "kennesaw",
      title: "AI Security Engineer (Contractor)",
      shortTitle: "AI Security Engineer",
      badge: { label: "Contract", color: "blue" },
      org: "Kennesaw State University",
      shortOrg: "Kennesaw State",
      place: "Remote",
      dates: "Jan 2026 – Apr 2026",
      shortDates: "2026",
      points: [
        "Deployed the ADAM blue-team AI advisor (self-hosted Mistral LLM, Pinecone RAG, Docker containers on AWS EKS) at CCDC, coaching students from **15 universities** against professional red teamers; teams held out **3 to 7.8 hours** of an 8-hour event.",
      ],
      tools: ["Mistral LLM", "Pinecone", "RAG", "Docker", "AWS EKS"],
    },
    {
      id: "umsl",
      title: "Journeyman Operations Research Analyst",
      shortTitle: "Operations Research Analyst",
      org: "University of Missouri–St. Louis",
      shortOrg: "UMSL",
      place: "AI Security Engineering · St. Louis, MO",
      dates: "May 2025 – Dec 2025",
      shortDates: "2025",
      points: [
        "Wrote the blue-team agent's RAG pipeline in Python: split 5 security standards (CIS Controls, NIST and Ubuntu hardening guides; ~255K words) into **730 overlapping chunks**, embedded them and indexed them in Pinecone.",
        "Owned LLM selection and tool-use architecture for the red- and blue-team agents (Nmap, Metasploit, Hydra), and built guardrails that block hallucinated destructive commands like rm -rf, plus an editor to revise commands before they run.",
        "Demoed the platform to Booz Allen Hamilton and DoD stakeholders, **securing 4 more months of funding**.",
      ],
      tools: ["Python", "Pinecone", "LLMs", "RAG", "Nmap", "Metasploit", "Hydra"],
    },
    {
      id: "cvs",
      title: "Lead Pharmacy Technician",
      badge: { label: "Earlier career", color: "gray" },
      muted: true,
      org: "CVS Pharmacy",
      place: "St. Louis, MO",
      dates: "Dec 2019 – Dec 2021",
      shortDates: "2019 – 2021",
      points: [
        "Supported patients and pharmacy staff as lead technician, including vaccinating elderly residents at nursing homes.",
      ],
      tools: ["Patient care", "Team leadership"],
    },
  ],
};

// ── 03 Projects ──────────────────────────────────────────────
export const featuredProject = {
  title: "CVE Exploit Risk Tracker",
  status: "In progress",
  note: "Repo and live dashboard coming soon",
  summary:
    "A serverless pipeline on AWS that joins CISA's Known Exploited Vulnerabilities catalog, NVD and EPSS scores every day, and publishes a dashboard of which vulnerabilities are being exploited and which are likely to be next.",
  hubSummary:
    "Serverless AWS pipeline that joins CISA KEV, NVD and EPSS every day into a dashboard of what's being exploited next.",
  pipeline: [
    { label: "CISA KEV · NVD · EPSS", detail: "public feeds" },
    { label: "EventBridge + Lambda", detail: "runs daily" },
    { label: "S3 · Parquet", detail: "joined history" },
    { label: "Dashboard", detail: "exploited now, likely next" },
  ],
  stack: ["Python", "AWS Lambda", "S3", "EventBridge", "Parquet", "Terraform"],
  links: [], // add { label: "GitHub", url: "..." } once the repo exists
};

// The hub shows the first three projects that have `hub` set.
export const projects = [
  {
    id: "sms-spam",
    title: "SMS Spam Classification: TF-IDF vs. BERT",
    hubTitle: "SMS Spam Classification",
    hubDetail: "TF-IDF vs. BERT · team capstone",
    hubResult: "98.45% accuracy",
    hub: true,
    kind: "Cybersecurity capstone",
    year: "2025",
    color: "red",
    summary:
      "A four-person team project to catch spam text messages while rarely flagging legitimate ones. We compared TF-IDF baselines with classifiers trained on fixed BERT embeddings, using a deduplicated dataset and a stratified train, validation and test split.",
    role: "I led business understanding, data understanding and data preparation, and built the BERT model: a pretrained encoder turns each message into a vector, and a small neural network classifies it.",
    results: [
      { value: "98.45%", label: "accuracy on 774 test messages" },
      { value: "93.75%", label: "precision on spam" },
      { value: "93.75%", label: "recall on spam" },
      { value: "6 / 678", label: "legit messages wrongly flagged" },
    ],
    stack: ["Python", "TensorFlow", "Keras", "BERT", "TF-IDF", "scikit-learn", "CRISP-DM"],
    links: [{ label: "GitHub", url: "https://github.com/ElsieElsevier/llm-spam-text-biclassification", primary: true }],
  },
  {
    id: "arrangely",
    title: "Arrangely: Wedding Seating Planner",
    hubTitle: "Arrangely Seating Planner",
    hubDetail: "Spectral clustering · rebuilt 2026",
    hubResult: "2nd place",
    hub: true,
    kind: "Hackathon",
    year: "2025, rebuilt 2026",
    color: "yellow",
    summary:
      "Hosts describe guests in plain language; a local sentence-embedding model turns each description into a vector, and spectral clustering groups similar guests. It then fits groups to tables, keeping couples together, honoring keep-apart requests and seat limits, and evening out table sizes.",
    role: "Built in 36 hours at e{hack}2025 (SIUE, T-REX in St. Louis), where I wrote the Python machine learning core. In 2026 I rebuilt it as a single Flask app with an API and automated tests.",
    results: [
      { value: "2nd", label: "place at e{hack}2025" },
      { value: "36 hrs", label: "original build" },
      { value: "100%", label: "runs locally, nothing sent out" },
      { value: "Same", label: "input always gives the same plan" },
    ],
    stack: ["Python", "Flask", "Sentence embeddings", "Spectral clustering", "scikit-learn", "pytest"],
    links: [
      { label: "GitHub", url: "https://github.com/ElsieElsevier/arrange.ly-wedding-seating-optimizer", primary: true },
      { label: "Devpost", url: "https://devpost.com/software/arrange-ly", newTab: true },
    ],
  },
  {
    id: "income",
    title: "Income Classification with PyTorch",
    hubTitle: "Income Classification",
    hubDetail: "PyTorch · 48K census records",
    hubResult: "0.916 ROC-AUC",
    hub: true,
    kind: "Machine learning",
    year: "2025",
    color: "blue",
    summary:
      "A PyTorch neural network that predicts whether a person earns more than $50K a year from census data, trained on 32,561 rows and tested on 16,281, compared against logistic regression and gradient boosting.",
    role: "My first ML project. I came back to fix its bugs, including an early-stopping copy bug that kept the wrong weights, and ran a feature study that found binning numeric features gave the biggest gain.",
    results: [
      { value: "86.16%", label: "accuracy, mean of 5 seeds" },
      { value: "0.916", label: "ROC-AUC" },
      { value: "48.8K", label: "census records" },
      { value: "87.24%", label: "best baseline (gradient boosting)" },
    ],
    stack: ["Python", "PyTorch", "scikit-learn", "pandas", "Jupyter"],
    links: [
      { label: "GitHub", url: "https://github.com/ElsieElsevier/pytorch-income-classification", primary: true },
      {
        label: "Open in Colab",
        url: "https://colab.research.google.com/github/ElsieElsevier/pytorch-income-classification/blob/main/IncomeBracketStoppage.ipynb",
      },
    ],
  },
  {
    id: "medallion-etl",
    title: "Event Ingestion and Medallion ETL on Azure",
    kind: "Professional work",
    year: "FinLocker, 2025 – 2026",
    badge: "Private code",
    color: "green",
    summary:
      "A metadata-driven pipeline that ingests Braze customer-engagement events (Apache Avro) into event-specific SQL tables, upserting by event ID and archiving or quarantining each file. PySpark notebooks turn raw Parquet payloads into Silver and Gold tables with SQL MERGE and watermark-based incremental loads.",
    role: "Sole engineer. When Synapse limitations stalled the work, I rebuilt it in Microsoft Fabric with Bronze, Silver and Gold layers, where it went into production alongside other Fabric pipelines I built.",
    results: [
      { value: "3", label: "medallion layers (Bronze → Gold)" },
      { value: "Prod", label: "running in Microsoft Fabric" },
      { value: "MERGE", label: "incremental upserts" },
      { value: "Avro", label: "Braze events ingested" },
    ],
    stack: ["Azure Synapse", "Microsoft Fabric", "PySpark", "SQL MERGE", "Apache Avro", "Parquet"],
    links: [],
  },
];

// ── 04 Project Lab ───────────────────────────────────────────
export const lab = {
  status: "Coming soon",
  title: "Play with my projects, live",
  hubText: "Interactive demos running on AWS.",
  text: "This is where my projects will run as interactive demos, hosted on AWS alongside this site.",
  note: "The first demo is on the way. Until then, the code for every project is on GitHub.",
};

// ── 05 Skills ────────────────────────────────────────────────
// The hub shows the first three items of each group.
export const skills = [
  {
    group: "Cloud",
    color: "blue",
    items: ["Azure", "AWS", "Microsoft Fabric", "AKS", "Azure VMs", "Front Door", "Key Vault", "Azure Monitor", "Log Analytics", "App Insights", "Logic Apps", "EKS"],
    where: "Production Azure at FinLocker; AWS EKS for the ADAM research platform.",
  },
  {
    group: "DevOps & IaC",
    color: "green",
    items: ["Terraform", "Kubernetes", "Azure DevOps", "HCL", "Docker", "GitHub Actions", "Git", "CI/CD", "Change management"],
    where: "FinLocker releases and tenant replication; this site deploys with GitHub Actions.",
  },
  {
    group: "Security",
    color: "red",
    items: ["Defender", "Entra ID", "Private Endpoints", "Conditional Access", "Managed identities", "RBAC", "VNets & NSGs", "Barracuda WAF & Firewall", "TLS/PKI", "Incident response", "SOC 2", "Nmap", "Metasploit"],
    where: "Platform hardening, incident response and a SOC 2 audit at FinLocker.",
  },
  {
    group: "Data",
    color: "yellow",
    items: ["SQL", "PySpark", "Azure Synapse", "Microsoft Fabric", "SQL MERGE", "Parquet", "Apache Avro", "Incremental loads"],
    where: "The Synapse to Fabric migration and medallion pipelines at FinLocker.",
  },
  {
    group: "Languages",
    color: "purple",
    items: ["Python", "PowerShell", "Bash", "SQL", "KQL", "HCL", "JavaScript", "HTML/CSS"],
    where: "Automation scripts, data pipelines and machine learning projects.",
  },
  {
    group: "Front end",
    color: "blue",
    items: ["React", "JavaScript", "HTML/CSS", "Vite"],
    where: "This site, built in React and Vite; LaunchCode full-stack bootcamp.",
  },
  {
    group: "Back end",
    color: "green",
    items: ["Python", "Flask", "REST APIs", "pytest"],
    where: "Arrangely's Flask app, API and automated tests.",
    hideOnHub: true,
  },
  {
    group: "AI & ML",
    color: "red",
    items: ["LLMs & RAG", "PyTorch", "TensorFlow", "Pinecone", "Microsoft Copilot", "MCP", "BERT", "scikit-learn", "Bayesian modeling"],
    where: "The ADAM AI advisor, two ML projects and a CogSci paper.",
  },
  {
    group: "IT operations",
    color: "yellow",
    items: ["Intune", "Active Directory", "Microsoft 365", "WSUS", "Windows", "macOS", "Linux", "Barracuda VPN", "Jira"],
    where: "Supporting 40 to 50 employees and ~50 devices at FinLocker.",
  },
];

export const familiar = ["Splunk", "Zscaler", "Bicep (editing existing templates)"];

// ── 06 Certifications ────────────────────────────────────────
export const certifications = [
  {
    name: "CompTIA Security+",
    emblem: "Sec+",
    issuer: "CompTIA",
    valid: "2026 – 2029",
    color: "red",
    verifyUrl: "https://www.credly.com/badges/8f75a056-9f56-4058-a0d2-bae468806d49/public_url",
    covers: [
      "General security concepts",
      "Threats, vulnerabilities & mitigations",
      "Security architecture",
      "Security operations",
      "Program management & oversight",
    ],
    applied:
      "Hardening FinLocker's Azure platform with Private Endpoints and 100+ scoped Key Vaults, containing a phishing compromise within an hour, and supporting a successful SOC 2 audit.",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    emblem: "AWS",
    issuer: "Amazon Web Services",
    valid: "2024 – 2027",
    color: "yellow",
    verifyUrl: "https://www.credly.com/badges/528708f9-b987-41e7-9ca1-36798353f830/public_url",
    covers: ["Cloud concepts", "Security & compliance", "Cloud technology & services", "Billing, pricing & support"],
    applied:
      "Running this site on S3, CloudFront, Route 53 and WAF with an OIDC deploy from GitHub Actions, and hosting the ADAM research platform on AWS EKS.",
  },
];

// ── 07 Research ──────────────────────────────────────────────
export const paper = {
  title:
    "Neural Thurstone Model: Leveraging Latent Spaces for Collective Intelligence in Ranking Predictions",
  shortTitle: "Neural Thurstone Model",
  authors: "Necdet Gurkan, Jin Bai",
  affiliation: "College of Business, University of Missouri–St. Louis",
  venue: "Proceedings of the Cognitive Science Society, Vol. 47 · 2025",
  hubVenue: "CogSci Proceedings, Vol. 47, 2025",
  url: "https://escholarship.org/uc/item/0wh63804",
  summary:
    "We combined a classic statistical model for merging many people's rankings with neural networks and pretrained AI embeddings. The new model ranked items more accurately when little ranking data was available, could rank items nobody had ranked before, and on some tasks improved further using reasoning generated by large language models.",
  role: "", // add a one-line "My role" here and it appears on the Research page
  method: [
    { label: "Item embeddings", detail: "Sentence-BERT, 384-d" },
    { label: "One neural layer", detail: "fine-tuned mapping" },
    { label: "Latent “truth”", detail: "per item" },
    { label: "Thurstone model", detail: "aggregates rankings" },
  ],
  datasets: ["Animal speeds", "Hardness of materials", "U.S. states, west to east"],
  caveat:
    "Gains were task-specific: on some leave-one-out tests the classic model still did better, which the paper reports alongside the wins.",
  citation:
    "Gurkan, N., & Bai, J. (2025). Neural Thurstone Model: Leveraging latent spaces for collective intelligence in ranking predictions. Proceedings of the Annual Meeting of the Cognitive Science Society, 47.",
  results: [
    { value: "6 vs 8", label: "ranking error vs. the classic model when data is sparse (animal speeds; lower is better)", color: "yellow" },
    { value: "0.75", label: "rank correlation on U.S. states with LLM reasoning, vs. 0.68 for the classic model", color: "blue" },
    { value: "10", label: "items ranked that no participant had ranked before", color: "green" },
  ],
};

export const appliedResearch = {
  title: "ADAM: an AI advisor for cyber-defense competitions",
  where: "Kennesaw State University and UMSL · 2025 – 2026",
  summary:
    "A blue-team AI advisor, built on a self-hosted Mistral LLM with a Pinecone RAG pipeline over CIS, NIST and Ubuntu hardening guides and running on AWS EKS, that coached students defending against professional red teamers at CCDC. I owned LLM selection and the tool-use architecture, and built guardrails that block destructive commands before they run.",
  tools: ["Mistral LLM", "Pinecone", "RAG", "Python", "Docker", "AWS EKS", "Nmap", "Metasploit"],
  results: [
    { value: "15", label: "universities whose students used the advisor", color: "blue" },
    { value: "3 – 7.8 hrs", label: "teams held out in an 8-hour red-team event", color: "yellow" },
    { value: "730", label: "chunks of security standards indexed for RAG", color: "green" },
    { value: "+4 mo", label: "of funding after the Booz Allen and DoD demo", color: "red" },
  ],
};

// ── 08 Education ─────────────────────────────────────────────
export const education = [
  {
    emblem: "FS",
    degree: "Full-Stack Development Bootcamp",
    hubDegree: "Full-Stack Development Bootcamp",
    school: "LaunchCode",
    hubSchool: "LaunchCode · Expected Apr 2027",
    date: "Expected Apr 2027",
    status: "In progress",
    color: "purple",
    text: "Building out the web development side of my skills, front end through back end, alongside my cloud work.",
    related: [],
  },
  {
    emblem: "M.S.",
    degree: "M.S. Cybersecurity",
    hubDegree: "M.S. Cybersecurity",
    school: "University of Missouri–St. Louis · Information Systems & Technology",
    hubSchool: "University of Missouri–St. Louis",
    date: "May 2025",
    color: "blue",
    text: "Graduate study in cybersecurity within UMSL's information systems program, where I also published research and joined the ADAM AI security team.",
    related: [
      { label: "SMS Spam capstone", to: "/projects" },
      { label: "Published paper", to: "/research" },
      { label: "ADAM research", to: "/experience" },
    ],
  },
  {
    emblem: "B.S.",
    degree: "B.S. Chemistry",
    hubDegree: "B.S. Chemistry",
    school: "University of Missouri",
    hubSchool: "University of Missouri",
    date: "December 2018",
    color: "gray",
    text: "A science foundation in careful measurement, experimentation and analysis, the same habits I bring to benchmarking systems and testing ML models.",
    related: [],
  },
];
