"use client"
import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
import Image from 'next/image';
// import 'react-datepicker/dist/react-datepicker.css';
import groupData from '../groupData';
import styles from './styles.module.css';
import Sorting from '../../../../public/images/sorting.svg';
import { BsPlusSquare } from 'react-icons/bs';
import editGroup from '../../../../public/images/EditGroup.svg';
import deleteGroup from '../../../../public/images/DeleteGroup.svg';
import Link from 'next/link';

interface GroupData {
  sno: number;
  GroupName: string;
  Members: string[] | string;
  CreatedOn: string;
}

const Groups: React.FC = () => {
  const [groups, setGroups] = useState<GroupData[]>(groupData);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedGroup, setSelectedGroup] = useState<GroupData | null>(null);
  const [showAddGroupPopup, setShowAddGroupPopup] = useState<boolean>(false);
  const [newGroupName, setNewGroupName] = useState<string>('');
  const [newMembers, setNewMembers] = useState<string>('');
  const [editedGroup, setEditedGroup] = useState<GroupData | null>(null);
  const [editedGroupName, setEditedGroupName] = useState<string>('');
  const [editedMembers, setEditedMembers] = useState<string>('');

  const itemsPerPage: number = 5;

  const [totalItems, setTotalItems] = useState<number>(groupData.length);
  const [totalPages, setTotalPages] = useState<number>(Math.ceil(groupData.length / itemsPerPage));

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: GroupData[] = groupData.slice(indexOfFirstItem, indexOfLastItem);

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      setSortOrder(newSortOrder);
    } else {
      setSortOrder('asc');
      setSortColumn(column);
    }
  };

  const sortedItems = [...currentItems].sort((a: any, b: any) => {
    if (sortColumn) {
      if (sortOrder === 'asc') {
        return a[sortColumn].localeCompare(b[sortColumn]);
      } else {
        return b[sortColumn].localeCompare(a[sortColumn]);
      }
    }
    return 0;
  });

  const handleEditGroup = (group: GroupData) => {
    setSelectedGroup(group);
    setEditedGroup(group);
    setEditedGroupName(group.GroupName);
    setEditedMembers(Array.isArray(group.Members) ? group.Members.join(', ') : '');
    setShowEditModal(true);
  };

  const handleDeleteGroup = (group: GroupData) => {
    const updatedGroupData = groups.filter((item) => item.GroupName !== group.GroupName);
    setGroups(updatedGroupData);

    // Calculate the new total items and total pages
    const updatedTotalItems = updatedGroupData.length;
    const updatedTotalPages = Math.ceil(updatedTotalItems / itemsPerPage);

    // Update the current page if necessary
    if (currentPage > updatedTotalPages) {
      setCurrentPage(updatedTotalPages);
    }

    // Update the state with the new counts
    // (assuming you have state variables for totalItems and totalPages)
    setTotalItems(updatedTotalItems);
    setTotalPages(updatedTotalPages);
  };

  const handleSaveEdit = () => {
    if (editedGroup) {
      // Find the index of the edited group in the groups array
      const editedGroupIndex = groups.findIndex((group) => group.GroupName === editedGroup.GroupName);

      if (editedGroupIndex !== -1) {
        // Create a new group object with the updated data
        const updatedGroup = {
          ...editedGroup,
          GroupName: editedGroupName,
          Members: editedMembers.split(',').map((member) => member.trim()),
        };

        // Update the groups array with the new data
        const updatedGroups = [...groups];
        updatedGroups[editedGroupIndex] = updatedGroup;

        // Update the state with the new group data
        setGroups(updatedGroups);

        // Close the edit modal
        setShowEditModal(false);
      }
    }
  };

  const showAddGroupPopupHandler = () => {
    setShowAddGroupPopup(true);
  };

  const hideAddGroupPopupHandler = () => {
    setShowAddGroupPopup(false);
    // Reset the input fields when the popup is closed
    setNewGroupName('');
    setNewMembers('');
  };

  const handleAddGroup = () => {
    // Create a new group object
    const newGroup = {
      sno: groupData.length + 1, // Replace this with a unique identifier for your groups
      GroupName: newGroupName,
      Members: newMembers.split(',').map((member) => member.trim()), // Convert members to an array
      CreatedOn: new Date().toLocaleString(),
    };

    // Update the groups array with the new group
    const updatedGroups = [...groups, newGroup];

    // Update the state with the new group data
    setGroups(updatedGroups);


    // Close the popup and reset the input fields
    hideAddGroupPopupHandler();
  };

  return (
    <div className="table-responsive mt-1">
      <div className={`mt-1 ${styles.total_card}`}>
        <div className="d-flex align-items-center  justify-content-between">

          <div className={` text-dark  ${styles.group_title}`}>Groups</div>


          <Button

            className={` ${styles.new_group_button}`}
            onClick={showAddGroupPopupHandler}
          >
            <div><BsPlusSquare/></div>
            <div className="d-none d-md-inline">New Group</div>
          </Button>


        </div>
        <table className={`${styles.group_table}`}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th> Group Name</th>
              <th>Members</th>
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
            {groups.map((group, index) => (
              <tr key={index} className="gap-12 m-4">
                <td>{group.sno}</td>
                <td>{group.GroupName}</td>
                <td>
                  {selectedGroup === group && showEditModal ? (
                    <textarea
                      className="form-control"
                      id="editedMembers"
                      rows={3}
                      value={editedMembers}
                      onChange={(e) => setEditedMembers(e.target.value)}
                    />
                  ) : (
                    group.GroupName === 'Development' ? (
                      <Link href="/userManagements/developmentGroup"> {/* Use Link component for navigation */}
                        <Button className='w-75' variant="primary">Development</Button>
                      </Link>
                    ) : group.GroupName === 'Design' ? (
                      <Link href="/userManagements/designGroup"> {/* Use Link component for navigation */}
                        <Button className='w-75' variant="success">Design</Button>
                      </Link>
                    ) : (
                      Array.isArray(group.Members) ? group.Members.join(', ') : ''
                    )
                  )}
                </td>
                <td>{group.CreatedOn}</td>
                <td>
                  {/* Replace the existing buttons with the image buttons */}
                  <div className="d-flex gap-2">
                    <Image
                      alt="Edit"
                      src={editGroup}
                      onClick={() => handleEditGroup(group)}
                      style={{ cursor: 'pointer' }}
                    />
                    <Image
                      alt="Delete"
                      src={deleteGroup}
                      onClick={() => handleDeleteGroup(group)}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Group Popup */}
      <Modal show={showAddGroupPopup} onHide={hideAddGroupPopupHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Add Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="groupName" className="form-label">
                Group Name
              </label>
              <input
                type="text"
                className="form-control"
                id="groupName"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="members" className="form-label">
                Members
              </label>
              <textarea
                className="form-control"
                id="members"
                rows={3}
                value={newMembers}
                onChange={(e) => setNewMembers(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='w-25 bg-light text-dark' variant="secondary" onClick={hideAddGroupPopupHandler}>
            Cancel
          </Button>
          <Button className={`w-25 ${styles.add}`} variant="primary" onClick={handleAddGroup}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Group Popup */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="editedGroupName" className="form-label">
                Group Name
              </label>
              <input
                type="text"
                className="form-control"
                id="editedGroupName"
                value={editedGroupName}
                onChange={(e) => setEditedGroupName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="editedMembers" className="form-label">
                Members
              </label>
              <textarea
                className="form-control"
                id="editedMembers"
                rows={3}
                value={editedMembers}
                onChange={(e) => setEditedMembers(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Groups;
