import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "№", type: "number", width: 50 },
  { field: "name", headerName: "Спеціальність", type: "string", width: 200 },
  { field: "faculty", headerName: "Факультет", type: "string", width: 200 },
  { field: "status", headerName: "Статус", type: "string" },
];

const rows = [
  {
    id: 1,
    name: "Computer Science",
    faculty: "Faculty of Science",
    status: "Active",
  },
  { id: 2, name: "Physics", faculty: "Faculty of Science", status: "Inactive" },
  {
    id: 3,
    name: "Mathematics",
    faculty: "Faculty of Science",
    status: "Graduated",
  },
];

export default function DataTable() {
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
}
