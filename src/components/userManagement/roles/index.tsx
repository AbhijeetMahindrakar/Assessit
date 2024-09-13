"use client"
import React, { useState } from 'react';
import Image from 'next/image';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import RolesData from '../rolesData'
import styles from './styles.module.css';
import CalendarImage from '@/assets/images/calender.svg';
import { TbMathGreater } from 'react-icons/tb';
// import { Container, Table, Pagination, Button, Modal, Form } from 'react-bootstrap';
import Sorting from "../../../../public/images/sorting.svg";
import { BsPlusSquare } from 'react-icons/bs';
import RoleEdit from '../../../../public/images/Propertyedit.svg';
import RoleEDelete from '../../../../public/images/PropertyDelete.svg';

// interface RoleData {
//     sno: number;
//     Name: string;
//     AddeddOn: string;
//     role: string;
//     All: boolean;
//     Dashboard: boolean;
//     'My Assessment': boolean;
//     Reports: boolean;
//     'User Management': boolean;
//     createdon: string;
//     createdby: string;
//     action: string;
//   }

interface RoleData {
  sno: number;
  // Name: string;
  role: string;
  createdOn: string;
  createdBy: string;
  action: string
  // All: boolean;
  // Dashboard: boolean;
  // 'My Assessment': boolean;
  // Reports: boolean;
  // 'User Management': boolean;
}



const Roles = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [role, setRole] = useState<string>('');
  const [allCheckbox, setAllCheckbox] = useState<boolean>(false);
  const [dashboardCheckbox, setDashboardCheckbox] = useState<boolean>(false);
  const [assessmentCheckbox, setAssessmentCheckbox] = useState<boolean>(false);
  const [reportCheckbox, setReportCheckbox] = useState<boolean>(false);
  const [userManagementCheckbox, setUserManagementCheckbox] = useState<boolean>(false);
  //   const [roleData, setRoleData] = useState<rolesData[]>([...RolesData]);
  const [roleData, setRoleData] = useState<RoleData[]>(RolesData);


  const totalItems: number = roleData.length;
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: RoleData[] = roleData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePaginationClick = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const handleAddRoleClick = (): void => {
    setShowPopup(true);
    setIsEditMode(false);
  };

  const handleEditRoleClick = (): void => {
    setShowPopup(true);
    setIsEditMode(true);
  };

  const handleAddMember = (): void => {
    const newRole: RoleData = {
      sno: RolesData.length + 1,
      // Name: role,
      role: role,
      createdOn: new Date().toLocaleDateString(),
      createdBy: role,
      action: ''
    };

    setRoleData([...roleData, newRole]);
    setRole('');
    setShowPopup(false);
    setIsEditMode(false);
    setAllCheckbox(false);
    setDashboardCheckbox(false);
    setAssessmentCheckbox(false);
    setReportCheckbox(false);
    setUserManagementCheckbox(false);
  };

  const handleRowDeletion = (rowIndex: number): void => {
    const updatedData: RoleData[] = [...roleData];
    updatedData.splice(rowIndex + indexOfFirstItem, 1);
    setRoleData(updatedData);
  };

  const handleSort = (column: string): void => {
    if (column === sortColumn) {
      const newSortOrder: 'asc' | 'desc' = sortOrder === 'asc' ? 'desc' : 'asc';
      setSortOrder(newSortOrder);
    } else {
      setSortOrder('asc');
      setSortColumn(column);
    }
  };

  const sortedItems: RoleData[] = [...currentItems].sort((a: any, b: any) => {
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
    <div className="table-responsive mt-1">
      <div className={`mt-1 ${styles.total_card}`}>

        <div className="d-flex align-items-center justify-content-between ">
          <div className={` text-dark ${styles.Roles_title}`}>Roles</div>
          <Button className={`${styles.Newrolebtn}`} onClick={handleAddRoleClick}>
            <div><BsPlusSquare /></div>
            <div className="d-none d-md-inline">New Role</div>
          </Button>
        </div>

        <Modal show={showPopup} onHide={() => setShowPopup(false)}>
          <div className={`${styles.add_member}`}>
            <Modal.Header closeButton className={`${styles.add_role_title}`}>
              <Modal.Title>{isEditMode ? 'Edit Role' : 'Add Role'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formRoles">
                <Form.Label>Role Name</Form.Label>
                <Form.Control
                  type="role"
                  placeholder="Enter Name"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <div className={`${styles.popup_box}`}>
                  <div className="row">
                    <div className="col-12 justify-content-start mt-4 mb-4 ">
                      <label>Access To:</label>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 ">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="allCheckbox"
                          checked={allCheckbox}
                          onChange={() => setAllCheckbox(!allCheckbox)}
                        />
                        <span>All</span>
                      </div>
                    </div>
                    <div className="col-lg-4  col-md-4 col-sm-6">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="DashboardCheckbox"
                          checked={dashboardCheckbox}
                          onChange={() => setDashboardCheckbox(!dashboardCheckbox)}
                        />
                        <span>Dashboard</span>
                      </div>
                    </div>
                    <div className="col-lg-4  col-md-4 col-sm-6">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="AssessmentCheckbox"
                          checked={assessmentCheckbox}
                          onChange={() => setAssessmentCheckbox(!assessmentCheckbox)}
                        />
                        <span>My&nbsp;Assessment</span>
                      </div>
                    </div>
                    <div className="col-lg-4  col-md-4 col-sm-6">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="reportCheckbox"
                          checked={reportCheckbox}
                          onChange={() => setReportCheckbox(!reportCheckbox)}
                        />
                        <span>Reports</span>
                      </div>
                    </div>
                    <div className="col-lg-4  col-md-4 col-sm-6">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="UserManagementCheckbox"
                          checked={userManagementCheckbox}
                          onChange={() => setUserManagementCheckbox(!userManagementCheckbox)}
                        />
                        <span>User&nbsp;Management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <div className="col-12 d-flex justify-content-end py-2">
                <button type="submit" className={`${styles.form_cancel}`} onClick={() => setShowPopup(false)}>
                  Cancel
                </button>
                <button type="submit" className={`${styles.form_create}`} onClick={handleAddMember}>
                  {isEditMode ? 'Save' : 'Create'}
                </button>
              </div>
            </Modal.Footer>
          </div>
        </Modal>

        <table className={`${styles.roles_table}`}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>
                <div className="d-flex align-items-center">Role</div>
              </th>
              <th>
                Created On
                <Button variant="link" onClick={() => handleSort('createdon')}>
                  <Image alt="#" src={Sorting} />
                </Button>
              </th>
              <th>Created By</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((activity, index) => (
              <tr key={index} className={`m-4 ${styles.row}`}>
                <td>{activity.sno}</td>
                <td>{activity.role}</td>
                <td>{activity.createdOn}</td>
                <td>{activity.createdBy}</td>
                {/* <td>{activity.action}</td> */}
                <td>
                  <div className="d-flex align-items-center  g-5">
                    <div className={`${styles.RoleEditContainer} me-2`}>
                      <span onClick={handleEditRoleClick}>
                        <Image className={`${styles.custommessageframerole}`} alt="#" src={RoleEdit} />
                      </span>
                    </div>
                    <div className={`${styles.RoledeleteContainer} `}>
                      <span onClick={() => handleRowDeletion(index)}>
                        <Image className={`${styles.custommessageframerole}`} alt="#" src={RoleEDelete} />
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
            <Pagination.Next onClick={() => handlePaginationClick(currentPage + 1)} disabled={currentPage === totalPages} />
          </Pagination>
        </div> */}
      </div>
    </div>
  );
};

export default Roles;
