import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Joshua Ollivierre.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        As a passionate student navigating the world of full-stack development, I combine creativity with technical
        expertise to build impactful web applications. With experience in front-end and back-end technologies, I am
        continuously expanding my skill set to deliver innovative solutions. Let's build something amazing together!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Volleyball</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `I am a passionate and determined student with a deep love for learning and technology. My journey in software development has given me a solid foundation in JavaScript, Python, and C++, and I thrive on expanding my skills to solve complex problems and build innovative solutions.
Beyond coding, I'm an avid sports enthusiast, especially volleyball, and I find joy in staying active and challenging myself. When it's time to unwind, I enjoy relaxing with music, allowing myself to recharge and stay inspired.
Whether it's tackling a new project or diving into the latest tech trends, I am committed to continuous growth and excited to contribute to meaningful projects.`,
  aboutItems: [
    {label: 'Location', text: 'New Cross, LDN', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Vincentian, Saint Vincent and the Grenadines, VC', Icon: FlagIcon},
    {label: 'Interests', text: 'Volleyball, Football, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Goldsmiths University', Icon: AcademicCapIcon},
    {label: 'Occupation', text: 'Student', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 2,
      },
      {
        name: 'Typescript',
        level: 2,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Goldsmiths auto-submit form ',
    description:
      'When I transferred to Goldsmiths, I encountered an issue with their Seats app, which students use to mark their attendance. To solve this, I quickly developed a script using Selenium that automatically fills out the attendance form based on the day and time of my class.',
    url: 'https://github.com/shno784/Goldsmiths-auto-submit-form',
    image: porfolioImage1,
  },
  {
    title: "Analysis on Manchester City's triumphant 2022/23 EPL season title run",
    description: 'A datascience project that utilised certain ML models and datascience methods to visualise and explain key factors into Manchester City 2022/23 EPL season title run.',
    url: 'https://github.com/shno784/PWD',
    image: porfolioImage2,
  },
  {
    title: 'Graphics Programming',
    description: 'My graphics programming module where I learned a lot using p5.js',
    url: 'https://github.com/shno784/Graphics-Programming',
    image: porfolioImage3,
  },
  {
    title: 'Blog website',
    description: 'A blog website that was created for a midterm project',
    url: 'https://github.com/shno784/dnw-coursework-template-main',
    image: porfolioImage4,
  },
  {
    title: 'Music Visualizer',
    description: 'This visualizer was a project that analyses sound patterns like bass treble etc to let items be interactive with music.',
    url: 'https://github.com/shno784/Music-Visualizer',
    image: porfolioImage5,
  },
  {
    title: 'DJ Application',
    description: 'GA DJ application that was created using C++ and a framework: JUCE for Object Oriented Programming final.',
    url: 'https://github.com/shno784/FINAL-DJ-APPLICATION',
    image: porfolioImage6,
  },
  {
    title: 'Advisor Bot',
    description: 'A bot that checks the current blockchain and makes predictions on certain coins.',
    url: 'https://github.com/shno784/AdvisorBot',
    image: porfolioImage7,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2021 - Current',
    location: 'Goldsmiths University',
    title: 'Final year BSC Computer Science',
    content: (
      <p>
        As a final year student at Goldsmiths, I am developing skills in graphic design, object-oriented programming,
        and both front-end and back-end web development.
      </p>
    ),
  },
  {
    date: '2018',
    location: 'Saint Vincent Community College',
    title: 'A Level Degree',
    content: (
      <p>
        My coding journey began at this college, where I first learned the fundamentals of programming with C++. I also
        gained knowledge in computer networks and various development methodologies.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2021 - Present',
    location: 'Saint Vincent Community College',
    title: 'IT technician',
    content: (
      <p>
        In my current role, I am responsible for managing both the hardware and software of computers in the college’s
        lab. I assist staff and students with device-related issues, support lecturers and other staff in setting up
        systems for meetings, and help manage the network. While I have limited experience with networking, I am eager
        to continue learning and improving in this area.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Don't Hesitate to shoot me an e-mail or a message on Linkedin!",
  items: [
    {
      type: ContactType.Email,
      text: 'joshino784@gmail.com',
      href: 'mailto:joshino784@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'New Cross LDN, England',
      href: 'https://maps.app.goo.gl/e3r2mDp58w6qFqLA7',
    },
    {
      type: ContactType.Github,
      text: 'shno784',
      href: 'https://github.com/shno784',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/shno784'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/shno784/'},
];
