import { FaCalendarAlt, FaUsers, FaBriefcase, FaBuilding, FaRegUser, FaIndustry } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter, FaHome, FaLinkedin } from "react-icons/fa";
import teamImg2 from '@/../public/team-2.jpg'
import teamImg1 from '@/../public/team1.jpg'
import teamImg3 from '@/../public/team-3.jpg'
import { JSX } from "react";
import { CgInstagram } from "react-icons/cg";
import { FaUserTie } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import Link from "next/link";
import {  MdInfo, MdLocationOn } from 'react-icons/md';
import { IoCall, IoSettingsSharp } from 'react-icons/io5';
import { HiMail } from 'react-icons/hi';
import { HiDocumentCurrencyRupee } from 'react-icons/hi2';

// Define types for the nav link and social icon
export type NavLink = {
    label: string;
    link: string;
    icon: JSX.Element; // JSX.Element allows icons like <FaHome />
};

export type SocialIcon = {
    icon: JSX.Element;
    link: string;
};

// Nav links array with icons and types
export const navLinks: NavLink[] = [
    { label: "Home", link: "/", icon: <FaHome /> },
    { label: "About", link: "/about", icon: <MdInfo /> },
    { label: "Services", link: "/services", icon: <IoSettingsSharp /> },
    { label: "Contact", link: "/contact", icon: <HiMail /> },
];

// Social icons array and types
export const socialIcons: SocialIcon[] = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/" },
    { icon: <FaTwitter />, link: "https://x.com/" },
];

export const teamMembers = [
    {
        id: 3,
        name: 'Anjali Arya',
        work: 'Human Resource (HR)',
        image: teamImg3,
         socialLinks: [
            <Link key='linkedin' href={'https://www.linkedin.com/'} target="_blank"><FaLinkedin size={20} className='text-primary' /></Link>,
            <Link key='facebook' href={'https://www.facebook.com/'} target="_blank"><FaFacebook size={20} className='text-primary' /></Link>,
            <Link key='instagram' href={'https://www.instagram.com/'} target="_blank"><CgInstagram size={20} className='text-primary' /></Link>,
            <Link key='twitter' href={'https://x.com/'} target="_blank"><FaTwitter size={20} className='text-primary' /></Link>
        ]
    },
    {
        id: 1,
        name: 'Anjali Arya',
        work: 'Chief Marketing Officer',
        image: teamImg1,
         socialLinks: [
            <Link key='linkedin' href={'https://www.linkedin.com/'} target="_blank"><FaLinkedin size={20} className='text-primary' /></Link>,
            <Link key='facebook' href={'https://www.facebook.com/'} target="_blank"><FaFacebook size={20} className='text-primary' /></Link>,
            <Link key='instagram' href={'https://www.instagram.com/'} target="_blank"><CgInstagram size={20} className='text-primary' /></Link>,
            <Link key='twitter' href={'https://x.com/'} target="_blank"><FaTwitter size={20} className='text-primary' /></Link>
        ]
    },
    {
        id: 2,
        name: 'Anjali Arya',
        work: 'Human Resource (HR)',
        image: teamImg2,
        socialLinks: [
            <Link key='linkedin' href={'https://www.linkedin.com/'} target="_blank"><FaLinkedin size={20} className='text-primary' /></Link>,
            <Link key='facebook' href={'https://www.facebook.com/'} target="_blank"><FaFacebook size={20} className='text-primary' /></Link>,
            <Link key='instagram' href={'https://www.instagram.com/'} target="_blank"><CgInstagram size={20} className='text-primary' /></Link>,
            <Link key='twitter' href={'https://x.com/'} target="_blank"><FaTwitter size={20} className='text-primary' /></Link>
        ]
    },
]


export const services = [
    {
        icon: <FaUserTie />,
        heading: 'Talent Placement',
        content: 'Connecting businesses with the right candidates for every role.'
      },
    {
        icon: <FaChalkboardTeacher />,
        heading: 'Executive Search',
        content: 'Finding top leaders to drive success and strategic growth.'
    },
    {
        icon: <FaProjectDiagram />,
        heading: 'Recruitment Solutions',
        content: 'Streamlining your recruitment process for faster, better hiring.'
    }
];


export const companyStats = [
    {
        count: 4,
        label: "Years of Experience",
        icon: <FaCalendarAlt />
    },
    {
        count: 234,
        label: "Clients Served",
        icon: <FaUsers />
    },
    {
        count: 1500,
        label: "Placements Made",
        icon: <FaBriefcase />
    },
    {
        count: 120,
        label: "Companies Served",
        icon: <FaBuilding />
    },
    {
        count: 1800,
        label: "Candidates Placed",
        icon: <FaRegUser />
    },
    {
        count: 25,
        label: "Industries Covered",
        icon: <FaIndustry />
    }
];



export const contact = {
    phone:'+91 999 999 9999',
    phoneIcon: <IoCall/>,
    mail: 'a@gmail.com',
    mailIcon: <HiMail/>,
    address:'4th Cross road',
    addressIcon: <MdLocationOn/>,
   }
