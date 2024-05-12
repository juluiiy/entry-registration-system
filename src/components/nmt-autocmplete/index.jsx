import { Autocomplete, Stack, TextField, Typography } from "@mui/material";

import { useCreateApplicationStore } from "../../store/createApplication";

const NmtAutocomplete = ({ value }) => {
  const { setNmtResults, application, nmtError } = useCreateApplicationStore();

  const handleNmtChange = (event, newValue) => {
    setNmtResults(newValue);
  };
  const removeIdFromOptions = (options) => {
    return options.map(({ id, ...rest }) => rest);
  };

  const optionsWithoutId = removeIdFromOptions(value);

  return (
    <Stack spacing={1}>
      <Typography variant="h5">Результати нмт*</Typography>
      <Autocomplete
        multiple
        id="tags-standard"
        options={optionsWithoutId}
        value={application.nmtResults}
        onChange={handleNmtChange}
        getOptionLabel={(option) => `${option.name} - ${option.value}`}
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
