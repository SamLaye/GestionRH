import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    employes: "John Doe",
    joursDeConges: "0",
    enAttente: "0",
    rejette: "0",
    accepte: "0",
    supprime: "0",
    total: "0",
    detail: "0",
  },
  {
    employes: "Jane Doe",
    joursDeConges: "0",
    enAttente: "0",
    rejette: "0",
    accepte: "0",
    supprime: "0",
    total: "0",
    detail: "0",
  },
  {
    employes: "Joe Doe",
    joursDeConges: "0",
    enAttente: "0",
    rejette: "0",
    accepte: "0",
    supprime: "0",
    total: "0",
    detail: "0",
  },
  {
    employes: "Kevin Vandy",
    joursDeConges: "0",
    enAttente: "0",
    rejette: "0",
    accepte: "0",
    supprime: "0",
    total: "0",
    detail: "0",
  },
  {
    employes: "Joshua Rolluffs",
    joursDeConges: "0",
    enAttente: "0",
    rejette: "0",
    accepte: "0",
    supprime: "0",
    total: "0",
    detail: "0",
  },
];

const DemandeCg = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "employes",
        header: "Employes",
        size: 80,
      },
      {
        accessorKey: "joursDeConges",
        header: "Jours de conges",
        size: 80,
      },
      {
        accessorKey: "enAttente",
        header: "En attente",
        size: 80,
      },
      {
        accessorKey: "rejette",
        header: "Rejette",
        size: 80,
      },
      {
        accessorKey: "accepte",
        header: "Accepté",
        size: 80,
      },
      {
        accessorKey: "supprime",
        header: "Supprimé",
        size: 80,
      },
      {
        accessorKey: "total",
        header: "Total",
        size: 80,
      },
      {
        accessorKey: "detail",
        header: "Detail",
        size: 80,
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

export default DemandeCg;
