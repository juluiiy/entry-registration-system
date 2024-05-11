import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "specialty",
    headerName: "Спеціальність",
    type: "string",
    width: 200,
  },
  { field: "status", headerName: "Статус", type: "string" },
];

const ApplicationTable = ({ rows }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection
      hideFooterPagination
      disableAutosize
      disableColumnResize
    />
  );
};

export default ApplicationTable;
