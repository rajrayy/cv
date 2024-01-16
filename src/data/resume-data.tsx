import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Raj Ray Chaudhury",
  initials: "ARC",
  location: "Philadelphia, PA, USA",
  locationLink: "https://www.google.com/maps/place/Philadelphia",
  about:
    "Computer Science and Data Science at Drexel University | ex Amazon & SIG",
  summary:
    "I'm someone who is in awe of technology. I can't explain it. No, I mean it. I actually can't. I struggle to put into words how amazed I am every day by every day things we take for granted. Technology and engineering humble me. Everywhere I look and everything I look at is a result of decades of continuous engineering powered by an incessant need for ruthless optimisation. I feel an inexplicable high when I wonder what my contribution will be to this giant repository that is changing with every creation, deployment and iteration. When I'm not staring at a screen, I stare outside a window thinking of the trolley problem. When I'm not staring outside a window, I go back to staring at a screen where I write code to develop software, analyze historical market data or play chess. Jokes aside - I'm always looking for a chess opponent. So please don't hesitate to reach out :)",
  avatarUrl: "https://avatars.githubusercontent.com/rajrayy",
  personalWebsiteUrl: "https://rajrayy.github.io/",
  contact: {
    email: "arr349@drexel.edu",
    tel: "+1 (215)-730-3924",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rajrayy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raj-ray-chaudhury-b656391a4/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Drexel University",
      degree: "Bachelor's Degree in Compter Science and Minor in Data Science",
      start: "2019",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Amazon (Robotics)",
      link: "https://www.aboutamazon.com/",
      badges: ["Massachusetts"],
      title: "Software Development Co-Op",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        "Employed within the Robotic Perception team where I curated ARMBench, the largest available benchmark dataset of images (450k labels on 190k unique objects) captured in an industrial product-sorting setting, that was presented at the RSS conference (Korea) in July, 2023.",
    },
    {
      company: "Susquehanna International Group LLP",
      link: "https://sig.com/",
      badges: ["Pennsylvania"],
      title: "Software Development Co-Op",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "Employed within the electronic options trading team where I wrote low latency code in C++ to save $40k annually by detecting duplicate overnight jobs on Tidal and built APIs for traders to query historical MySQL data.",
    },
    {
      company: "Sharing Excess Inc.",
      link: "https://www.sharingexcess.com/",
      badges: ["Pennsylvania"],
      title: "Software Development Engineer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2021",
      description:
        "One of the first technical employees at a local startup which has been recently backed by the Shawn mendes foundation and Mr. Beast's philanthropy org. Helped in building out the entire web interface and tracking dashboards.",
    },
    {
      company: "Drexel Penonni Honors College",
      link: "https://drexel.edu/pennoni/urep/undergraduate-research/STAR-scholars/",
      badges: ["Remote"],
      title: "Research Assistant",
      logo: NSNLogo,
      start: "2021",
      end: "2021",
      description: "Worked under Prof Weimao Ke to implement a novel algorithm (based on TF*IDF) for automated test classification",
    },
  ],
  skills: [
    "C",
    "Python",
    "Java",
    "C++",
    "SQL",
    "AWS",
    "Oracle",
    "Kafka",
    "Kubernetes",
    "Flask",
    "Django"
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
