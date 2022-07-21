import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowWidth } from '@react-hook/window-size';
import { toast } from 'react-hot-toast';

// import { useNavigate } from 'react-router-dom';

import debounce from 'lodash.debounce';
import styles from './diaryAddProductForm.module.css';

import {
  getProducts,
  addProduct,
  // dateEatenProduct,
} from '../../redux/day/day_operation';
import { dateEatenProducts } from '../../redux/day/day_selector';

// import useViewport from './helperAdd';

const DiaryAddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [productCkal, setProductCkal] = useState('');
  const [debouncedProduct, setDebouncedProduct] = useState([]);

  const dispatch = useDispatch();

  const date = useSelector(dateEatenProducts);
  const currentDate = new Date().toLocaleDateString('fr-CA');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    debounce(() => {
      productName.length >= 3 &&
        getProducts(productName).then(products => {
          setDebouncedProduct(products);
        });
    }, 500),
    [productName]
  );
  const handleSearchProduct = event => {
    const { value } = event.target;
    setProductName(value);
    if (!debouncedProduct) {
      return null;
    }
    const foundArrayCkal = debouncedProduct?.find(el => el.title === value);
    const foundCkal = foundArrayCkal?.kcal;
    setProductCkal(foundCkal);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeWeight = useCallback(event => {
    const { value } = event.target;
    if (value > 5000) {
      setProductWeight('');
      return toast.error('Введіть коректну вагу');
    }
    setProductWeight(Number(value));
  });

  // const { width } = useViewport();
  // const breakpoint = 767;

  const handleSubmit = event => {
    event.preventDefault();
    if (debouncedProduct.length === 0) {
      setProductName('');
      return toast.error('Виберіть продукт зі списку');
    }
    const searchProduct = debouncedProduct?.find(
      el => el.title === productName
    );

    if (!searchProduct) {
      setProductName('');
      return toast.error('Виберіть продукт зі списку');
    }
    // dispatch(dateEatenProduct(date))
    dispatch(
      addProduct({
        kcal: Number(productCkal),
        weight: Number(productWeight),
        title: productName,
      })
    );
    // dispatch(dateEatenProduct(date));
    // if (width < breakpoint) {
    //   handleGoBack();
    // }
    clear();
    return toast.success('Продукт успішно додано');
  };

  // const navigate = useNavigate();
  // const handleGoBack = () => {
  //   navigate('/diary');
  // };

  const clear = () => {
    setProductName('');
    setProductWeight('');
  };

  const onlyWidth = useWindowWidth();
  return (
    <>
      {currentDate === date ? (
        <form
          className={onlyWidth >= 768 ? styles.form : styles.form_Mobile}
          onSubmit={handleSubmit}
        >
          <input
            className={styles.input}
            list="cookies"
            name="product"
            value={productName}
            placeholder="Введіть назву продукту"
            type="text"
            autoComplete="off"
            onChange={handleSearchProduct}
            required
          />

          {debouncedProduct?.length > 0 && (
            <datalist id="cookies">
              {debouncedProduct.map(({ id, title }) => (
                <option key={id} value={title}>
                  {title}
                </option>
              ))}
            </datalist>
          )}
          <input
            className={styles.input}
            name="weight"
            value={productWeight}
            placeholder="Грами"
            type="number"
            min="1"
            onChange={handleChangeWeight}
            required
          />
          {onlyWidth >= 768 ? (
            <button type="submit" className={styles.btn}></button>
          ) : (
            ''
          )}
          {onlyWidth < 768 ? (
            <button type="submit" className={styles.btn_Add}>
              Додати
            </button>
          ) : (
            ''
          )}
        </form>
      ) : null}
    </>
  );
};

export default DiaryAddProductForm;
