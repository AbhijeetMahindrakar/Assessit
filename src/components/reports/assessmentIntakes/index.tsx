"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles.module.css';
import { TbMathGreater } from 'react-icons/tb';
import CalendarImage from '../../../../public/images/calender.svg';
import { Container, Table, Pagination, Button } from 'react-bootstrap';
import Sorting from "../../../../public/images/sorting.svg";
// import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface Submission {
  userName: string;
  assessmentName: string;
  time: string;
  totalScore: number;
}

interface Assessment {
  id: string;
  name: string;
}

const AssessmentIntakes: React.FC = (props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;
  // const { data: session } = useSession();
  const [assessmentData, setAssessmentData] = useState<Submission[]>([]);

  // useEffect(() => {
  //   callIntakeAssessmentsApi();
  // }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const totalItems: number = assessmentData.length;
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: Submission[] = assessmentData.slice(indexOfFirstItem, indexOfLastItem);

  // const handlePaginationClick = (pageNumber: number) => {
  //   setCurrentPage(pageNumber);
  // };

  const getSerialNumber = (index: number): number => {
    return (currentPage - 1) * itemsPerPage + index + 1;
  };

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

  const sortedItems: Submission[] = [...currentItems].sort((a, b) => {
    if (sortColumn === 'CandidateName') {
      const nameA: string = a.userName || ''; // Handle undefined values
      const nameB: string = b.userName || '';
      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    } else if (sortColumn === 'SubmittedOn') {
      const dateA: Date = a.time ? new Date(a.time) : new Date(0); // Handle undefined values
      const dateB: Date = b.time ? new Date(b.time) : new Date(0);
      return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    }
    return 0;
  });

  // const callAssessmentNameApi = async (): Promise<Assessment[]> => {
  //   try {
  //     const myHeaders: Headers = new Headers();
  //     myHeaders.append('Authorization', 'Bearer ' + session?.user?.access_token);
  //     myHeaders.append('Content-Type', 'application/json');

  //     const graphql: string = JSON.stringify({
  //       query: 'query{\r\n    assessments{\r\n        id\r\n        name\r\n    }\r\n}',
  //       variables: {}
  //     });

  //     const requestOptions: RequestInit = {
  //       method: 'POST',
  //       headers: myHeaders,
  //       body: graphql,
  //       redirect: 'follow'
  //     };

  //     const response: Response = await fetch('http://localhost:9000/assessment-tool/admin', requestOptions);
  //     const result: { data: { assessments: Assessment[] } } = await response.json();

  //     return result.data.assessments || [];
  //   } catch (error) {
  //     console.log('error', error);
  //     return [];
  //   }
  // };

  // const callIntakeAssessmentsApi = async () => {
  //   try {
  //     const myHeaders: Headers = new Headers();
  //     myHeaders.append('Authorization', 'Bearer ' + session?.user?.access_token);
  //     myHeaders.append('Content-Type', 'application/json');

  //     const graphql: string = JSON.stringify({
  //       query:
  //         'query{\r\n    submissions{\r\n        userName\r\n        assessmentId\r\n        time\r\n        totalScore\r\n    }\r\n}',
  //       variables: {}
  //     });

  //     const requestOptions: RequestInit = {
  //       method: 'POST',
  //       headers: myHeaders,
  //       body: graphql,
  //       redirect: 'follow'
  //     };

  //     const response: Response = await fetch('http://localhost:9000/assessment-tool/admin', requestOptions);
  //     const result: { data: { submissions: Submission[] } } = await response.json();

  //     if (result.data && result.data.submissions) {
  //       const assessmentNames: Assessment[] = await callAssessmentNameApi();

  //       // Map assessmentId to assessmentName
  //       const assessmentNameMap: { [id: string]: string } = {};
  //       assessmentNames.forEach((assessment) => {
  //         assessmentNameMap[assessment.id] = assessment.name;
  //       });

  //       // Update assessmentData with assessment names
  //       const updatedAssessmentData: Submission[] = result.data.submissions.map((submission) => {
  //         return {
  //           ...submission,
  //           assessmentName: assessmentNameMap[submission.assessmentId] || 'N/A'
  //         };
  //       });

  //       setAssessmentData(updatedAssessmentData);
  //     }
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  return (
    <div>
      <div className="table-responsive">
        <div className={`mt-1 ${styles.total_card}`}>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-3 align-items-center justify-content-center">
              <div className="d-flex gap-2 align-items-center justify-content-center ">
                <h5 className={`h6 text-dark d-none d-lg-block`}>Assessment Intakes</h5>
              </div>
              <div className='d-flex gap-2 align-items-center justify-content-center'>
                <Link href="/reports" className="text-decoration-none ">
                  {/* <Button variant="link"> */}
                  <h5 className={`${styles.reports_tab}`}>
                    Reports
                    <span className={` ms-1`}>
                      <TbMathGreater />
                    </span>
                  </h5>
                  {/* </Button> */}
                </Link>
                <h6 className={` ${styles.assessment_intake_tab}`}>Assessment Intakes</h6>
              </div>
            </div>
            <div>
              <div className={` ${styles.dropdowns_tab}`}>
                <div className={` d-none d-md-inline ${styles.datepicker_container}`}>
                <div className="" aria-label=".form-select-lg example" >
                  <input type="date" className={`${styles.date_input}`}></input>   
                </div>
                  {/* <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText="DD/MM/YYYY"
                    dateFormat="dd/MM/yyyy"
                    className={`${styles.datepickerCustom}`}
                    // wrapperClassName={`${styles.datepickerWrapper}`}
                  />
                  <Image
                    src={CalendarImage}
                    alt="Calendar"
                    className={styles.calendarImage}
                    width={20}
                    height={20}
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <table className={`${styles.assessment_intake_table}`}>
            <thead>
              <tr>
                <th className='p-2'>S.No.</th>
                <th className='p-2'><div className="d-flex align-items-center">
                  Candidate Name
                  <Button variant="link" onClick={() => handleSort('CandidateName')}>
                    <Image alt="#" src={Sorting} />
                  </Button>
                </div></th>
                <th className='p-2'>Assessment</th>
                <th className='p-2'><div className="d-flex align-items-center">
                  Submitted On
                  <Button variant="link" onClick={() => handleSort('SubmittedOn')}>
                    <Image alt="#" src={Sorting} />
                  </Button>
                </div></th>
                <th className='p-2'>Score</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((assessment, index) => (
                <tr key={index} className={`m-4 ${styles.row}`}>
                  <td className='p-2'>{getSerialNumber(index)}</td>
                  <td className='p-2'>{assessment.userName}</td>
                  <td className='p-2'>{assessment.assessmentName}</td>
                  <td className='p-2'>{assessment.time}</td>
                  <td className={`p-2 ${index % 2 === 0 ? styles.even_row : styles.odd_row}`}>{assessment.totalScore + '%'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <Pagination className="justify-content-center">
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

export default AssessmentIntakes;
