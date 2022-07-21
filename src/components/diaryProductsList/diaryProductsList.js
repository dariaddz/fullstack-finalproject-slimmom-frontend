import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  allProducts,
  dateEatenProducts,
  productLoading,
} from '../../redux/day/day_selector';
import { Spiner } from '../../components/spiner';
import today from '../../helpers/currentDateLocal';
import DiaryProductsListItem from '../diaryProductsListItem';
import { List, Box } from '@mui/material';

function DiaryProductsList() {
  const currentDate = useSelector(dateEatenProducts);
  const dayProducts = useSelector(allProducts);
  const isLoading = useSelector(productLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (dayProducts) {
      setProducts(dayProducts);
    }
  }, [dayProducts]);

  return (
    <>
      {products.length !== 0 && (
        <Box
          sx={{
            maxHeight: { xs: '210px', md: '240px', lg: '305px' },
            maxWidth: { md: '610px', lg: '620px' },
            mb: {
              xs: '60px',
              md: '0px',
            },
            overflow: 'hidden',
            overflowY: 'auto',
          }}
        >
          <List
            sx={{
              width: '100%',
              pr: { xs: '5px', md: '40px' },
            }}
          >
            {products.map(product => (
              <DiaryProductsListItem key={product.id} product={product} />
            ))}
          </List>
        </Box>
      )}
      {!isLoading && dayProducts.length === 0 && currentDate === today && (
        <Box sx={{ color: '#fc842d', marginBottom: 5 }}>
          Сьогодні Ви нічого не їли :(
        </Box>
      )}
      {!isLoading && dayProducts.length === 0 && currentDate !== today && (
        <Box>{`${currentDate} Ви  нічого не їли`}</Box>
      )}
      {isLoading && <Spiner />}
    </>
  );
}

export default DiaryProductsList;
