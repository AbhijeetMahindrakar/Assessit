"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles.module.css';
import CalendarImage from '../../../../public/images/calender.svg';
import { TbMathGreater } from 'react-icons/tb';
import { Container, Table, Pagination, Button } from 'react-bootstrap';
import Sorting from "../../../../public/images/sorting.svg";
// import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface Assessment {
  name: string;
  createdBy: string;
  assessmentGroup: string;
  status: string;
  createdOn: string; // You might want to change this to Date if it's a date string
}

const AllAssessments: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string>('');
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;
  //   const { data: session } = useSession();
  const [assessmentData, setAssessmentData] = useState<Assessment[]>([]);

  //   useEffect(() => {
  //     callAllAssessmentsApi()
  //       .then(data => setAssessmentData(data))
  //       .catch(error => console.log('Error fetching assessment data', error));
  //   }, []);

  const handleGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const getStatusBulletColor = (status: string): string => {
    switch (status) {
      case 'PUBLISHED':
        return 'rgba(67, 153, 81, 1)';
      case 'DRAFT':
        return 'rgba(173, 173, 173, 1)';
      case 'DELETED':
        return 'rgba(243, 86, 86, 1)';
      default:
        return '#808080';
    }
  };

  const totalItems: number = assessmentData.length;
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: Assessment[] = assessmentData.slice(indexOfFirstItem, indexOfLastItem);

  //   const handlePaginationClick = (pageNumber: number) => {
  //     setCurrentPage(pageNumber);
  //   };

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      const newSortOrder: 'asc' | 'desc' = sortOrder === 'asc' ? 'desc' : 'asc';
      console.log('New Sort Order:', newSortOrder);
      setSortOrder(newSortOrder);
    } else {
      console.log('Set Sort Column:', column);
      setSortOrder('asc');
      setSortColumn(column);
    }
  };

  const getSerialNumber = (index: number): number => {
    return (currentPage - 1) * itemsPerPage + index + 1;
  };

  //   const callAllAssessmentsApi = (): Promise<Assessment[]> => {
  //     return new Promise((resolve, reject) => {
  //       var myHeaders = new Headers();
  //       myHeaders.append("Authorization", "Bearer " + session?.user?.access_token);
  //       myHeaders.append("Content-Type", "application/json");

  //       var graphql = JSON.stringify({
  //         query: "query{\r\n    assessments{\r\n        name\r\n        createdBy\r\n        assessmentGroup\r\n        status\r\n        createdOn\r\n    }\r\n}",
  //         variables: {}
  //       });
  //       var requestOptions = {
  //         method: 'POST',
  //         headers: myHeaders,
  //         body: graphql,
  //         redirect: 'follow'
  //       };

  //       fetch("http://localhost:9000/assessment-tool/admin", requestOptions)
  //         .then(response => response.json())
  //         .then(result => {
  //           //console.log(result.data.assessments);
  //           resolve(result.data.assessments);
  //         })
  //         .catch(error => {
  //           console.log('error', error);
  //           reject(error);
  //         });
  //     });
  //   };

  const sortedItems: Assessment[] = [...currentItems].sort((a: any, b: any) => {
    if (sortColumn === 'createdOn') {
      const dateA: Date = a.createdOn ? new Date(a.createdOn) : new Date(0); // Use correct field name
      const dateB: Date = b.createdOn ? new Date(b.createdOn) : new Date(0); // Use correct field name
      return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    } else {
      // Default sorting for other columns (Assessment Name, Group Assigned, etc.)
      const valueA: string = a[sortColumn] || '';
      const valueB: string = b[sortColumn] || '';
      return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }
  });

  return (
    <div>
      <div className="table-responsive mt-1">
        <div className={`mt-1 ${styles.total_card}`} >
          <div className="d-flex justify-content-between align-items-md-center ">
            <div className="d-flex gap-3 ">
              <div className="d-flex gap-2 align-items-center justify-content-center ">
                <h4 className={`h6 text-dark d-none d-lg-block `}>All Assessments</h4>
              </div>
              <div className='d-flex gap-2 align-items-center justify-content-center'>
                <Link href="/reports" className="text-decoration-none ">
                  {/* <Button variant="link"> */}
                  <h5 className={` ${styles.reports_tab}`}>
                    Reports
                    <span className={`${styles.greater_than_symbol} ms-1`}>
                      <TbMathGreater />
                    </span>
                  </h5>
                  {/* </Button> */}
                </Link>
                <h6 className={` ${styles.all_assessment_tab}`}>All Assessments</h6>
              </div>
            </div>
            <div className={`${styles.dropdowns_tab}`}>
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
                /> */}
                {/* <Image
                  src={CalendarImage}
                  alt="Calendar"
                  className={`${styles.calendarImage}`}
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
              {/* <div className={`d-none d-md-inline  ${styles.group_select}`}>
                <select id="group-dropdown" value={selectedGroup} onChange={handleGroupChange} >
                  <option value="group1">Select Group</option>
                  <option value="group1">HR</option>
                  <option value="group2">Development</option>
                  <option value="group3">Infra</option>
                </select>
              </div> */}
            </div>
          </div>
          <table className={`${styles.all_assessment_table}`}>
            <thead>
              <tr>
                <th className='p-2'>S.No.</th>
                <th className='p-2'>Assessment Name</th>
                <th className='p-2'>Group Assigned</th>
                <th className='p-2'>Status</th>
                <th className='p-2'><div className="d-flex align-items-center">
                  Created On
                  <Button variant="link" onClick={() => handleSort('createdOn')}>
                    <Image alt="#" src={Sorting} />
                  </Button>
                </div></th>
                <th className='p-2'>Created By</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((allAssessments, index) => {
                return (
                  <tr key={index} className={`${styles.row}`}>
                    <td className='p-2'>{getSerialNumber(index)}</td>
                    <td className='p-2'>{allAssessments.name}</td>
                    <td className='p-2'>{allAssessments.assessmentGroup}</td>
                    <td className='p-2'>
                      <span
                        className={styles.statusBullet}
                        style={{
                          backgroundColor: getStatusBulletColor(allAssessments.status),
                          display: 'inline-block',
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          marginRight: '5px',
                        }}
                      ></span>
                      {allAssessments.status}
                    </td>
                    <td className='p-2'>{allAssessments.createdOn}</td>
                    <td className='p-2'>{allAssessments.createdBy}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* <div className="d-flex justify-content-center">
            <Pagination>
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
            </Pagination>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AllAssessments;
