import { Autocomplete, Stack, TextField, Typography } from "@mui/material";
import { useCreateApplicationStore } from "../../store/createApplication";

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

const NmtAutocomplete = () => {
  const { setNmtResults, application, nmtError } = useCreateApplicationStore();
  console.log(application);
  const handleNmtChange = (event, newValue) => {
    setNmtResults(newValue);
  };

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
        isOptionEqualToValue={(option, value) =>
          option.name === value.name && option.value === value.value
        }
        renderInput={(params) => (
          <TextField
            {...params}
            key={params.id}
            variant="standard"
            label="НМТ результати (максимум 3)"
            placeholder="Виберіть предмети"
            error={Boolean(nmtError)}
            helperText={nmtError}
          />
        )}
      />
    </Stack>
  );
};

export default NmtAutocomplete;
