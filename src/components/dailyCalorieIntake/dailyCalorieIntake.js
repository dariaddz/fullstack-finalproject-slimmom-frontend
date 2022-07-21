import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import s from './dailyCalorieIntake.module.css';
import { Typography, Button, Box } from '@mui/material';
import authSelectors from '../../redux/auth/authSelectors';

const buttonLR = {
  height: '44px',
  width: '220px',
  borderRadius: '30px',
};

const labelFontStyle = {
  fontFamily: 'Verdana',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '17px',
  letterSpacing: '0.04em',
};

const DailyCalorieIntake = ({ onClose }) => {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  const userData = useSelector(state => state.userData.user);

  const userLoginData = useSelector(state => state.kcal.calcData);

  const getMeRandomProducts = (sourceArray, neededElements) => {
    let result = [];
    for (var i = 0; i < neededElements; i += 1) {
      result.push(sourceArray[Math.floor(Math.random() * sourceArray.length)]);
    }
    return result;
  };

  return (
    <>
      <Box>
        <NavLink
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={onClose}
        ></NavLink>
      </Box>
      <Typography
        sx={{
          fontFamily: 'Gotham Pro',
          fontSize: { sm: '18px', md: '26px' },
          lineHeight: { xs: '26x', md: '32px' },
          fontWeight: '700',
          textAlign: { md: 'center' },
          mb: { xs: '40px', md: '20px' },
        }}
      >
        Ваша рекомендована добова норма калорій становить
      </Typography>

      {!isLogin
        ? userData && (
            <div className={s.dataResult}>
              {userData.kcal} <span className={s.dataResultText}>калорій</span>
            </div>
          )
        : userLoginData && (
            <div className={s.dataResult}>
              {userLoginData.kcal}{' '}
              <span className={s.dataResultText}>калорій</span>
            </div>
          )}

      <hr />
      <div className={s.products}>
        <p className={s.description}>Продукти, які вам не варто вживати</p>

        {!isLogin ? (
          <ol className={s.productList}>
            {getMeRandomProducts(userData.productsNotRecommended, 7).map(
              product => (
                <li key={uuidv4()} className={s.productItem}>
                  {product}
                </li>
              )
            )}
          </ol>
        ) : (
          <ol className={s.productList}>
            {getMeRandomProducts(userLoginData.productsNotRecommended, 7).map(
              product => (
                <li key={uuidv4()} className={s.productItem}>
                  {product}
                </li>
              )
            )}
          </ol>
        )}
      </div>

      <Link to={`/register`}>
        <Box sx={{ marginTop: '40px', textAlign: 'center' }}>
          <Button
            variant="contained"
            sx={{ ...buttonLR, margin: { xs: '0 0 20px 0', md: '0 32px 0 0' } }}
            color="buttonLogin"
            type="submit"
          >
            <Typography sx={{ ...labelFontStyle, color: '#FFFFFF' }}>
              Почати худнути
            </Typography>
          </Button>
        </Box>
      </Link>
    </>
  );
};

export default DailyCalorieIntake;
