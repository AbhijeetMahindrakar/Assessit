'use client'
import React, { useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import assessItImg from '../../../public/images/sidebar/assessIt_icon_full.svg';
import { TbReportAnalytics } from 'react-icons/tb';
import { RiBarChartBoxLine, RiDashboardLine } from 'react-icons/ri';
import { FaRegUser, FaRegUserCircle } from 'react-icons/fa';
import { Menu, MenuItem } from "@mui/material";
import { CgFileDocument, CgLogOut, CgPassword, CgProfile } from 'react-icons/cg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { usePathname } from 'next/navigation'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import {useSession, signOut} from 'next-auth/react';
import { Adamina } from 'next/font/google';



export const SIDEBAR_MENU = [
  {
    key: 1,
    name: "Dashboard",
    url: "/",
    icon: <RiDashboardLine />,
    subMenu: false
  },
  {
    key: 2,
    name: "My Assessments",
    url: "/myassessment/newassessment",
    icon: <RiBarChartBoxLine />,
    subMenu: false
  },
  {
    key: 3,
    name: "Report",
    url: "/reports",
    icon: <TbReportAnalytics />,
    subMenu: false
  },
  {
    key: 4,
    name: "User Management",
    url: "/userManagements",
    icon: <FaRegUser />,
    subMenu: true,
    dropdown: [
      {
        key: 'role',
        name: "Roles",
        url: "/userManagements/roles",
      },
      {
        key: 'user',
        name: "Users",
        url: "/userManagements/users",
      },
      {
        key: 'group',
        name: "Groups",
        url: "/userManagements/groups",
      }
    ]
  }
];

const SideBar = () => {
  const pathname = usePathname()
  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClose = () => { setAnchorEl(null); }
  const handleClick = (event: any) => { setAnchorEl(event.currentTarget); }

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
 console.log(status)
  if (status === "authenticated")console.log(session);

  return (
    <div className=' '>
      <div className={`d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100 px-1 d-none d-lg-block ${styles.sidebar}`}>
        <Image className="mt-3 mb-5" alt="#" src={assessItImg} />

        <ul className={`list-unstyled flex-column mb-auto align-items-center align-items-sm-start align-items-xxl-center align-items-xl-center fs-6 ${styles.sidebar_unoder} `} >

          {SIDEBAR_MENU.map((item) => {
            const activePage =
              item.url !== '/' &&
              pathname.includes(item.url) &&
              styles.active
            const activeHomePage =
              item.url === '/' && pathname === '/' && styles.active
            return (
              <li className={` text-white `} key={item.key} >
                {item.subMenu ? (
                  <div>
                    <div className={`d-flex align-items-center px-2 align-middle gap-2 fs-6 ${styles.pointer}  ${styles.sidebar_items} ${activePage || activeHomePage} ${isDropdownOpen && styles.active} `} onClick={handleDropdownToggle}>
                      {item.icon}
                      {item.name}
                      {isDropdownOpen ?
                        <RiArrowDropUpLine size={20} /> :
                        <RiArrowDropDownLine size={20} />
                      }
                    </div>
                    {isDropdownOpen && (
                      <ul className={`bg-light ${styles.dropdown_menu}`} key={item.key} >
                        {item.dropdown?.map((subItem) => {
                          const activeSubPage = subItem.url !== '/' && pathname.includes(subItem.url) && styles.sub_menu_active
                          return (
                            // eslint-disable-next-line react/jsx-key
                            <li className='list-group-item'>
                              <Link href={subItem.url} key={subItem.key} className={`text-decoration-none ${styles.sub_menu_deactive}  ${styles.user_dropdown}
                              ${activeSubPage}`}>
                                <div className={`${styles.dropdown_item}`}>{subItem.name}</div>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href={item.url} key={item.key} className={` d-flex align-items-center px-2 align-middle fs-6 gap-2 text-decoration-none   ${styles.sidebar_items} ${activePage || activeHomePage} ${styles.sidebar_unoder} `} >
                    {item.icon}
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <div>
          <label className={`d-flex align-items-center text-white text-decoration-none ${styles.admin}`}>
            <div className='d-flex justify-content-between align-items-center '>
              <div className='d-flex'>
                <FaRegUserCircle size={40} />
                <div className="d-flex flex-column" style={{ width: "109px" }}>
                  <strong className={`d-sm-inline mx-3 ${styles.username}`}>{session?.user?.name}</strong>
                  <span className={`d-sm-inline mx-3 ${styles.userRole}`}>{session?.user?.isAdmin?"Admin":"User"}</span>
                </div>
              </div>
              <div><BsThreeDotsVertical style={{ fontSize: "20px", marginLeft: "-7px", }} onClick={handleClick} /></div>
            </div>
          </label>
        </div>
        {/* profile menu for user profile */}
        <Menu style={{ top: "-5px", left: "40px", fontSize: "20px" }} keepMounted anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
          <MenuItem style={{ fontSize: "20px", marginBottom: "-18px", marginTop: "-8px" }}>
            <CgProfile style={{ fontSize: "20px" }} /> &nbsp;
            Profile
          </MenuItem><hr />
          <MenuItem style={{ fontSize: "20px", marginBottom: "-18px", marginTop: "-18px" }}>
            <CgPassword style={{ fontSize: "20px" }} /> &nbsp;
            Change Password
          </MenuItem><hr />
          <MenuItem style={{ fontSize: "20px", marginBottom: "-18px", marginTop: "-18px" }}>
            <CgFileDocument style={{ fontSize: "20px" }} /> &nbsp;
            Privacy Policies
          </MenuItem><hr />
          <MenuItem style={{ color: "#3340B1", fontSize: "20px", marginBottom: "-8px", marginTop: "-18px" }} onClick={()=>signOut()}>
            <CgLogOut style={{ fontSize: "20px" }} /> &nbsp;
            Log out
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};



export default SideBar


