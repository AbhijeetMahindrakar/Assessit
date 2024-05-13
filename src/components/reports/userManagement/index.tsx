"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles.module.css';
import CalendarImage from '../../../../public/images/calender.svg';
import { TbMathGreater } from 'react-icons/tb';
import { Pagination, Button } from 'react-bootstrap';
import Sorting from "../../../../public/images/sorting.svg";
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
import Link from 'next/link';

interface User {
  id: string;
  username: string;
  email: string;
  //   group : string;
  roles?: { name: string }[];
  createdTimestamp: number;
}

const UserManagement: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string>('');
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]);
  const [adminApi, setAdminApi] = useState<string[]>([]);
  const [userApi, setUserApi] = useState<string[]>([]);
  const itemsPerPage: number = 5;

  const handleGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const totalItems: number = users.length;
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: User[] = users.slice(indexOfFirstItem, indexOfLastItem);

  //   const handlePaginationClick = (pageNumber: number) => {
  //     setCurrentPage(pageNumber);
  //   };

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      const newSortOrder: 'asc' | 'desc' = sortOrder === 'asc' ? 'desc' : 'asc';
      setSortOrder(newSortOrder);
    } else {
      setSortOrder('asc');
      setSortColumn(column);
    }
  };

  const sortedItems: User[] = [...currentItems].sort((a: any, b: any) => {
    if (sortColumn) {
      if (sortOrder === 'asc') {
        return a[sortColumn]?.localeCompare(b[sortColumn] || '');
      } else {
        return b[sortColumn]?.localeCompare(a[sortColumn] || '');
      }
    }
    return 0;
  });

  //   const { data: session, status } = useSession();
  //   const router = useRouter();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         await Promise.all([callAdminRoleApi(), callUserRoleApi(), callUserApi()]);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };

  //     fetchData();
  //   }, [session]);

  //   if (status === "loading") {
  //     return <p>Loading...</p>
  //   } else if (status === "authenticated" && session?.user?.roles?.includes("User")) {
  //     return <p>forbidden...</p>
  //   }

  //   async function callUserApi() {
  //     try {
  //       const response = await fetch("http://localhost:8080/auth/admin/realms/assessIT/users", {
  //         method: 'GET',
  //         headers: {
  //           "Authorization": "Bearer " + session?.user?.access_token,
  //           "Content-Type": "application/json"
  //         }
  //       });
  //       const result: User[] = await response.json();
  //       setUsers(result);
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   }

  //   async function callAdminRoleApi() {
  //     try {
  //       const response = await fetch("http://localhost:8080/auth/admin/realms/assessIT/roles/Admin/users", {
  //         method: 'GET',
  //         headers: {
  //           "Authorization": "Bearer " + session?.user?.access_token,
  //           "Content-Type": "application/json"
  //         }
  //       });
  //       const result: { id: string }[] = await response.json();
  //       setAdminApi(result.map(user => user.id));
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   }

  //   async function callUserRoleApi() {
  //     try {
  //       const response = await fetch("http://localhost:8080/auth/admin/realms/assessIT/roles/User/users", {
  //         method: 'GET',
  //         headers: {
  //           "Authorization": "Bearer " + session?.user?.access_token,
  //           "Content-Type": "application/json"
  //         }
  //       });
  //       const result: { id: string }[] = await response.json();
  //       setUserApi(result.map(user => user.id));
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   }

  return (
    <div className="table-responsive">
      <div className={`mt-1 ${styles.total_card}`} >
        <div className="d-flex justify-content-between align-items-md-center">
          <div className="d-flex gap-3">
            <div className="d-flex gap-2 align-items-center justify-content-center ">
              <h4 className={`h6 text-dark d-none d-lg-block`}>User Management</h4>
            </div>
            <div className='d-flex gap-2 align-items-center justify-content-center'>
              <Link href="/reports" className="text-decoration-none ">
                {/* <Button variant="link"> */}
                <h5 className={` ${styles.reports_tab}`}>
                  Reports
                  <span className={` ms-1`}>
                    <TbMathGreater />
                  </span>
                </h5>
                {/* </Button> */}
              </Link>
              <h6 className={`${styles.user_management_tab}`}>User Management</h6>
            </div>
          </div>
          
            <div className={` ${styles.dropdowns_tab}`}>
              <div className={` d-none d-md-inline ${styles.datepicker_container}`}>
                <div className="" aria-label=".form-select-lg example" >
                  <input type="date" className={styles.date_input}></input>
                </div>
                {/* <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  placeholderText="DD/MM/YYYY"
                  dateFormat="dd/MM/yyyy"
                  className={`${styles.datepickerCustom}`}
                  wrapperClassName={`${styles.datepickerWrapper}`}
                />
                <Image
                  src={CalendarImage}
                  alt="Calendar"
                  className={styles.calendarImage}
                  width={20}
                  height={20}
                /> */}
              </div>

              <div className={`d-none d-md-inline  ${styles.group_select}`}>
                <select className="form-select form-select-mb" aria-label=".form-select-lg example">
                  <option selected>Select Group</option>
                  <option value="1">HR</option>
                  <option value="2">Development</option>
                  <option value="3">Infra</option>
                </select>
              </div>
            </div>
          
        </div>
        <table className={`${styles.user_management_table}`}>
          <thead>
            <tr>
              <th className='p-2'>S.No.</th>
              <th className='p-2'><div className="d-flex align-items-center">
                Name
                <Button variant="link" onClick={() => handleSort('username')}>
                  <Image alt="#" src={Sorting} />
                </Button>
              </div></th>
              <th className='p-2'>Email Id</th>
              <th className='p-2'>Group</th>
              <th className='p-2'>Role</th>
              <th className='p-2'><div className="d-flex align-items-center">
                Created On
                <Button variant="link" onClick={() => handleSort('createdTimestamp')}>
                  <Image alt="#" src={Sorting} />
                </Button>
              </div></th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((userManagement, index) => {
              const formattedDate = new Date(userManagement.createdTimestamp * 1000).toLocaleString();
              const userRoles = userManagement.roles ? userManagement.roles.map(role => role.name).join(', ') : '';
              const userTrimmed = userManagement.id;
              //   const isInDesignGroup = designApiUsernames && designApiUsernames.length > 0 && designApiUsernames.some(group => {
              //     return group.includes(userTrimmed);
              //   });

              //   const isInDevelopmentGroup = developmentApiUsernames && developmentApiUsernames.length > 0 && developmentApiUsernames.some(group => {
              //     return group.includes(userTrimmed);
              //   });
              //   const group = isInDesignGroup ? "Design" : (isInDevelopmentGroup ? "Development" : "NoGroup");

              const isAdmin = adminApi.length > 0 && adminApi.some(role => {
                return role.includes(userTrimmed);
              });

              const isUser = userApi.length > 0 && userApi.some(role => {
                return role.includes(userTrimmed);
              });

              const role = isAdmin ? "Admin" : (isUser ? "User" : "NoRole");

              return (
                <tr key={index} className={`${styles.row}`}>
                  <td className='p-2'>{index + 1}</td>
                  <td className='p-2'>{userManagement.username}</td>
                  <td className='p-2'>{userManagement.email}</td>
                  {/* <td className='p-2'>{group}</td> */}
                  <td className='p-2'>{role}</td>
                  <td className='p-2'>{formattedDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          {/* <Pagination>
            <Pagination.Prev
              onClick={() => handlePaginationClick(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePaginationClick(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePaginationClick(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination> */}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
