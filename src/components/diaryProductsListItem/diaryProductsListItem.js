import React from 'react';
import { Close } from '@mui/icons-material';
import { ListItem, Typography, Box, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { dateEatenProducts } from '../../redux/day/day_selector';
import { deleteProduct } from '../../redux/day/day_operation';
import { toast } from 'react-hot-toast';
import today from '../../helpers/currentDateLocal';

const typografyStyle = {
  paddingBottom: {
    xs: '8px',
    sm: '8px',
    md: '20px',
    lg: '20px',
  },
  mr: {
    xs: '8px',
    sm: '8px',
    md: '20px',
    lg: '20px',
  },
  borderBottom: '1px solid #e0e0e0',
  fontSize: '14px',
  lineHeight: '17px',
  letterSpacing: '0.04em',
  fontFamily: 'Verdana, sans-serif',
  color: 'primary.dark',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

function DiaryProductsListItem({ product: { id, title, weight, kcal } }) {
  const dispatch = useDispatch();
  const currentDate = useSelector(dateEatenProducts);

  const disabled = currentDate === today ? false : true;

  const handleClick = async () => {
    dispatch(deleteProduct(id));
    return toast.success('Продукт успішно видалено');
  };

  return (
    <>
      <ListItem
        sx={{
          p: '0px', //?
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          mb: { xs: '20px', sm: '20px', md: '15px', lg: '15xp' },
        }}
      >
        <Typography
          sx={{
            ...typografyStyle,
            width: '40%',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            ...typografyStyle,
            textAlign: 'right',
            width: {
              xs: '18%',
              sm: '18%',
              md: '20%',
              lg: '20%',
            },
          }}
        >
          {weight}
          <Box component="span">г</Box>
        </Typography>
        <Typography
          sx={{
            ...typografyStyle,

            textAlign: 'right',
            width: '25%',
          }}
        >
          {kcal}
          <Box
            component="span"
            sx={{
              ml: '5px',
              fontSize: {
                xs: '12px',
                sm: '12px',
                md: '14px',
                lg: '14px',
              },
              lineHeight: {
                xs: '14px',
                sm: '14px',
                md: '17px',
                lg: '17px',
              },
            }}
          >
            ккал
          </Box>
        </Typography>
        {!disabled && (
          <IconButton
            disabled={disabled}
            onClick={handleClick}
            sx={{
              width: {
                xs: '10px',
                sm: '10px',
                md: '22px',
                lg: '22px',
              },
              height: {
                xs: '10px',
                sm: '10px',
                md: '22px',
                lg: '22xp',
              },
              mr: '8px',
              color: 'primary.main',
              cursor: 'pointer',
              transition: 'all 250ms linear',
              '&:hover': {
                color: 'background.dark',
                transform: 'scale(1.1)',
                transition: ' all 250ms linear',
              },
            }}
          >
            <Close />
          </IconButton>
        )}
      </ListItem>
    </>
  );
}

export default DiaryProductsListItem;
