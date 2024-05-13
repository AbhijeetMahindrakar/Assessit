"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import { TbMathGreater } from 'react-icons/tb';
import { Container, Table, Pagination, Button, Modal, Form } from 'react-bootstrap';
import Sorting from '../../../../public/images/sorting.svg';
import { BsPlusSquare } from 'react-icons/bs';
import DesignGroupData from '../designGroupData';
import Link from 'next/link';

interface DesignGroupProps {
  step: number;
  stepChange: (step: number) => void;
}

interface DesignGroupItem {
  sno: number;
  Name: string;
  EmailId: string;
  AddeddOn: string;
}

const DesignGroup: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [designGroupData, setDesignGroupData] = useState<DesignGroupItem[]>([...DesignGroupData]);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;

  const handleDateChange = (date: Date) => {
    // Handle date change if needed
  };

  const totalItems: number = designGroupData.length;
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: DesignGroupItem[] = designGroupData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePaginationClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      const newSortOrder: 'asc' | 'desc' = sortOrder === 'asc' ? 'desc' : 'asc';
      setSortOrder(newSortOrder);
    } else {
      setSortOrder('asc');
      setSortColumn(column);
    }
  };

  const handleRowRemoval = (rowIndex: number) => {
    const updatedData: DesignGroupItem[] = [...designGroupData];
    updatedData.splice(rowIndex + indexOfFirstItem, 1);
    setDesignGroupData(updatedData);
  };

  const sortedItems: DesignGroupItem[] = [...currentItems].sort((a:any, b:any) => {
    if (sortColumn) {
      if (sortOrder === 'asc') {
        return a[sortColumn].localeCompare(b[sortColumn]);
      } else {
        return b[sortColumn].localeCompare(a[sortColumn]);
      }
    }
    return 0;
  });

  const handleAddMember = () => {
    const newMember: DesignGroupItem = {
      sno: designGroupData.length + 1,
      Name: 'New Member',
      EmailId: email,
      AddeddOn: new Date().toLocaleDateString(),
    };

    setDesignGroupData([...designGroupData, newMember]);
    setEmail('');
    setShowPopup(false);
  };

  return (
    <div className="table-responsive mt-1">
      <div className={`mt-1 ${styles.total_card}`}>
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-3 align-items-center justify-content-center">
          <div className='d-flex gap-2 align-items-center justify-content-center'>
            <h5 className={` h6 text-dark d-none d-md-block `}>Design Group</h5>
           </div> 
           <div  className='d-flex gap-2 align-items-center justify-content-center'>
            <Link href ="/userManagements/groups " className="text-decoration-none" >
            {/* <Button> */}
              <h5 className={` ${styles.groups_tab} `}>
                Groups
                <span className={`${styles.greater_than_symbol} ms-1`}>
                  <TbMathGreater />
                </span>
              </h5>
            </Link>
            {/* </Button> */}
            <h6 className={`${styles.design_title}`}>Design</h6>
          </div>
          </div>
          
            <Button
              
              className={` ${styles.add_member_button}`}
              onClick={() => setShowPopup(true)}
            >
             <div> <BsPlusSquare className={`${styles.icon_plus}`} /></div>
              <div className="d-none d-md-inline">Add Member</div>
            </Button>
          </div>

          <Modal show={showPopup} onHide={() => setShowPopup(false)}>
            <div className={`${styles.add_member}`}>
              <Modal.Header closeButton className={`${styles.add_member_title}`}>
                <Modal.Title>Add Member</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group controlId="formEmail">
                  <Form.Label>Select Role</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button className="w-25 bg-light text-dark" variant="secondary" onClick={() => setShowPopup(false)}>
                  Cancel
                </Button>
                <Button className={`w-25 ${styles.add_button}`} variant="primary" onClick={handleAddMember}>
                  Add
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        
        <table className={`${styles.table_design_group}`}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>
                <div className="d-flex align-items-center">
                  Added On
                  <Button variant="link" onClick={() => handleSort('AddeddOn')}>
                    <Image alt="#" src={Sorting} />
                  </Button>
                </div>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((designgroup, index) => (
              <tr key={index} className={`m-4 ${styles.row_design_group}`}>
                <td>{designgroup.sno}</td>
                <td>{designgroup.Name}</td>
                <td>{designgroup.EmailId}</td>
                <td>{designgroup.AddeddOn}</td>
                <td>
                  <Button className={`${styles.remove_design_group_button}`} variant="link" onClick={() => handleRowRemoval(index)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
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
        </div>
      </div>
    </div>
  );
};

export default DesignGroup;
