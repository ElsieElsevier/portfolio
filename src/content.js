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
  "Most recently, I was a cloud engineer at FinLocker, a SOC 2–audited fintech, where I worked across Azure infrastructure, security operations and data engineering. I also research AI for cybersecurity, building agents used in live competitions by students from 15 universities.",
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
    title: "SMS Spam Detection with BERT",
    kind: "Cybersecurity capstone",
    year: "2025",
    summary:
      "A four-person team project to filter spam text messages, comparing TF-IDF, Word2Vec and BERT approaches. I led business understanding, data understanding and data preparation, and built the entire BERT model: a pretrained BERT encoder turns each message into a vector, and a small trainable neural network classifies it. The BERT model reached 97.97% accuracy on 836 test messages, with 94% precision and 90% recall on spam, and wrongly flagged only 6 of 724 legitimate messages.",
    stack: ["Python", "TensorFlow", "Keras", "BERT", "NLP", "CRISP-DM"],
    links: [
      { label: "Source code", url: "https://github.com/ElsieElsevier/llm-spam-text-biclassification" },
      {
        label: "Final report (PDF)",
        url: "https://github.com/ElsieElsevier/llm-spam-text-biclassification/blob/main/final_project_report.pdf",
      },
    ],
  },
  {
    title: "Arrange.ly: Event Seating Optimizer",
    kind: "Hackathon, {e}Hack",
    year: "2024",
    summary:
      "Built in 36 hours at {e}Hack 2024, hosted by SIUE at the T-REX technology center in downtown St. Louis. Our team built a seating planner for weddings and events, and I wrote its Python machine learning core: modules that turn guests' survey answers into text embeddings, build a graph of their relationships, group guests into tables with spectral clustering, score and compare the arrangements, and store the results.",
    stack: ["Python", "Spectral clustering", "Text embeddings", "Graph analysis"],
    links: [
      { label: "Source code", url: "https://github.com/ElsieElsevier/arrange.ly-spectral-clustering" },
    ],
  },
  {
    title: "Income Bracket Classifier in PyTorch",
    kind: "Machine learning",
    year: "2025",
    summary:
      "A neural network that predicts income brackets from a dataset of 25,000+ records. Preprocessing, feature engineering and the model itself are built by hand in PyTorch to understand each step of the deep learning workflow.",
    stack: ["Python", "PyTorch", "Jupyter"],
    links: [
      { label: "Source code", url: "https://github.com/ElsieElsevier/pytorch-income-classification" },
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
      "Built Terraform infrastructure as code that replicated the full SaaS platform into a new Azure tenant, redeploying the complete dev environment in about a month.",
      "Upgraded Kubernetes on dev and stage AKS clusters (~100 nodes each) in after-hours windows with no notable downtime, and maintained 15 to 30 CronJobs per environment running daily data loads.",
      "Migrated data pipelines from Azure Synapse to Microsoft Fabric as the sole engineer, rebuilding a Synapse project in Fabric after platform limitations and putting multiple Fabric pipelines into production.",
      "Right-sized Fabric compute through incremental load testing after smaller tiers throttled, handling a ~20K-record daily write, dedupe and retry batch and the 2 to 3x backlogs that follow an outage.",
      "Developed PySpark ETL notebooks and incremental SQL MERGE workflows that load raw Parquet payloads into Silver and Gold tables in Azure Synapse, with current and history tracking.",
      "Contained a phishing compromise of 3 accounts, including the CEO's, within 1 hour with no data exposure, and investigated a Defender data-exfiltration alert through to a formal report.",
      "Restructured secrets from a few shared Key Vaults into 100+ vaults scoped by service and environment, and closed public network access with Private Endpoints and managed identities.",
      "Migrated 50+ VMs to Azure Monitor Agent to restore logging and security telemetry, and owned renewal of ~30 customer-facing TLS certificates end to end.",
      "Supported a successful SOC 2 audit, and managed identity and devices for 40 to 50 employees across Entra ID, Intune and Conditional Access.",
    ],
  },
  {
    role: "AI & Cybersecurity Researcher, ADAM Team",
    org: "Kennesaw State University and University of Missouri–St. Louis",
    dates: "May 2025 to April 2026",
    points: [
      "Built a blue-team AI advisor (self-hosted Mistral LLM with Pinecone RAG) on AWS EKS for students from 15 universities facing professional red teamers; teams held out 3 to 7.8 hours of an 8-hour event.",
      "Built the initial red-team agent (Nmap, Metasploit, Hydra) with guardrails that block hallucinated destructive commands like rm -rf, plus a real-time editor for reviewing agent commands.",
      "Owned LLM selection and tool-use architecture on a 2-person team, and demoed the platform to Booz Allen Hamilton and DoD stakeholders, helping secure 4 more months of funding.",
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
    degree: "MS, Cybersecurity in Information Systems & Technology",
    school: "University of Missouri–St. Louis",
    year: "2023 to 2025",
  },
  {
    degree: "BS, Chemistry",
    school: "University of Missouri–Columbia",
    year: "2013 to 2018",
  },
  {
    degree: "Full-Stack Development Program",
    school: "LaunchCode",
    year: "In progress",
  },
];

export const certifications = [
  { name: "CompTIA Security+", issuer: "CompTIA", year: "2026 to 2029" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024 to 2027" },
];

export const skills = [
  {
    group: "Cloud",
    items: ["Azure", "AKS", "Front Door", "Key Vault", "Azure Monitor", "Log Analytics", "Logic Apps", "AWS", "EKS"],
  },
  {
    group: "Data",
    items: [
      "Azure Synapse",
      "Microsoft Fabric",
      "Azure Data Factory",
      "PySpark",
      "SQL MERGE",
      "Parquet",
      "Apache Avro",
      "Incremental loads",
    ],
  },
  {
    group: "Infrastructure",
    items: ["Terraform", "Kubernetes", "Docker", "Ansible", "Azure DevOps", "Git", "CI/CD", "VMware", "VirtualBox"],
  },
  {
    group: "Security",
    items: [
      "Incident response",
      "Defender for Endpoint",
      "Entra ID",
      "Conditional Access",
      "RBAC",
      "NSGs",
      "Private Endpoints",
      "Barracuda WAF & Firewall",
      "TLS/PKI",
      "SOC 2",
      "Nmap",
      "Metasploit",
    ],
  },
  {
    group: "IT operations",
    items: ["Intune", "Microsoft 365", "Active Directory", "WSUS", "Barracuda VPN", "Jira"],
  },
  { group: "Languages", items: ["Python", "PowerShell", "Bash", "SQL", "KQL", "JavaScript"] },
  {
    group: "AI & ML",
    items: ["LLMs", "RAG", "Pinecone", "PyTorch", "TensorFlow", "BERT", "Bayesian modeling"],
  },
];

// Tools you've used but wouldn't call hands-on production experience.
// Shown as a single plain line under the skill chips.
export const familiar = ["Splunk", "Zscaler", "Bicep (editing existing templates)"];
