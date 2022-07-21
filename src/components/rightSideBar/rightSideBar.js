import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import s from './rightSideBar.module.css';
import {
  notRecommendedProducts,
  getKcalRemain,
  getPercentage,
  getTotalKcalPerDay,
  dateEatenProducts,
  getDayNorm,
  allProducts,
} from '../../redux/day/day_selector';

import currentDate from '../../helpers/currentDateLocal';

import {
  getNotRecommendedProducts,
  getKcalAmount,
} from '../../redux/calculator/calculator_selector';
import { dateEatenProduct } from '../../redux/day/day_operation';

export const ResetProductState = () => {
  const dispatch = useDispatch();
  dispatch({ kcal: null, productsNotRecommended: null });
};

const SideBar = () => {
  const dispatch = useDispatch();
  const date = useSelector(dateEatenProducts);
  const notRecommended = useSelector(notRecommendedProducts);
  const kcalRemain = useSelector(getKcalRemain);
  const percentage = useSelector(getPercentage);
  const totalKcalPerDay = useSelector(getTotalKcalPerDay);
  const kcal = useSelector(getKcalAmount);
  const productsNotRecommended = useSelector(getNotRecommendedProducts);
  const dayNorm = useSelector(getDayNorm);
  const dayProducts = useSelector(allProducts);

  const productsArray = dayProducts.length;

  useEffect(() => {
    if (productsArray >= 0) {
      dispatch(dateEatenProduct(date));
    }
  }, [dispatch, productsArray, date]);

  const getMeRandomProducts = (sourceArray, neededElements) => {
    let result = [];
    for (var i = 0; i < neededElements; i += 1) {
      result.push(sourceArray[Math.floor(Math.random() * sourceArray.length)]);
    }
    return result;
  };

  return (
    <div className={s.sideBar}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div>
            <h3 className={s.sideBarTitle}>
              Звiт за {date ? date : currentDate}
            </h3>
            <ul className={s.sideBarList}>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>Залишилось</p>
                <p className={s.sideBarText}>
                  {kcalRemain < 0 ? (
                    <span className={s.span}>норму перевищено</span>
                  ) : kcalRemain > 0 ? (
                    <span className={s.sideBarText}>{kcalRemain} ккал </span>
                  ) : (
                    '000 ккал'
                  )}
                </p>
              </li>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>Вжито</p>
                <p className={s.sideBarText}>
                  {totalKcalPerDay ? totalKcalPerDay : '000'} ккал
                </p>
              </li>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>Дeнна норма</p>
                <p className={s.sideBarText}>
                  {kcal ? kcal : dayNorm ? dayNorm : '000'} ккал
                </p>
              </li>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>n% вiд норми</p>
                <p className={s.sideBarText}>
                  {percentage ? percentage : '0'} %
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={s.sideBarTitle}>Нерекомендовані продукти</h3>
            {productsNotRecommended.length > 0 ? (
              <ul className={s.sideBarProductList}>
                {getMeRandomProducts(productsNotRecommended, 100).map(
                  product => (
                    <li key={uuidv4()} className={s.sideBarItemText}>
                      {product},
                    </li>
                  )
                )}
              </ul>
            ) : notRecommended.length > 0 ? (
              <ul className={s.sideBarProductList}>
                {getMeRandomProducts(notRecommended, 100).map(product => (
                  <li key={uuidv4()} className={s.sideBarItemText}>
                    {product},
                  </li>
                ))}
              </ul>
            ) : (
              <p className={s.sideBarText}>Ваша дієта відображатиметься тут</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
