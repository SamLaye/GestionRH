import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    employes: "John Doe",
    departement: "261 Erdman Ford",
    entree: "East Daphne",
    horaire: "Kentucky",
  },
  {
    employes: "Jane Doe",
    departement: "769 Dominic Grove",
    entree: "Columbus",
    horaire: "Ohio",
  },
  {
    employes: "Joe Doe",
    departement: "566 Brakus Inlet",
    entree: "South Linda",
    horaire: "West Virginia",
  },
  {
    employes: "Kevin Vandy",
    departement: "722 Emie Stream",
    entree: "Lincoln",
    horaire: "Nebraska",
  },
  {
    employes: "Joshua Rolluffs",
    departement: "32188 Larkin Turnpike",
    entree: "Charleston",
    horaire: "South Carolina",
  },
];

const TableEmp = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "employes",
        header: "Employes",
        size: 150,
      },
      {
        accessorKey: "departement", //normal accessorKey
        header: "Departement",
        size: 200,
      },
      {
        accessorKey: "entree",
        header: "Entree",
        size: 150,
      },
      {
        accessorKey: "horaire",
        header: "Horaire",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};

export default TableEmp;
