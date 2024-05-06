import { Autocomplete, Stack, TextField, Typography } from "@mui/material";

const nmtResults = [
  {
    name: "Математика",
    value: "100",
  },
  {
    name: "Фізика",
    value: "100",
  },
  {
    name: "Іноземна мова",
    value: "100",
  },
  {
    name: "Українська мова",
    value: "100",
  },
];

const NmtAutocomplete = ({ application, handleNmtChange }) => {
  return (
    <Stack spacing={1}>
      <Typography variant="h5">Результати нмт*</Typography>
      <Autocomplete
        multiple
        id="tags-standard"
        options={nmtResults}
        value={application.nmtResults}
        onChange={handleNmtChange}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            key={params.id}
            variant="standard"
            label="НМТ результати (максимум 3)"
            placeholder="Виберіть предмети"
            error={Boolean(application.error)}
            helperText={application.error}
          />
        )}
      />
    </Stack>
  );
};

export default NmtAutocomplete;
