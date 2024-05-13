/* eslint-disable react/jsx-key */
'use client'
import React, { useState } from 'react'
import { SIDEBAR_MENU } from '../sidebar'
import styles from './styles.module.css'
import Image from 'next/image'
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import assessItImg from '../../../public/images/sidebar/assessIt_icon_full.svg'
import Link from 'next/link'
import { FaRegUserCircle } from 'react-icons/fa'
// import { BsThreeDotsVertical } from 'react-icons/bs'




const MobileSidebar = ({ handleCloseSidebar }: { handleCloseSidebar: () => void }) => {
    const [showUserManagement, setShowUserManagement] = useState(false)

    const [showUserProfile, setShowUserProfile] = useState(false)
    const onClickUserProfile = () => {
        setShowUserProfile(!showUserProfile)
        setShowUserManagement(false)
    }

    const onClickUserManagement = () => {
        setShowUserManagement(!showUserManagement)
        setShowUserProfile(false)
    }

    return (
        <>
        <div className={`${styles.overlay}`} onClick={handleCloseSidebar} />
        <div className={`text-center position-absolute top-0 start-0 ${styles.mobilebar}`}>
            {showUserManagement === false && showUserProfile === false ? (
                <div className={`d-flex flex-column align-items-start align-items-sm-start text-white min-vh-100 ps-4 ps-sm-5 ${styles.sidebar}`}>
                    <Image className="mt-3 mb-3" alt="#" src={assessItImg} />
                    <ul className={`nav row nav-pills flex-column mb-auto align-items-start align-items-sm-start fs-6 `}>
                        {SIDEBAR_MENU.map((item, index) => (
                            <li key={index} className="">
                                {item.subMenu ? (
                                    <div className={`nav-link d-flex align-items-center gap-2 list-unstyled text-white ${styles.sidebar_items}`} onClick={onClickUserManagement}>
                                        {item.icon}
                                        {item.name}
                                    </div>
                                ) : (
                                    <Link href={item.url} className={`nav-link d-flex align-items-center gap-2 list-unstyled text-white ${styles.sidebar_items}`} onClick={handleCloseSidebar}>
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                showUserManagement ? (
                    <UserManagementItems onClickUserManagement={onClickUserManagement} />
                ) : (
                    <ShowUserProfiles onClickUserProfile={onClickUserProfile} />
                )
            )}

            <div>
                <label className={`d-flex justify-content-between  align-items-center text-white text-decoration-none ${styles.admin}`}>
                    <FaRegUserCircle size={40} />
                    <div className="d-flex flex-column" style={{ width: "109px" }}>
                        <strong className={`d-sm-inline mx-3 ${styles.username}`}>user.name</strong>
                        <span className={`d-sm-inline mx-3 ${styles.userRole}`}>profileRole</span>
                    </div>

                    <MdArrowForwardIos style={{ fontSize: "20px", marginLeft: "-7px" }} onClick={onClickUserProfile} />
                </label>
            </div>
        </div>
    </>
    )
}

export default MobileSidebar


const UserManagementItems = ({ onClickUserManagement }: { onClickUserManagement: () => void }) => {
    return (
        <div className={`d-flex flex-column align-items-start align-items-sm-start text-white min-vh-100 ps-4 ps-sm-5 ${styles.sidebar}`}>
            <IoIosArrowBack onClick={onClickUserManagement} size={40} className="mt-3 mb-4" />
            <ul className={`nav row nav-pills flex-column mb-auto align-items-start align-items-sm-start fs-6 `}>
                {SIDEBAR_MENU.map((item, index) => (
                    <div className='px-4 ' key={index}>
                        {
                            item?.dropdown?.map(
                                (userlist) => (
                                    <Link href={userlist.url} key={userlist.key} className="nav-link d-flex align-items-center gap-2 list-unstyled text-white" >
                                        {userlist.name}
                                    </Link>
                                )
                            )
                        }
                    </div>
                ))}
            </ul>
        </div>
    )
}


const ShowUserProfiles = ({ onClickUserProfile }: { onClickUserProfile: () => void }) => {
    const dropdownItems = [
        { text: "My Profile", href: "/profile" },
        { text: "Change Password", href: "/change-password" },
        { text: "Privacy Policies", href: "/privacy-policies" },
        { text: "Log Out", onClick: () => signOut() } // Assuming signOut function is defined elsewhere
    ];

    return (
        <div className={`d-flex flex-column align-items-start align-items-sm-start text-white min-vh-100 ps-4 ps-sm-5 ${styles.sidebar}`}>
            <IoIosArrowBack onClick={onClickUserProfile} size={40} className="mt-3 mb-4" />
            <ul className={`nav row nav-pills flex-column mb-auto align-items-start align-items-sm-start fs-6 `}>
                {dropdownItems.map((item, index) => (
                    <li key={index} className='nav-item'>
                        {item.onClick ? (
                            <div  className="nav-link d-flex align-items-center  list-unstyled text-white" onClick={item.onClick}>{item.text}</div>
                        ) : (
                            <Link href={item.href} className="nav-link d-flex align-items-center list-unstyled text-white">
                                {item.text}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}






const  signOut = ()=> {
    console.log("signout")
}


