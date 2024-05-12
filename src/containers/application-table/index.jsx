import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "specialty",
    headerName: "Спеціальність",
    type: "string",
    width: 500,
    align: "center",
    renderCell: (params) => (
      <div style={{ paddingLeft: "" }}>{params.value}</div>
    ),
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "Статус",
    type: "string",
    width: 200,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => <div>{params.value}</div>,
  },
];

const ApplicationTable = ({ rows }) => {
  const serializedRows = (rows) => {
    return rows.map((row) => ({
      id: row.id,
      specialty: row.specialty.name,
      status: row.applied ? "Переглянуто" : "Очікується",
    }));
  };

  return (
    <DataGrid
      rows={serializedRows(rows)}
      columns={columns}
      hideFooterPagination
      hideFooter
      disableAutosize
      disableColumnResize
      disableColumnFilter
      disableColumnMenu
    />
  );
};

export default ApplicationTable;
