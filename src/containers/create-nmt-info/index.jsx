import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Stack,
} from "@mui/material";

const CreateNmtInfo = () => {
  const [open, setOpen] = useState(false);

  const [modalData, setModalData] = useState({
    row1: { label: "", value: "" },
    row2: { label: "", value: "" },
    row3: { label: "", value: "" },
    row4: { label: "", value: "" },
  });
  const [savedData, setSavedData] = useState({
    row1: { label: "", value: "" },
    row2: { label: "", value: "" },
    row3: { label: "", value: "" },
    row4: { label: "", value: "" },
  });

  const handleChange = (rowKey, field) => (event) => {
    setModalData({
      ...modalData,
      [rowKey]: {
        ...modalData[rowKey],
        [field]: event.target.value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSavedData(modalData);
    setOpen(false);
  };

  const hasData = Object.values(savedData).some(
    (row) => row.label && row.value
  );

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Введіть дані НМТ</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            {Object.keys(modalData).map((rowKey) => (
              <Box key={rowKey}>
                <TextField
                  label="Назва предмету"
                  value={modalData[rowKey].label}
                  onChange={handleChange(rowKey, "label")}
                  required
                  sx={{ my: 0.5, ml: 0, mr: 1 }}
                />
                <TextField
                  label="оцінка (100 - 200)"
                  value={modalData[rowKey].value}
                  onChange={handleChange(rowKey, "value")}
                  type="number"
                  required
                  sx={{ my: 0.5, ml: 0 }}
                />
              </Box>
            ))}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 1 }}
            >
              Зберегти дані
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      {hasData ? (
        <TableContainer>
          <Table>
            <TableBody>
              {Object.values(savedData).map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.label}</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Stack mt={3}>
          <Typography variant="h6" color="textSecondary" align="center">
            Не вказані предмети
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Внести дані
          </Button>
        </Stack>
      )}
    </>
  );
};

export default CreateNmtInfo;
