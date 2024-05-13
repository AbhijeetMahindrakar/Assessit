interface RoleData {
  sno: number;
  role: string;
  createdon: string;
  createdby: string;
  action: string;
}

const RolesData   = [
    {
      sno: 1,
      role: 'Admin',
      createdOn: '24-07-2024,1:00 PM',
      createdBy: 'Akash Thakur',
      action: ''
    },
    {
      sno: 2,
      role: 'Leader',
      createdOn: '26-07-2024,1:00 PM',
      createdBy: 'Akash',
      action: ''
    },
    {
      sno: 3,
      role: 'Super Admin',
      createdOn: '22-07-2024,1:00 PM',
      createdBy: 'Thakur',
      action: ''
    }
  ];
  
export default RolesData;