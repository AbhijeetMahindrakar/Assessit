'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import { BsSearch, BsQuestionCircle } from 'react-icons/bs'
import Notification from '../../../public/images/navbar/navbar_notification.svg'
import Query from '../../../public/images/navbar/query.svg'
import vector from '../../../public/images/navbar/vector.svg'
import { usePathname } from 'next/navigation'
import searchCircle from '../../../public/images/navbar/search_circle.svg'
import MobileSidebar from '../mobile_sidebar'


const MobileNavBar = () => {
  const pathname = usePathname().toString()
  const [isSlideBarVisible, setSlideBarVisible] = useState(false);



  const handleToggleClick = () => {
    setSlideBarVisible(!isSlideBarVisible);


    if (!isSlideBarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

  };
  return (
    <nav className={`w-100 navbar  navbar-light bg-light px-3`}>
      <button className="border-0 bg-transparent" onClick={handleToggleClick}>
        <Image className="" alt="#" src={vector} />
      </button>
      <span className={` text-dark `}>
        {pathname === "/" && "Dashboard"}
        {pathname === "/admin/myAssessment" && "My Assessments"}
        {pathname === "/admin/reports" && "Reports"}
        {pathname === "/admin/userManagement/roles" && "Roles"}
        {pathname === "/admin/userManagement/groups" && "Groups"}
        {pathname === "/admin/userManagement/users" && "Users"}
      </span>
      <div className="ml-auto">
        <Image alt="#" src={searchCircle} className='h-5' /> &nbsp;
        <Image alt="#" src={Notification} /> &nbsp;
        <Image alt="#" src={Query} />
      </div>
      {isSlideBarVisible && (
        <>

          <MobileSidebar handleCloseSidebar={() => setSlideBarVisible(false)} />
        </>
      )}
    </nav>
  )
}


const NavBar = () => {
  return (
    <div className={styles.navbar_container}>
      <nav className={`navbar  navbar-light bg-light d-none d-lg-block px-2`}>
        <div className={`container-fluid `}>
          <div className={`d-flex align-items-center`}>
            <div className={`rounded d-flex align-items-center  ${styles.search_bar}`}>
              <BsSearch className={"ms-3 "} />
              <input type="search" className="border-0 p-1 m-1 text-dark shadow-none" placeholder="Search.." />
            </div>
          </div>
          <div className={`d-flex align-items-center `}>
            <Image alt="#" src={Notification} /> &nbsp; &nbsp;
            <Image alt="#" src={Query} />
          </div>
        </div>
      </nav>
      <nav className='d-block d-lg-none'>
        <MobileNavBar />
      </nav>
    </div>
  )
}

export default NavBar