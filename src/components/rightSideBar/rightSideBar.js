import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getProductNotRecommended } from '../../redux/day/day_selector';
// import { date } from '../../redux/day/day_selector';

import s from './rightSideBar.module.css';

// const [startDate, setStartDate] = useState(initialDate);

// const today = { date: moment(day).format('YYYY-MM-DD') };

const SideBar = () => {
  const date = new Date();
  const currentDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <div className={s.sideBar}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div>
            <h3 className={s.sideBarTitle}>Звiт за {currentDate}</h3>
            <ul className={s.sideBarList}>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>Залишилось</p>
                <p className={s.sideBarText}>000 ккал</p>
              </li>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>Вжито</p>
                <p className={s.sideBarText}>000 ккал</p>
              </li>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>Дeнна норма</p>
                <p className={s.sideBarText}>000 ккал</p>
              </li>
              <li className={s.sideBarItem}>
                <p className={s.sideBarText}>n% вiд норми</p>
                <p className={s.sideBarText}>0 %</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={s.sideBarTitle}>Нерекомендовані продукти</h3>
            <ul className={s.sideBarProductList}>
              <li className={s.sideBarText}>
                Тут відображатиметься Ваш раціон
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
