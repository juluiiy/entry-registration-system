import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: "grey.300", mt: "auto" }}>
      <Typography variant="body1" align="center">
        © 2022 Your Company
      </Typography>
    </Box>
  );
};

export default Footer;
