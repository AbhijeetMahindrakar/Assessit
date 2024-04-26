'use client'
import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import { BsSearch,BsQuestionCircle } from 'react-icons/bs'
import Notification from '../../../public/images/navbar/navbar_notification.svg'
import Query from '../../../public/images/navbar/query.svg'
import vector from '../../../public/images/navbar/vector.svg'
import { usePathname } from 'next/navigation'
import searchCircle from '../../../public/images/navbar/search_circle.svg'

const MobileNavBar = () => {
  const pathname = usePathname().toString()
  return (
    <nav className={`w-100 navbar  navbar-light bg-light px-3`}>
    <button className="border-0 bg-transparent" >
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
      <Image alt="#" src={searchCircle} className='h-5'/> &nbsp;
      <Image alt="#" src={Notification} /> &nbsp;
      <Image alt="#" src={Query} />
    </div>
   </nav>
  )
}


const NavBar = () => {
  return (
    <>
    <nav className={`navbar  navbar-light bg-light d-none d-lg-block px-2`}>
    <div className={`container-fluid `}>
      <div className={`d-flex align-items-center`}>
        <div className={`rounded d-flex align-items-center  ${styles.search_bar}`}>
          <BsSearch className={"ms-3 "}/>
          <input type="search" className="border-0 p-1 m-1 text-dark shadow-none" placeholder="Search.."  />
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
  </>
  )
}

export default NavBar