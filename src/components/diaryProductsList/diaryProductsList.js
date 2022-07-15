import React from 'react';
import DiaryProductsListItem from '../diaryProductsListItem';
import { List, Box } from '@mui/material';

function DiaryProductsList() {
  return (
    <Box
      sx={{
        maxHeight: { xs: '210px', md: '240px', lg: '305px' },
        maxWidth: { md: '610px', lg: '620px' },
        mb: {
          xs: '60px',
          md: '0px',
        },
        overflow: 'hidden',
        overflowY: 'scroll',
      }}
    >
      <List
        sx={{
          width: '100%',
          pr: { xs: '5px', md: '40px' },
        }}
      >
        {products.length > 0 &&
          products.map(product => (
            <DiaryProductsListItem key={product._id} product={product} />
          ))}
      </List>
    </Box>
  );
}

export default DiaryProductsList;

const products = [
  {
    _id: 123124,
    title: 'Борщ',
    weight: '100',
    kcal: '234',
  },
  {
    _id: 123125,
    title: 'Борщ',
    weight: '100',
    kcal: '234',
  },
  {
    _id: 123126,
    title: 'Борщ',
    weight: '100',
    kcal: '234',
  },
  {
    _id: 123127,
    title: 'Борщ',
    weight: '100',
    kcal: '234',
  },
  {
    _id: 123128,
    title: 'Борщ',
    weight: '100',
    kcal: '234',
  },
  {
    _id: 123129,
    title: 'Борщ',
    weight: '100',
    kcal: '234',
  },
  {
    _id: 123120,
    title: 'Борщ',
    weight: '100',
    kcal: '234',
  },
];
