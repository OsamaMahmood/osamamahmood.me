export const profile = {
  name: 'Osama Mahmood',
  handle: 'osama@dxb',
  title: 'Cyber Security Lead',
  company: 'Tabby',
  location: 'Dubai, UAE',
  email: 'osama.mahmood40@gmail.com',
  github: 'https://github.com/OsamaMahmood',
  linkedin: 'https://www.linkedin.com/in/osama-mahmood/',
  description:
    'Osama Mahmood — Cyber Security Lead at Tabby, Dubai. Application security, ' +
    'cloud security and DevSecOps for fintech at scale. OSCP.',
};

export const hero = {
  lede:
    "securing the Gulf's first fintech unicorn and its 15M+ users. " +
    'Breaking things since 2014; building appsec, cloud security and devsecops programs since 2018.',
  keywords: ['appsec', 'cloud security', 'devsecops'],
};

export const about = {
  lede: "I've spent my career on both sides of the wire — breaking banks and fintechs as a consultant and bounty hunter, then building the security programs that stop people like me.",
  cols: [
    'At Tabby I own application security end to end: the bug bounty program, PCI-DSS technical controls, cloud security posture across GCP, and the DevSecOps pipelines that put security checks in front of every merge request.',
    'Before that: pentesting hardened Active Directory environments for banks, mobile assessments with Frida, AWS cloud reviews — and four years hunting bugs on HackerOne, Bugcrowd and private programs.',
  ],
  figures: [
    { n: '2014', sup: '', label: 'breaking since' },
    { n: '15', sup: 'M+', label: 'users protected' },
    { n: '100', sup: '+', label: 'pentests delivered' },
    { n: '13', sup: '', label: 'certifications' },
  ],
};

export interface Role {
  hash: string;
  head?: boolean;
  refs?: string;
  title: string;
  company: string;
  meta: string;
  body: string;
  tags: string[];
}

export const experience: Role[] = [
  {
    hash: 'e8a41f2',
    head: true,
    refs: 'HEAD → present',
    title: 'Cyber Security Lead',
    company: 'Tabby',
    meta: 'dubai, uae · 2023 — present',
    body: 'Leading security for the region’s largest BNPL platform. Own <strong>VAPT</strong> across web, mobile and API, <strong>DevSecOps</strong> pipelines in GitLab (SAST, DAST, container image scanning), and cloud &amp; <strong>GKE runtime security</strong> with Wiz and Falco. Run the <strong>bug bounty</strong> program and vulnerability management on DefectDojo, drive <strong>PCI-DSS</strong> and <strong>SAMA</strong> compliance controls, manage the endpoint security fleet (SentinelOne, Jamf, MDM), and built IR automation with Elastic SIEM and n8n SOAR.',
    tags: ['gcp', 'gitlab', 'wiz', 'falco', 'kubernetes', 'sentinelone'],
  },
  {
    hash: 'b3c7d90',
    title: 'Application Security Engineer',
    company: 'GudangAda',
    meta: 'remote · 2022 — 2023',
    body: 'Embedded <strong>SAST, DAST and SCA</strong> into CI/CD for Indonesia’s largest B2B marketplace; led source-code reviews and established SLA-driven remediation with engineering.',
    tags: ['devsecops', 'code review', 'wazuh siem'],
  },
  {
    hash: '9f21ac4',
    title: 'Senior Security Consultant',
    company: 'GRC360',
    meta: 'islamabad, pk · 2020 — 2022',
    body: 'Pentested banks and enterprises: web, mobile (<strong>Frida</strong>-instrumented), internal networks and hardened <strong>Active Directory</strong>. PCI-DSS segmentation testing and AWS cloud assessments.',
    tags: ['red team', 'active directory', 'pci-dss'],
  },
  {
    hash: '4d0e77b',
    title: 'Security Consultant',
    company: 'Tranchulas',
    meta: 'islamabad, pk · 2018 — 2020',
    body: 'Internal network and cloud pentests for financial institutions; designed and delivered hands-on training in web application and infrastructure pentesting.',
    tags: ['pentesting', 'siem', 'training'],
  },
  {
    hash: 'a1c3e05',
    refs: 'initial commit',
    title: 'Bug Bounty Hunter',
    company: 'independent',
    meta: 'hackerone · bugcrowd · private programs · 2014 — 2018',
    body: 'Where it started — hunting vulnerabilities across dozens of public and private programs, earning acknowledgments before turning it into a career.',
    tags: ['web', 'recon', 'responsible disclosure'],
  },
];

export const skills = [
  { dir: 'appsec/', items: 'SAST · DAST · SCA · secure code review · bug bounty ops' },
  { dir: 'devsecops/', items: 'GitLab CI · Terraform · Kubernetes · DefectDojo · Trivy' },
  { dir: 'cloud/', items: 'GCP · AWS · Wiz CSPM · GKE security — Falco runtime monitoring, image scanning, workload hardening' },
  { dir: 'offensive/', items: 'web · mobile (Frida) · API · Active Directory · network' },
  { dir: 'detection/', items: 'Elastic SIEM · Wazuh · n8n SOAR · Python automation' },
  { dir: 'endpoint/', items: 'SentinelOne · Jamf Pro / Protect · ManageEngine MDM' },
];

export interface Project {
  name: string;
  url: string;
  desc: string;
  lang: 'python' | 'rust' | 'shell';
  stars?: number;
  badge?: string;
  meta?: string;
}

export const projects: Project[] = [
  {
    name: 'dd-cli',
    url: 'https://github.com/OsamaMahmood/dd-cli',
    desc: 'Command-line client for DefectDojo covering its full REST API — findings, engagements, scan imports.',
    lang: 'python',
  },
  {
    name: 'dd-reporting',
    url: 'https://github.com/OsamaMahmood/dd-reporting',
    desc: 'Well-structured, customizable pentest and vulnerability reports out of DefectDojo data.',
    lang: 'python',
  },
  {
    name: 'cloud-ip-ranges',
    url: 'https://github.com/OsamaMahmood/IP-Ranges-For-Cloud-Provides',
    desc: 'Collect the IP ranges owned by AWS, GCP and other public cloud providers — recon and allowlisting aid.',
    lang: 'python',
  },
  {
    name: 'opensearch-snapshots',
    url: 'https://github.com/OsamaMahmood/OpenSearch-Snapshots-S3-Repo',
    desc: 'Create and manage OpenSearch snapshot lifecycles against S3-compatible repositories.',
    lang: 'python',
    stars: 4,
  },
  {
    name: 'lazytask',
    url: 'https://github.com/OsamaMahmood/lazytask',
    desc: 'Hobby project — terminal UI for Taskwarrior, in the spirit of lazygit.',
    lang: 'rust',
    stars: 13,
  },
  {
    name: 'dotfiles',
    url: 'https://github.com/OsamaMahmood/dotfiles',
    desc: 'A reproducible, terminal-first development environment.',
    lang: 'shell',
    stars: 10,
  },
];

export const contributions: Project[] = [
  {
    name: 'DefectDojo',
    url: 'https://github.com/DefectDojo/django-DefectDojo/pull/10603',
    desc: 'Contributed the Wiz CLI scan parser to DefectDojo core — used by teams worldwide to import Wiz findings.',
    lang: 'python',
    badge: 'merged',
    meta: 'PR #10603',
  },
];

export interface ResearchNote {
  level: 'warn' | 'info' | 'ok';
  tag: string;
  title: string;
  badge?: string;
  body: string;
  chips?: string[];
}

export const research: ResearchNote[] = [
  {
    level: 'warn',
    tag: 'DISCLOSURE',
    title: 'RCE-class vulns in an open-source PaaS',
    badge: 'in progress',
    body: 'Multiple remote-code-execution vulnerabilities identified in a widely used self-hosted deployment platform; reported privately to the maintainers. Write-up after fixes ship.',
  },
  {
    level: 'info',
    tag: 'BUGBOUNTY',
    title: '2014 — 2018 · HackerOne, Bugcrowd & private programs',
    body: 'Four years of independent hunting across <strong>dozens of public and private programs</strong>, with acknowledgments from enterprise, airline and big-tech targets. Now on the other side, running Tabby’s program.',
    chips: ['Facebook', 'United Airlines', 'Sony', 'Microsoft', 'Apple', 'Dropbox', '+ dozens more'],
  },
  {
    level: 'ok',
    tag: 'HOMELAB',
    title: 'Production-grade self-hosted platform',
    body: 'Two VPS nodes on a private Tailscale mesh running Dokploy: monitoring, encrypted off-site backups and a dozen services — treated like production, secured like it too.',
  },
];

export interface Cert {
  abbr: string;
  name: string;
  year: string;
  url?: string;
  featured?: boolean;
}

export const certs: Cert[] = [
  { abbr: 'OSCP', name: 'Offensive Security Certified Professional', year: '2025', featured: true },
  { abbr: 'CTMP', name: 'Certified Threat Modeling Professional', year: '2026' },
  { abbr: 'CKA', name: 'Certified Kubernetes Administrator', year: '2024' },
  { abbr: 'CDP', name: 'Certified DevSecOps Professional', year: '2023' },
  { abbr: 'CNSP', name: 'Certified Network Security Practitioner', year: '2023' },
  { abbr: 'APIsec', name: 'API Penetration Testing', year: '2023' },
  { abbr: 'CMPen', name: 'Certified Mobile Pentester — Android', year: '2023' },
  { abbr: 'CAPen', name: 'Certified AppSec Pentester', year: '2023' },
  { abbr: 'CCSP', name: 'Certified Cloud Security Practitioner — AWS', year: '2023' },
  { abbr: 'CAP', name: 'Certified AppSec Practitioner', year: '2023' },
  { abbr: 'ICSI', name: 'CyberSecurity Essentials', year: '2020' },
  { abbr: 'CWASP', name: 'Certified Web Application Security Professional', year: '2019' },
  { abbr: 'CPTP', name: 'Certified Penetration Testing Professional', year: '2018' },
];

export const navWindows = [
  { n: 0, label: 'whoami', href: '#whoami' },
  { n: 1, label: 'about', href: '#about' },
  { n: 2, label: 'experience', href: '#experience' },
  { n: 3, label: 'skills', href: '#skills' },
  { n: 4, label: 'projects', href: '#oss' },
  { n: 5, label: 'research', href: '#research' },
  { n: 6, label: 'certs', href: '#certs' },
  { n: 7, label: 'writing', href: '#writing' },
  { n: 8, label: 'contact', href: '#contact' },
];
