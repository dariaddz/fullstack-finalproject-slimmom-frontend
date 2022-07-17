import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import s from './rightSideBar.module.css';
import { dateEatenProduct } from '../../redux/day/day_operation';

const SideBar = () => {
  const dispatch = useDispatch();
  const date = new Date();
  const currentDate = `${date.getFullYear()}-${(
    '0' +
    (date.getMonth() + 1)
  ).slice(-2)}-${date.getDate()}`;

  const kcalRemain = useSelector(state => state.products.diaryInfo.kcalRemain);

  const percentage = useSelector(state => state.products.diaryInfo.percentage);

  const totalKcalPerDay = useSelector(
    state => state.products.diaryInfo.totalKcalPerDay
  );

  const calcData = useSelector(state => state.kcal.calcData);

  dispatch(dateEatenProduct(currentDate));

  const getMeRandomProducts = (sourceArray, neededElements) => {
    let result = [];
    for (var i = 0; i < neededElements; i += 1) {
      result.push(sourceArray[Math.floor(Math.random() * sourceArray.length)]);
    }
    return result;
  };

  return (
    calcData && (
      <div className={s.sideBar}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <div>
              <h3 className={s.sideBarTitle}>Звiт за {currentDate} </h3>
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
                  <p className={s.sideBarText}>
                    {!calcData.kcal ? '000' : calcData.kcal} ккал
                  </p>
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
              {!calcData.productsNotRecommended ? (
                <p className={s.sideBarText}>
                  Ваша дієта відображатиметься тут
                </p>
              ) : (
                <ul className={s.sideBarProductList}>
                  {getMeRandomProducts(calcData.productsNotRecommended, 10).map(
                    product => (
                      <li key={uuidv4()} className={s.sideBarItemText}>
                        {product},
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SideBar;
