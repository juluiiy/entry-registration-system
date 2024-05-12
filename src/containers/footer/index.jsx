import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: "grey.300", mt: "auto" }}>
      <Typography variant="body1" align="center">
        Всі права захищені © 2024
      </Typography>
    </Box>
  );
};

export default Footer;
