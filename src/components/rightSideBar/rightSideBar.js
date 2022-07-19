import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import s from './rightSideBar.module.css';
import {
  notRecommendedProducts,
  getKcalRemain,
  getPercentage,
  getTotalKcalPerDay,
  dateEatenProducts,
} from '../../redux/day/day_selector';

import {
  getNotRecommendedProducts,
  getKcalAmount,
} from '../../redux/calculator/calculator_selector';
import { getCalcData } from '../../redux/calculator/calculator_operation';

export const ResetProductState = () => {
  const dispatch = useDispatch();
  dispatch({ kcal: null, productsNotRecommended: null });
};

const SideBar = () => {
  const dispatch = useDispatch();
  const date = useSelector(dateEatenProducts);
  const notRecommended = useSelector(notRecommendedProducts);
  const token = useSelector(state => state.auth.token);
  const kcalRemain = useSelector(getKcalRemain);
  const percentage = useSelector(getPercentage);
  const totalKcalPerDay = useSelector(getTotalKcalPerDay);
  const kcal = useSelector(getKcalAmount);
  const productsNotRecommended = useSelector(getNotRecommendedProducts);

  const today = new Date();

  const currentDate = `${today.getFullYear()}-${(
    '0' +
    (today.getMonth() + 1)
  ).slice(-2)}-${today.getDate()}`;
  useEffect(() => {
    dispatch(getCalcData(currentDate, token));
  }, [dispatch, currentDate, token, kcal]);

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
                  {!kcalRemain ? '000' : kcalRemain} ккал
                </p>
              </li>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>Вжито</p>
                <p className={s.sideBarText}>
                  {!totalKcalPerDay ? '000' : totalKcalPerDay} ккал
                </p>
              </li>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>Дeнна норма</p>
                <p className={s.sideBarText}>{!kcal ? '000' : kcal} ккал</p>
              </li>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>n% вiд норми</p>
                <p className={s.sideBarText}>
                  {!percentage ? '0' : percentage} %
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
