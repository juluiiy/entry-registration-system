import { Box, Typography } from "@mui/material";
import FileEditor from "../../components/file-editor";

const MotivationLetter = ({ value, setValue }) => {
  return (
    <Box sx={{ display: "flex ", flexDirection: "column", gap: 1 }}>
      <Typography variant="h5">Мотиваційний лист</Typography>
      <FileEditor editorValue={value} handleEditorChange={setValue} />
    </Box>
  );
};

export default MotivationLetter;
