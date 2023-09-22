import { POLYGON_BG, POLYGON_SHADOW, PINK } from "./styles";
export const MENU_ITEMS = ["Home", "About", "Skills", "Projects"];

export const EMAIL ='mariya.kovalenko.2000@gmail.com';
export const CV_LINK='https://drive.google.com/file/d/1SvJJ8bBFh1coQC3NetJK1a7rgd0zhOoi/view?usp=sharing';

export const GITHUB_LINK = 'https://github.com/Mariia-Kovalenko';
export const GITLAB_LINK = 'https://gitlab.com/Mariia_Kovalenko';
export const LINKED_IN = 'https://www.linkedin.com/in/mariia-tanchuk-4b72b3247/';

export const SOCIAL_MEDIA = [
    {
        id: 1,
        name: 'github',
        image: '/github.svg',
        href: GITHUB_LINK
    },
    {
        id: 2,
        name: 'gitlab',
        image: '/gitlab.svg',
        href: GITLAB_LINK
    },
    {
        id: 3,
        name: 'linkedin',
        image: '/linkedin.svg',
        href: LINKED_IN
    },
]


export const SMALL_MOBILE_BREAKPOINT = "(max-width:540px)";
export const MOBILE_BREAKPOINT = "(max-width:780px)";
export const SMALL_DESKTOP_BREAKPOINT = "(max-width:1100px)";

export const CERTIFICATES = [
    {
        id: '1',
        title: 'EPAM Global Project Competition',
        link: 'https://certificates.epam.com/certificates/29d6dfd4-e260-470b-99a2-48377423d9ae',
        date: '23 December, 2022'
    },
]

export const EDUCATION = [
    {
        id: '1',
        degree: 'Bachelor`s Degree',
        faculty: 'System Analysis and Control',
        university: 'NTUU KPI',
        years: '2017 - 2021'
    },
    {
        id: '2',
        degree: 'Master`s Degree',
        faculty: 'System Analysis and Financial Market',
        university: 'NTUU KPI',
        years: '2021 - 2022'
    },
]

export const PROJECTS = [
    {
        id: '1',
        name: 'Choose Your Cat',
        description: 'Application for browsing different cat breeds with images of cute cats. You can filter, like and dislike images.',
        technologies: ['React'],
        link: 'https://cats-api-1am0.onrender.com/',
        image: 'cat-api-proj.jpg'
    },
    {
        id: '2',
        name: 'Task Manager',
        description: 'A full-stack Jira-like application for managing tasks. Allows users to create boards, add tasks to them and change their progress.',
        technologies: ['Angular', 'NodeJS'],
        link: 'https://dashboard-angular-project.onrender.com/',
        image: 'task-controll-app.jpg'
    },
    {
        id: '3',
        name: 'Glamo',
        description: 'A full-stack application for users who want to find the closest beauty services available in the area and browse them on a map.',
        technologies: ['React', 'NestJS'],
        link: 'https://github.com/Mariia-Kovalenko/glamo_app_frontend',
        image: 'glamo_frontend.png'
    },
    {
        id: '4',
        name: 'Currency Converter',
        description: 'A real-time currency converter that allowes users to convert UAH to such currencies as USD and EUR using the latest exchange rates',
        technologies: ['Angular'],
        link: 'https://currency-converter-va9d.onrender.com/',
        image: 'currency-converter.jpg'
    }
]

export const SKILLS = [
    {
        id: '1',
        name: 'HTML',
        value: 98
    },
    {
        id: '2',
        name: 'CSS',
        value: 95
    },
    {
        id: '3',
        name: 'SASS',
        value: 90
    },
    {
        id: '4',
        name: 'JS',
        value: 90
    },
    {
        id: '5',
        name: 'TypeScript',
        value: 83
    },
    {
        id: '6',
        name: 'Git',
        value: 78
    },
    {
        id: '7',
        name: 'Angular',
        value: 50
    },
    {
        id: '8',
        name: 'React',
        value: 80
    },
    {
        id: '9',
        name: 'NodeJS',
        value: 50
    },
    {
        id: '10',
        name: 'NestJS',
        value: 60
    },
    {
        id: '11',
        name: 'SQL',
        value: 65
    },
];

export const circleStyle = {
    width: "700px",
    height: "700px",
    borderRadius: "50%",
    background: POLYGON_BG,
    boxShadow: POLYGON_SHADOW,
    position: "absolute",
    zIndex: 1,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
};

export const polygonBaseStyles = {
    position: "absolute",
    zIndex: 0,
};
export const circleBaseStyles = {
    borderRadius: "50%",
    background: POLYGON_BG,
    boxShadow: POLYGON_SHADOW,
};

export const spanStyle = {
    color: PINK,
};