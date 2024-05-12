import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material";

import { useCreateApplicationStore } from "../../store/createApplication";
import { facultyService } from "../../services/faculties";

const columns = [
  { field: "name", headerName: "Назва", width: 200 },
  { field: "number", headerName: "Номер", width: 100 },
  { field: "faculty", headerName: "Факультет", width: 200 },
  { field: "coursesQuantity", headerName: "Кількість курсів", width: 150 },
  { field: "price", headerName: "Ціна за курс", width: 100 },
  { field: "totalPlaces", headerName: "Кількість мість", width: 130 },
  { field: "budgetPlaces", headerName: "На бюджет ", width: 130 },
  { field: "contractPlaces", headerName: "На контракт", width: 150 },
  { field: "educationForm", headerName: "Форма навчання", width: 150 },
];

const getAllSpecialties = (faculties) => {
  return faculties.reduce((acc, faculty) => {
    const specialtiesWithFaculty = faculty.specialties.map((specialty) => ({
      ...specialty,
      faculty: faculty.name,
    }));
    return acc.concat(specialtiesWithFaculty);
  }, []);
};

const SpecialtiesTable = () => {
  const [faculties, setFaculties] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const { setSpecialty } = useCreateApplicationStore();

  useEffect(() => {
    facultyService.getFaculties().then((data) => {
      setFaculties(data);
    });
  }, []);

  useEffect(() => {
    if (rowSelectionModel.length > 0) {
      const selectedSpecialityId = rowSelectionModel[0];
      setSpecialty(selectedSpecialityId);
    }
  }, [rowSelectionModel, setSpecialty]);

  const facultiesOptions =
    faculties && faculties.map((faculty) => faculty.name);

  const specialties = getAllSpecialties(faculties);

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Виберіть спеціальність</Typography>

      <Autocomplete
        value={selectedFaculty}
        id="faculty-select"
        options={facultiesOptions}
        onChange={(event, newValue) => {
          setSelectedFaculty(newValue);
        }}
        loading={faculties.length === 0}
        renderInput={(params) => (
          <TextField
            {...params}
            key={params.id}
            variant="standard"
            label="Виберіть факультет"
            placeholder="Виберіть факультет"
          />
        )}
      />
      <Box maxWidth="lg">
        <Stack spacing={2}>
          <DataGrid
            rows={
              selectedFaculty
                ? specialties.filter((item) => item.faculty === selectedFaculty)
                : specialties
            }
            columns={columns}
            hideFooterPagination
            hideFooter
            disableAutosize
            disableColumnResize
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setRowSelectionModel(newRowSelectionModel);
            }}
            rowSelectionModel={rowSelectionModel}
          />
        </Stack>
      </Box>
    </Stack>
  );
};

export default SpecialtiesTable;
