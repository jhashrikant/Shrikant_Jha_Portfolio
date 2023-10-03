import { Headphones ,Gamepad2 ,Shirt,Youtube,Github ,Linkedin,Twitter} from 'lucide-react';
import {AiFillYoutube ,AiOutlineTwitter ,AiOutlineGithub,AiFillLinkedin} from 'react-icons/ai';

export const projects = [
    {
        id:1,
        projectTitle: 'Shopsavvy Ecommerce-website',
        techStack: 'Nextjs13 , reactjs , Javascript(ES6+) , MongoDB , TailwindCSS',
        Icon: <Shirt />,
        Github: 'https://github.com/jhashrikant/streetStyle-ecommerce-site',
        bgcolor: '#2a9d8f'
    },
    {
        id:2,
        projectTitle: 'Music player',
        techStack: 'HTML5 ,CSS , JavaScript(ES6+)',
        Icon: <Headphones />,
        Github: 'https://github.com/jhashrikant/Music-player',
        bgcolor: '#264653',

    },
    {
        id: 3,
        projectTitle: 'Tic Tac Toe',
        techStack: 'HTML5 ,CSS , JavaScript(ES6+)',
        Icon: <Gamepad2 />,
        Github: 'https://github.com/jhashrikant/Tic-Tac-Toe',
        bgcolor: '#353535'
    }
]


export const TechnicalSkills =[
    {
        id: 1,
        Title: 'HTML-CSS',
        Progress: 70,
        src: ''

    },
    {
        id:2,
        Title: 'JavaScript(ES6+)',
        Progress: 80,
        src: ''

    },
    {
        id: 3,
        Title: 'ReactJS/Redux',
        Progress: 80,
        src: ''

    },
    {
        id: 4,
        Title: 'TailwindCSS',
        Progress: 60,
        src: ''

    },
    {
        id: 5,
        Title: 'NextJs13',
        Progress: 60,
        src: ''
        
    },
    {
        id: 6,
        Title: 'Git/Github',
        Progress: 70,
        src: ''

    },
    {
        id: 7,
        Title: 'NodeJs',
        Progress: 65,
        src:''

    },
    {
        id: 8,
        Title: "ExpressJS",
        Progress: 60,
        src: ''
    },
    {
        id: 9,
        Title: "MongoDB",
        Progress: 60,
        src: ''
    },
    {
        id: 10,
        Title: 'PHP',
        Progress: 55,
        src: ''

    }
]

export const socialLinks = [
    {
        id: 1,
        Title: 'Youtube channel',
        Link: 'https://www.youtube.com/@Shrikant_Jha',
        Icon: <Youtube />,
        reacticons: <AiFillYoutube />
    },
    {
        id: 2,
        Title: 'Github',
        Link: 'https://github.com/jhashrikant',
        Icon: <Github />,
        reacticons: <AiOutlineGithub />

    },
    {
        id: 3,
        Title: 'Linkedin',
        Link: 'https://www.linkedin.com/in/shrikant-jha-b15173190/',
        Icon: <Linkedin />,
        reacticons: <AiFillLinkedin />

    },
    {
        id: 4,
        Title: 'Twitter',
        Link: 'https://twitter.com/shrikantj123',
        Icon: <Twitter />,
        reacticons: <AiOutlineTwitter />
    }
]

export const Experience= [
    {
        id:1,
        Title: 'Frontend Developer-Infosys',
        Timeframe:' October 2021 - Present',
        Job_Description: 'working on exciting projects using JavaScript and ReactJS'
    },
    
]



