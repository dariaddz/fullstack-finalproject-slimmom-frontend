import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Typography, Button } from '@mui/material';

const validateRegister = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Обов'зкове поле";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Не вірний формат адреси ';
  }
  if (!values.name) {
    errors.name = "Обов'зкове поле";
  } else if (values.name.length > 2) {
    errors.name = 'Не вірний формат імені ';
  }
  if (!values.password) {
    errors.password = "Обов'зкове поле";
  } else if (values.password.length < 8) {
    errors.password = 'Не вірний формат паролю';
  }
  return errors;
};

export const RegistrationForm = ({ onRegister }) => {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validate: validateRegister,
    enableReinitialize: true,
    onSubmit: ({ name, email, password }, { resetForm }) => {
      resetForm({ initialValues });
      onRegister({ name, email, password });
    },
  });

  const labelFontStyle = {
    fontFamily: 'Verdana',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '17px',
    letterSpacing: '0.04em',
  };

  const buttonLR = {
    height: '44px',
    width: '182px',
    borderRadius: '30px',
  };

  return (
    <form color="black" onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: { xs: ' 0 auto' },
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box sx={{ marginBottom: '40px' }}>
          <Typography
            sx={{
              fontFamily: 'Gotham Pro',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '14px',
              lineHeight: '13px',
              letterSpacing: '0.04em',
              color: '#FC842D',
            }}
          >
            РЕЄСТРАЦІЯ
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '280px', md: '240px' },
            alignItems: 'center',
          }}
        >
          <Box sx={{ height: '55px', marginBottom: '23px' }}>
            <TextField
              InputLabelProps={{ style: { ...labelFontStyle } }}
              inputProps={{
                style: { color: '#111111', paddingBottom: '15px' },
              }}
              sx={{ width: { xs: '280px', md: '240px' } }}
              variant="standard"
              id="name"
              name="name"
              label="І'мя *"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>
          <Box sx={{ height: '55px', marginBottom: '23px' }}>
            <TextField
              InputLabelProps={{ style: { ...labelFontStyle } }}
              inputProps={{
                style: { color: '#111111', paddingBottom: '15px' },
              }}
              sx={{ width: { xs: '280px', md: '240px' } }}
              variant="standard"
              id="email"
              name="email"
              label="Електронна пошта *"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box sx={{ height: '55px', marginBottom: '60px' }}>
            <TextField
              InputLabelProps={{ style: { ...labelFontStyle } }}
              inputProps={{
                style: { color: '#111111', paddingBottom: '15px' },
              }}
              sx={{ width: { xs: '280px', md: '240px' } }}
              variant="standard"
              id="password"
              name="password"
              label="Пароль *"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          }}
        >
          <Button
            variant="contained"
            sx={{ ...buttonLR, margin: { xs: '0 0 20px 0', md: '0 32px 0 0' } }}
            color="buttonLogin"
            type="submit"
            onClick={() => {
              navigate('/login');
            }}
          >
            <Typography sx={{ ...labelFontStyle, color: '#FFFFFF' }}>
              Вхід
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              ...buttonLR,
              backgroundColor: '#FFFFFF',
              border: '2px solid #FC842D',
            }}
            color="buttonRegister"
            type="button"
            onClick={() => {
              navigate('/homepage');
            }}
          >
            <Typography sx={{ ...labelFontStyle, color: '#FC842D' }}>
              Реєстрація
            </Typography>
          </Button>
        </Box>
      </Box>
    </form>
  );
};
