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


const SIDEBAR_MENU = [
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
    url: "/myassessment",
    icon: <RiBarChartBoxLine />,
    subMenu: false
  },
  {
    key: 3,
    name: "Report",
    url: "/report",
    icon: <TbReportAnalytics />,
    subMenu: false
  },
  {
    key: 4,
    name: "User Management",
    url: "/usermanagement",
    icon: <FaRegUser />,
    subMenu: true,
    dropdown: [
      {
        key: 'role',
        name: "Roles",
        url: "/usermanagement/roles",
      },
      {
        key: 'user',
        name: "Users",
        url: "/usermanagement/users",
      },
      {
        key: 'group',
        name: "Groups",
        url: "/usermanagement/groups",
      }
    ]
  }
];

const SideBar = () => {
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClose = () => { setAnchorEl(null); }
  const handleClick = (event: any) => { setAnchorEl(event.currentTarget); }

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className=' '>
      <div className={`d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100 px-3 d-none d-lg-block ${styles.sidebar}`}>
        <Image className="mt-3 mb-5" alt="#" src={assessItImg} />

        <ul className={`nav row nav-pills flex-column mb-auto align-items-center align-items-sm-start `} >

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
                    <div className={`d-flex align-items-center px-3 align-middle gap-2 ${styles.pointer} fs-6 ${styles.sidebar_items} ${activePage || activeHomePage} ${isDropdownOpen && styles.active} `} onClick={handleDropdownToggle}>
                      {item.icon}
                      {item.name}
                      {isDropdownOpen ?
                        <RiArrowDropUpLine size={20} /> :
                        <RiArrowDropDownLine size={20} />
                      }
                    </div>
                    {isDropdownOpen && (
                      <ul className={`bg-light ${styles.dropdown_menu}`} >
                        {item.dropdown?.map((subItem) => {
                          const activeSubPage = subItem.url !== '/' && pathname.includes(subItem.url) && styles.sub_menu_active
                          return (
                            <li className='list-unstyled'>
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
                  <Link href={item.url} className={` d-flex align-items-center px-3 align-middle gap-2 text-decoration-none  fs-6 ${styles.sidebar_items} ${activePage || activeHomePage} `} >
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
            <FaRegUserCircle size={40} />
            <div className="d-flex flex-column" style={{ width: "109px" }}>
              <strong className={`d-sm-inline mx-3 ${styles.username}`}>user.name</strong>
              <span className={`d-sm-inline mx-3 ${styles.userRole}`}>profileRole</span>
            </div>
            <BsThreeDotsVertical style={{ fontSize: "20px", marginLeft: "-7px", }} onClick={handleClick} />
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
          <MenuItem style={{ color: "#3340B1", fontSize: "20px", marginBottom: "-8px", marginTop: "-18px" }} >
            <CgLogOut style={{ fontSize: "20px" }} /> &nbsp;
            Log out
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default SideBar

