import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Box,
  Button,
  Link,
  TextField,
  Avatar,
  Typography,
} from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";

import { signInValidationSchema } from "../../../helpers/validation-schemas";
import { useUserStore } from "../../../store/user";
import { authService } from "../../../services/auth";
import { styles } from "./styles";

const SignInForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const { setToken } = useUserStore();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = signInValidationSchema.safeParse(form);

    if (result.success) {
      authService
        .signIn({
          email: form.email,
          password: form.password,
        })
        .then((data) => {
          setToken(data);
          toast.success("Ви успішно увійшли!");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Щось пішло не так!");
        });
    }

    navigate("/");
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
        <WavingHandIcon />
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
          label="Пошта"
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
          label="Пароль"
          type="password"
          id="password"
          autoComplete="current-password"
          value={form.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password && errors.password[0]}
        />

        <Button type="submit" fullWidth variant="contained" sx={styles.button}>
          Увійти
        </Button>

        <Link href="/sign-up">
          <Typography>Немає аккаунту? Зареєструйтесь</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default SignInForm;
