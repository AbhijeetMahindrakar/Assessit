"use client"
import React, { useState } from 'react';
import { Modal, Form, Button, Pagination } from 'react-bootstrap';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Userdata from '../userData';
import Sorting from '../../../../public/images/sorting.svg';
import styles from './styles.module.css';
import RoleEdit from "../../../../public/images/Propertyedit.svg";
import RoleEDelete from "../../../../public/images/PropertyDelete.svg";

interface UserData {
  sno: number;
  Name: string;
  EmailID: string;
  Group: string;
  Role: string;
  CreatedOn: string;
  id: string; // Assuming id is a string
}

const User: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [editPopup, setShowPopupTest] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [role, setRole] = useState<string>('');

  const handleRowDeletion = (rowIndex: number) => {
    // Implementation of handleRowDeletion function
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handlePaginationClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (column: string) => {
    // Implementation of handleSort function
  };

  const handleAddMember = () => {
    setShowPopup(false);
    // Implementation of handleAddMember function
  };

   const totalItems: number = Userdata.length;
  const itemsPerPage: number = 4;
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: UserData[] = Userdata.slice(indexOfFirstItem, indexOfLastItem);

  const sortedItems: UserData[] = [...currentItems].sort((a, b) => {
    // Implementation of sorting logic
    return 0;
  });

  return (
    <div className="table-responsive mt-1">
      <div className={`mt-1 ${styles.total_card}`}>
        <div className="d-flex align-items-center  justify-content-between">
          
            <div className={`text-dark ${styles.user_title}`}>Users</div>
            {/* <Button variant="link" onClick={() => props.stepChange(props.step - 1)}></Button> */}
          
            <div className={`${styles.dropdowns_tab}`}>
              <div className={`d-none d-md-inline  ${styles.group_select}`}>
                <select className="form-select form-select-mb" aria-label=".form-select-lg example">
                  <option selected>Select Category</option>
                  <option value="1">HR</option>
                  <option value="2">Development</option>
                  <option value="3">Infra</option>
                </select>
              </div>
            </div>
        </div>


        <Modal show={editPopup} onHide={() => setShowPopupTest(false)}>
        <div className={`${styles.EditMember}`}>
            <Modal.Header closeButton className={`${styles.EditMemberTitle}`}>
              <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Form.Group controlId="formRoles">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="form-control" placeholder="Gretchen Press"
                  onChange={(e) => setRole(e.target.value)} 
                >    
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formRoles">
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  className="form-control" placeholder="Gretchen@gmail.com" 
                  onChange={(e) => setRole(e.target.value)} 
                >   
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formRoles">
                <Form.Label>Select Role</Form.Label>
                <Form.Control
                  as="select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="" disabled selected>Admin </option>
                  <option value="admin">admin</option>
                  <option value="Leader">Leader</option>
                  <option value="Super admin">Super admin</option>
                </Form.Control>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowPopupTest(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleAddMember}>
                Save
              </Button>
            </Modal.Footer>
          </div>
        </Modal>


        <Modal show={showPopup} onHide={() => setShowPopup(false)}>
        <div className={`${styles.add_role_user}`}>
            <Modal.Header closeButton className={`${styles.AddMemberTitle}`}>
              <Modal.Title>
                <span className={styles.AddRoleTitle}>Add Role</span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formRoles">
                <Form.Label>Select Role</Form.Label>
                <Form.Control
                  as="select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="" disabled selected>Select </option>
                  <option value="admin">admin</option>
                  <option value="Leader">Leader</option>
                  <option value="Super admin">Super admin</option>
                </Form.Control>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowPopup(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleAddMember}>
                Add
              </Button>
            </Modal.Footer>
          </div>
        </Modal>

        <table className={`${styles.user_table}`}>
        <thead>
            <tr>
              <th>S.No</th>
              <th>
                <div className="d-flex align-items-center">
                  Name
                  <Button variant="link" onClick={() => handleSort('Name')}>
                    <Image alt="#" src={Sorting} />
                  </Button>
                </div>
              </th>
              <th>Email ID</th>
              <th>Group</th>
              <th>Role</th>
              <th>
                <div className="d-flex align-items-center">
                  Created On
                  <Button variant="link" onClick={() => handleSort('CreatedOn')}>
                    <Image alt="#" src={Sorting} />
                  </Button>
                </div>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((User, index) => (
              <tr key={index} className={`m-4 ${styles.row}`}>
                <td>{User.sno}</td>
                <td>{User.Name}</td>
                <td>{User.EmailID}</td>
                <td>{User.Group}</td>
                <td>
                  <Button variant ="link" className={styles.AddRoleCell} 
                  onClick={() => {
                    setSelectedUserId(User.id);
                    setShowPopup(true);
                  }}
                >
                  {User.Role}
                  </Button>
                </td>
                <td>{User.CreatedOn}</td>
                <td>
                  <div className="d-flex align-items-center  g-5">
                    <div className={`${styles.RoleEditContainer} me-2`}>
                      <Image className={`${styles.custommessageframerole}`} alt="#" src={RoleEdit} 
                       onClick={() => {
                        setSelectedUserId(User.id);
                        setShowPopupTest(true);
                      }}/>
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
        <div className="d-flex justify-content-center">
          <Pagination>
            {/* Pagination items */}
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default User;
