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
    dateEmbauche: "East Daphne",
    jourDeConges: "0",
    jourConsommes: "0",
    solde: "0",
  },
  {
    employes: "Jane Doe",
    departement: "769 Dominic Grove",
    dateEmbauche: "Columbus",
    jourDeConges: "0",
    jourConsommes: "0",
    solde: "0",
  },
  {
    employes: "Joe Doe",
    departement: "566 Brakus Inlet",
    dateEmbauche: "South Linda",
    jourDeConges: "0",
    jourConsommes: "0",
    solde: "0",
  },
  {
    employes: "Kevin Vandy",
    departement: "722 Emie Stream",
    dateEmbauche: "Lincoln",
    jourDeConges: "0",
    jourConsommes: "0",
    solde: "0",
  },
  {
    employes: "Joshua Rolluffs",
    departement: "32188 Larkin Turnpike",
    dateEmbauche: "Charleston",
    jourDeConges: "0",
    jourConsommes: "0",
    solde: "0",
  },
];

const SoldeCg = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "employes", //access nested data with dot notation
        header: "Employés",
        size: 150,
      },
      {
        accessorKey: "departement", //normal accessorKey
        header: "Departement",
        size: 200,
      },
      {
        accessorKey: "dateEmbauche",
        header: "Date d'mbauche",
        size: 150,
      },
      {
        accessorKey: "jourDeConges",
        header: "Jours de congés",
        size: 50,
      },
      {
        accessorKey: "jourConsommes",
        header: "Jours consommés",
        size: 50,
      },
      {
        accessorKey: "solde",
        header: "Solde",
        size: 50,
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

export default SoldeCg;
