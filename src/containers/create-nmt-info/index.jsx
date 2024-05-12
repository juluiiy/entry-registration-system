import React, { useState } from "react";
import toast from "react-hot-toast";
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

import { useUserStore } from "../../store/user";
import { userService } from "../../services/user";
import { getUserIdFromToken } from "../../helpers";

const CreateNmtInfo = () => {
  const [open, setOpen] = useState(false);
  const { user, accessToken, setUser } = useUserStore();

  const transformNmtResults = (nmtResults) => {
    return Object.values(nmtResults).map((row) => ({
      name: row.name,
      value: row.value,
    }));
  };

  const [modalData, setModalData] = useState({
    row1: user.nmtResults[0] || { name: "", value: "" },
    row2: user.nmtResults[1] || { name: "", value: "" },
    row3: user.nmtResults[2] || { name: "", value: "" },
    row4: user.nmtResults[3] || { name: "", value: "" },
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
    setOpen(false);

    const userId = getUserIdFromToken(accessToken);

    userService
      .addNmtResults(userId, transformNmtResults(modalData))
      .then((data) => {
        setUser(data);
        toast.success("Дані успішно збережені!");
      });
  };

  const hasData = user.nmtResults.length;

  const buttonOrData = hasData ? (
    <TableContainer>
      <Table>
        <TableBody>
          {user.nmtResults.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
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
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Внести дані
      </Button>
    </Stack>
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
                  value={modalData[rowKey].name}
                  onChange={handleChange(rowKey, "name")}
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
      {buttonOrData}
    </>
  );
};

export default CreateNmtInfo;
