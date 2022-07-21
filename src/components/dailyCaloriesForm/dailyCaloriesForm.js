import { useDispatch, useSelector } from 'react-redux';
import { postProduct } from '../../redux/userSlice';
import { useState } from 'react';
import { useFormik } from 'formik';
import { Typography, TextField, Button } from '@mui/material';
import Modal from '../modal';
import DailyCalorieIntake from '../dailyCalorieIntake';
import s from './dailyCaloriesForm.module.css';
import {
  FormLabel,
  buttonLR,
  FormBox,
  labelFontStyle,
  MainContainer,
} from '../../theme';
import validationSchema from '../../middlewares';
import { Spiner } from '../../components/spiner';
import authSelectors from '../../redux/auth/authSelectors';
import { calcDataPrivate } from '../../redux/calculator/calculator_operation';
import { useWindowWidth } from '@react-hook/window-size';

const DailyCaloriesForm = () => {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  const token = useSelector(state => state.auth.token);
  const currentLocation = window.location.pathname;

  const userData = useSelector(state => state.userData.user);

  const userLoginData = useSelector(state => state.kcal.calcData);

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const isPending = useSelector(state => {
    return state.userData.isPending;
  });

  const initialValues = {
    height: '',
    age: '',
    currentWeight: '',
    desiredWeight: '',
    bloodType: '1',
  };

  const formik = useFormik({
    initialValues,

    enableReinitialize: true,
    onSubmit: (value, actions) => {
      if (!isLogin) {
        dispatch(postProduct(formik.values));
      } else {
        dispatch(calcDataPrivate(formik.values, token));
      }
      setShowModal(true);
      actions.resetForm(initialValues);
    },
    validationSchema: validationSchema,
  });

  const onClose = () => {
    setShowModal(false);
  };

  const onlyWidth = useWindowWidth();
  if (showModal) {
    if (onlyWidth >= 768) {
      document.body.style.overflow = 'hidden';
    }
  }
  if (!showModal) {
    document.body.style.overflow = 'initial';
  }

  return (
    <>
      <MainContainer>
        <form
          onSubmit={formik.handleSubmit}
          className={
            currentLocation === '/calculator' ? s.formCalc : s.formHome
          }
        >
          <Typography
            conponent="h2"
            display={'block'}
            sx={{
              fontFamily: 'Gotham Pro',
              fontSize: { sm: '18px', md: '34px' },
              fontWeight: '700',
              width: { sm: '280px', md: '700px', lg: '600px' },
              mb: { xs: '32px', md: '68px' },
            }}
          >
            Прорахуй свою добову норму калорій прямо зараз
          </Typography>

          <FormBox color="#9B9FAA">
            <div>
              <FormLabel htmlFor="height">
                <TextField
                  InputLabelProps={{ style: { ...labelFontStyle } }}
                  inputProps={{
                    style: { color: '#111111', paddingBottom: '15px' },
                  }}
                  sx={{ width: { xs: '280px', md: '240px' } }}
                  variant="standard"
                  id="height"
                  name="height"
                  label="Зріст*"
                  type="number"
                  value={formik.values.height}
                  onChange={formik.handleChange}
                  error={formik.touched.height && Boolean(formik.errors.height)}
                  helperText={formik.touched.height && formik.errors.height}
                />
              </FormLabel>

              <FormLabel htmlFor="age">
                <TextField
                  InputLabelProps={{ style: { ...labelFontStyle } }}
                  inputProps={{
                    style: { color: '#111111', paddingBottom: '15px' },
                  }}
                  sx={{ width: { xs: '280px', md: '240px' } }}
                  variant="standard"
                  id="age"
                  name="age"
                  label="Вік*"
                  type="number"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  helperText={formik.touched.age && formik.errors.age}
                />
              </FormLabel>

              <FormLabel htmlFor="currentWeight">
                <TextField
                  InputLabelProps={{ style: { ...labelFontStyle } }}
                  inputProps={{
                    style: { color: '#111111', paddingBottom: '15px' },
                  }}
                  sx={{ width: { xs: '280px', md: '240px' } }}
                  variant="standard"
                  id="currentWeight"
                  name="currentWeight"
                  label="Поточна вага*"
                  type="number"
                  value={formik.values.currentWeight}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.currentWeight &&
                    Boolean(formik.errors.currentWeight)
                  }
                  helperText={
                    formik.touched.currentWeight && formik.errors.currentWeight
                  }
                />
              </FormLabel>
            </div>
            <div>
              <FormLabel htmlFor="desiredWeight">
                <TextField
                  InputLabelProps={{ style: { ...labelFontStyle } }}
                  inputProps={{
                    style: { color: '#111111', paddingBottom: '15px' },
                  }}
                  sx={{ width: { xs: '280px', md: '240px' } }}
                  variant="standard"
                  id="desiredWeight"
                  name="desiredWeight"
                  type="number"
                  label="Бажана вага*"
                  value={formik.values.desiredWeight}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.desiredWeight &&
                    Boolean(formik.errors.desiredWeight)
                  }
                  helperText={
                    formik.touched.desiredWeight && formik.errors.desiredWeight
                  }
                />
              </FormLabel>

              <FormLabel htmlFor="bloodType">
                <div
                  role="group"
                  aria-labelledby="my-radio-group"
                  className={s.radioGroup}
                >
                  <Typography
                    mb={'20px'}
                    fontWeight={'700'}
                    fontFamily={'Verdana'}
                    fontSize={'14px'}
                    color={'rgb(118, 118, 118)'}
                  >
                    Група крові*
                  </Typography>
                  <hr className={s.hr} />

                  <input
                    type="radio"
                    name="bloodType"
                    value="1"
                    onChange={formik.handleChange}
                    checked={formik.values.bloodType === '1'}
                  />
                  <span className={s.radioButton}>1</span>

                  <input
                    type="radio"
                    name="bloodType"
                    value="2"
                    onChange={formik.handleChange}
                    checked={formik.values.bloodType === '2'}
                  />
                  <span className={s.radioButton}>2</span>

                  <input
                    type="radio"
                    name="bloodType"
                    value="3"
                    onChange={formik.handleChange}
                    checked={formik.values.bloodType === '3'}
                  />
                  <span className={s.radioButton}>3</span>

                  <input
                    type="radio"
                    name="bloodType"
                    value="4"
                    onChange={formik.handleChange}
                    checked={formik.values.bloodType === '4'}
                  />
                  <span className={s.radioButtonLast}>4</span>
                </div>
              </FormLabel>
            </div>
          </FormBox>

          <Button
            variant="contained"
            sx={{
              ...buttonLR,

              margin: {
                xs: '0 auto ',
                md: '40px 32px 0 0px',
                lg: '40px 0 0 330px',
              },
              textAlign: 'center',
              display: 'block',
            }}
            color="buttonLogin"
            type="submit"
            disabled={!formik.dirty}
          >
            <Typography sx={{ ...labelFontStyle, color: '#FFFFFF' }}>
              Схуднути
            </Typography>
          </Button>
        </form>
      </MainContainer>
      {isPending && <Spiner />}
      {showModal &&
        (userData ||
          (userLoginData.kcal &&
            userLoginData.productsNotRecommended.length !== 0)) && (
          <Modal onClose={onClose}>
            {<DailyCalorieIntake onClose={onClose} />}
          </Modal>
        )}
    </>
  );
};

export default DailyCaloriesForm;
