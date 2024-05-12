import { Box, Typography } from "@mui/material";

import FileEditor from "../../components/file-editor";

import { useCreateApplicationStore } from "../../store/createApplication";

const MotivationLetter = () => {
  const { application, setMotivationLetter } = useCreateApplicationStore();

  return (
    <Box sx={{ display: "flex ", flexDirection: "column", gap: 1 }}>
      <Typography variant="h5">Мотиваційний лист</Typography>
      <FileEditor
        editorValue={application.MotivationLetter}
        handleEditorChange={setMotivationLetter}
      />
    </Box>
  );
};

export default MotivationLetter;
