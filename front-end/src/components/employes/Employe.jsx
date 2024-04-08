// DataTable.js
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TiEdit } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { styled } from "@mui/material";
import AjoutEmploye from "./AjoutEmploye";
import DetailsEmployes from "./DetailsEmployes"; // Import the Modal component

const columns = [
  styled,
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "Email", headerName: "Email", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  { field: "Statut", headerName: "Statut", width: 150 },
  {
    field: "Actions",
    headerName: "Actions",
    width: 250,
    renderCell: (params) => (
      <div>
        <TiEdit className="bg-0 border-0" color="blue" size={25} />

        <MdDeleteForever className="bg-0 border-0" color="red" size={25} />
        <IoEyeOutline className="bg-0 border-0" color="grey" size={25} />
      </div>
    ),
  },
  { field: "Date d'embauche", headerName: "Date d'embauche", width: 130 },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    Statut: "actif",
    Email: "now@gmail.com",
    "Date d'embauche": "2023-02-24",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    Statut: "inactif",
    Email: "cersei@gmail.com",
    "Date d'embauche": "2023-02-24",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    Statut: "actif",
    Email: "cersei@gmail.com",
    "Date d'embauche": "2023-02-24",
  },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, Statut: "inactif" },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 16,
    Statut: "inactif",
    Email: "cersei@gmail.com",
    "Date d'embauche": "2023-02-24",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Silva",
    age: 15,
    Statut: "inactif",
    Email: "cersei@gmail.com",
    "Date d'embauche": "2023-02-24",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    Statut: "inactif",
    Email: "cersei@gmail.com",
    "Date d'embauche": "2023-02-24",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    Statut: "inactif",
    Email: "cersei@gmail.com",
    "Date d'embauche": "2023-02-24",
  },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, Statut: "inactif" },
]; // Your rows data

export default function Employe() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddEmployee = (employeeDetails) => {
    const newEmployeeId = Math.max(...rows.map((row) => row.id)) + 1;
    const newEmployee = { id: newEmployeeId, ...employeeDetails };
  };

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
      <DetailsEmployes
        open={openModal}
        handleOpenModal={handleOpenModal}
        handleClose={handleCloseModal}
        userData={selectedUser}
      />
      <AjoutEmploye onEmployeeAdded={handleAddEmployee} />
    </div>
  );
}
