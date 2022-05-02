import React from 'react';
import logo from '../../assets/logo-img.png';
import { VscDashboard } from "react-icons/vsc";
import { FaBars, FaTwitterSquare, FaGoogle, FaFacebookF } from "react-icons/fa";
import { RiInboxLine, RiFeedbackLine, RiVideoChatLine } from "react-icons/ri";
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
const SideNav = () => {
    const nav_items = [
        {
            id: 0,
            value: <FaBars className={styles.icons} color="white" />,
        },
        {
            id: 1,
            value: <VscDashboard className={styles.icons} color='white'/>,
            title: "Dashboard",
        },
        {
            id: 2,
            value: <RiInboxLine className={styles.icons} color='white' />,
            title: "Unified Inbox",
        },
        {
            id: 3,
            value: <RiFeedbackLine className={styles.icons} color='white' />,
            title: "Customer Feedback",
        },
        {
            id: 4,
            value: <RiVideoChatLine className={styles.icons} color='white' />,
            title: "Video Testimonial",
        },
        {
            id: 4,
            value: <FaTwitterSquare className={styles.icons} color='white' />,
            title: "Twitter Mentions",
        },
        {
            id: 6,
            value: <FaGoogle className={styles.icons} color='white' />,
            title: "Google Reviews",
        },
        {
            id: 7,
            value: <FaFacebookF className={styles.icons} color='white' />,
            title: "Facebook Reviews",
        },
    ];

    return (
        <React.Fragment>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Image src={logo} alt="Logo" />
            </div>
            {
                nav_items?.map(item => <div key={item?.id} className={styles.icon_container}>
                    {item?.value}
                    <h6 className={styles.icon_title}>{item?.title}</h6>
                </div>)
            }
        </React.Fragment>
    );
};

export default SideNav;