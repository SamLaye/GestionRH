import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    employes: "John Doe",
    mois: "janvier",
    brutImposable: "0",
    netImposable: "0",
    retenueIR: "0",
    netAPayer: "0",
  },
  {
    employes: "John Doe",
    mois: "decembre",
    brutImposable: "0",
    netImposable: "0",
    retenueIR: "0",
    netAPayer: "0",
  },
  {
    employes: "John Doe",
    mois: "juin",
    brutImposable: "0",
    netImposable: "0",
    retenueIR: "0",
    netAPayer: "0",
  },
  {
    employes: "John Doe",
    mois: "aout",
    brutImposable: "0",
    netImposable: "0",
    retenueIR: "0",
    netAPayer: "0",
  },
  {
    employes: "John Doe",
    mois: "mars",
    brutImposable: "0",
    netImposable: "0",
    retenueIR: "0",
    netAPayer: "0",
  },
];

const JournalPaie = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "employes",
        header: "Employes",
        size: 150,
      },
      {
        accessorKey: "mois", //normal accessorKey
        header: "Mois",
        size: 100,
      },
      {
        accessorKey: "brutImposable",
        header: "Brut imposable",
        size: 100,
      },
      {
        accessorKey: "netImposable",
        header: "Net imposable",
        size: 100,
      },
      {
        accessorKey: "retenueIR",
        header: "Retenue I.R",
        size: 100,
      },
      {
        accessorKey: "netAPayer",
        header: "net à Payer",
        size: 100,
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

export default JournalPaie;
