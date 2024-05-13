"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ActivityData from '../activityData'
// import styles from '@/styles/report.module.css';
import styles from "./styles.module.css"
import CalendarImage from "../../../../public/images/calender.svg"
// import CalendarImage from '@/assets/images/calender.svg';
import { TbMathGreater } from 'react-icons/tb';
import Link from 'next/link';

import { Container, Table, Pagination, Button } from 'react-bootstrap';
import Sorting from "../../../../public/images/sorting.svg"
// import { Link } from 'react-bootstrap/lib/Navbar';
// import Sorting from '@/assets/images/sorting.svg';

interface Activity {
  sno: number;
  User: string;
  IpAddress: string;
  Activity: string;
  DateTime: string;
}

const ActivityLog: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const totalItems: number = ActivityData.length;
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: Activity[] = ActivityData.slice(indexOfFirstItem, indexOfLastItem);

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

  const sortedItems: Activity[] = [...currentItems].sort((a: any, b: any) => {
    if (sortColumn) {
      if (sortOrder === 'asc') {
        return a[sortColumn].localeCompare(b[sortColumn]);
      } else {
        return b[sortColumn].localeCompare(a[sortColumn]);
      }
    }
    return 0;
  });

  return (
    <div className="table-responsive mt-1  ">
      <div className={`mt-1 ${styles.total_card}`}>
        <div className="fixed-div">
          <div className="d-flex justify-content-between">
            <div className='d-flex gap-3 align-items-center justify-content-center'>
              <div className="d-flex gap-2 align-items-center justify-content-center ">
                <h5 className={` h6 text-dark d-none d-md-block`}>Activity Log</h5>
              </div>
              <div className='d-flex gap-2 align-items-center justify-content-center'>
                <Link href="/reports" className="text-decoration-none ">
                  {/* <Button variant="link"> */}
                  <h5 className={` ${styles.reports_tab} `}>
                    Reports
                    <span className={`${styles.greater_than_symbol} ms-1`}>
                      <TbMathGreater />
                    </span>
                  </h5>
                  {/* </Button> */}
                </Link>
                <h6 className={` ${styles.activity_log_tab}`}>Activity Log</h6>
              </div>
            </div>
            <div className={`${styles.dropdowns_tab}`}>
              <div className={`d-none d-md-inline ${styles.datepicker_container}`}>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  placeholderText="DD/MM/YYYY"
                  dateFormat="dd/MM/yyyy"
                  className={`${styles.datepicker_custom}`}
                // wrapperClassName={`${styles.datepickerWrapper}`}
                />
                <Image 
                src={CalendarImage} 
                alt="Calendar" 
                width={20} 
                height={20} 
                />
              </div>
            </div>

          </div>
        </div>
        <div className='scrollable-table-container'> 
          <table className={`${styles.activity_log_table}`}>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>
                  <div className="d-flex align-items-center">
                    User
                    <Button variant="link" onClick={() => handleSort('User')}>
                      {/* Update the import of Sorting */}
                      <Image alt="#" src={Sorting} />
                    </Button>
                  </div>
                </th>
                <th>IP Address</th>
                <th>Activity</th>
                <th>
                  <div className="d-flex align-items-center">
                    Date & Time
                    <Button variant="link" onClick={() => handleSort('DateTime')}>
                      {/* Update the import of Sorting */}
                      <Image alt="#" src={Sorting} />
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((activity, index) => (
                <tr key={index} className={`m-4 ${styles.row}`}>
                  <td>{activity.sno}</td>
                  <td>{activity.User}</td>
                  <td>{activity.IpAddress}</td>
                  <td>{activity.Activity}</td>
                  <td>{activity.DateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="d-flex justify-content-center">
          <Pagination>
            <Pagination.Prev onClick={() => handlePaginationClick(currentPage - 1)} disabled={currentPage === 1} />
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
          </Pagination>
        </div> */}
      </div>
    </div>
  );
};

export default ActivityLog;
