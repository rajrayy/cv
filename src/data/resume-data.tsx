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
      logo: AmbitLogo,
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
      title: "LearnAI",
      techStack: [
        "Academic Project",
        "Langchain",
        "Python",
        "Flask",
        "Next.js",
        "Typescript",
      ],
      description: "Containerized application for college faculty to fine-tune LLM models and guide students through learning activities.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "",
      },
    },
    {
      title: "Aviation Analysis",
      techStack: ["Academic Project", "Data Science", "Pandas", "Matplotlib", "Seaborn"],
      description:
        "Data science project to conduct baseline analysis of aviation on a dataset sourced from Kaggle.",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "",
      },
    },
    {
      title: "HarryGPT",
      techStack: ["Side Project", "Python", "NLTK", "Spacy", "Django", "Tensorflow", "gTTS"],
      description:
        "Leverage NLP techniques to train text generator model on all of Harry Potter's lines from JK Rowling's texts.",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "",
      },
    },
    {
      title: "RubikAI",
      techStack: ["Academic Project", "Python"],
      description:
        "Rubik’s cube solver using breadth-first search, depth-first search and A* (Manhattan Distance) heuristic.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "Conway's Game of Life ",
      techStack: ["Academic Project", "Node.js", "Javascript", "HTML", "CSS", "Netlify"],
      description:
        "Visualization for Conway's Game of Life where a 25X25 board is initialized with random starting configurations and dead/alive cells fight it out.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "",
      },
    },
    {
      title: "Survey Generator",
      techStack: ["Academic Project", "Java", "JUnit", "Spring", "Gradle", "Maven"],
      description:
        "Reusable object-oriented software implemented using design patterns and scaled out using test-driven development in JUnit.",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "",
      },
    },
    {
      title: "Private Wealth Manager",
      techStack: ["Personal Project", "Python", "Pandas", "Numpy"],
      description: "Applied the Sortino Ratio formula to calculate and compare the profitability and risk of different investments using pandas.",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "",
      },
    },
    {
      title: "SAT Solver",
      techStack: [
        "Academic Project",
        "Racket",
        "Functional Programming"
      ],
      description:
        "Fully functional SAT solver to implement Boolean satisfiability for up to 4 variable expressions",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "Data Parser",
      techStack: [
        "Academic Project",
        "Bash",
        "AWK",
        "Scripting",
        "Linux",
      ],
      description:
        "Used AWK to scrape data and generate XML files to display a subset of US Army veteran data on formatted webpages.",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "",
      },
    },
    {
      title: "Broke Bad",
      techStack: ["Personal Project", "React", "Radzen", "Blazor"],
      description:
        "Front-end web application to display randomly generated Breaking Bad quotes.",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "",
      },
    },
    {
      title: "Chill-A-Lil",
      techStack: ["Coursework", "HTML", "CSS", "JQuery", "Bootstrap", "MongoDB", "PHP"],
      description:
        "A completely responsive mental health website",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "",
      },
    },
    {
      title: "Doggo",
      techStack: ["Personal Project", "Linux", "Shell Scripting"],
      description:
        "An interactive finite state machine that alternates between the various moods (states) of a dog.",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "",
      },
    },
  ],
} as const;
