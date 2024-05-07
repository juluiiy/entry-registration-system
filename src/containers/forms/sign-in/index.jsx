import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Avatar,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styles } from "./styles";
import { signInValidationSchema } from "../../../helpers/validation-schemas";
import toast from "react-hot-toast";

const SignInForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = signInValidationSchema.safeParse(form);
    if (result.success) {
      console.log(result.data);
    } else {
      setErrors(result.error.formErrors.fieldErrors);
    }
  };

  const updateForm = (name, value) => {
    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);
    return updatedForm;
  };

  const updateErrors = (name, updatedForm) => {
    const result = signInValidationSchema.safeParse(updatedForm);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: result.success
        ? undefined
        : result.error.formErrors.fieldErrors[name],
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedForm = updateForm(name, value);
    updateErrors(name, updatedForm);
  };

  return (
    <Box sx={styles.box}>
      <Avatar sx={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Увійти
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={styles.form}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={form.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email && errors.email[0]}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={form.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password && errors.password[0]}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={styles.button}
          onClick={() => toast.error("Here is your toast.")}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignInForm;
