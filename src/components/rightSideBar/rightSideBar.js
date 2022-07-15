import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { notRecommendedProducts } from '../../redux/day/day_selector';

import s from './rightSideBar.module.css';

const SideBar = ({ kcalRemain, totalKcalPerDay, dayNorm, percentage }) => {
  const date = new Date();
  const currentDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const products = useSelector(notRecommendedProducts);

  const [notRecommended, setNotRecommended] = useState([]);

  useEffect(() => {
    if (products) {
      setNotRecommended(products);
    }
  }, [products]);

  return (
    <div className={s.sideBar}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div>
            <h3 className={s.sideBarTitle}>Звiт за {currentDate}</h3>
            <ul className={s.sideBarList}>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>Залишилось</p>
                <p className={s.sideBarText}>
                  {!kcalRemain ? '000 ккал' : { kcalRemain }}
                </p>
              </li>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>Вжито</p>
                <p className={s.sideBarText}>
                  {!totalKcalPerDay ? '000 ккал' : { totalKcalPerDay }}
                </p>
              </li>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>Дeнна норма</p>
                <p className={s.sideBarText}>
                  {!dayNorm ? '000 ккал' : { dayNorm }}
                </p>
              </li>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>n% вiд норми</p>
                <p className={s.sideBarText}>
                  {!percentage ? '0 %' : { percentage }}
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={s.sideBarTitle}>Нерекомендовані продукти</h3>
            <ul className={s.sideBarProductList}>
              <li className={s.sideBarText}>
                {notRecommended.length > 0
                  ? notRecommended.join(', ')
                  : 'Тут відображатиметься Ваш раціон'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
