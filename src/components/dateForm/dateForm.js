import { useState, forwardRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dateEatenProduct } from '../../redux/day/day_operation';
import styles from './dateForm.module.css';
import { ReactComponent as CalendarIcon } from '../../images/calendar.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import today from '../../helpers/currentDateLocal';

const DiaryDateCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dateEatenProduct(startDate.toISOString().split('T')[0]));
  }, [dispatch, startDate]);

  const onChange = date => {
    const jsonData = date.toJSON();
    const formatData = jsonData.slice(0, 10);
    dispatch(dateEatenProduct(formatData));
    setStartDate(date);
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <>
      <span
        className={styles.date}
        onClick={onClick}
        ref={ref}
        title="Нажміть для выбора дати"
      >
        {startDate.toLocaleDateString('fr-CA')}
      </span>

      <span>
        <CalendarIcon
          alt="Вибір дати на календарі"
          title="Нажміть для выбора дати"
          width="18px"
          height="20px"
          className={styles.icon}
          onClick={onClick}
        />
      </span>
    </>
  ));

  // Возвращает кастомный инпут
  return (
    <div className={styles.wrapper}>
      <DatePicker
        selected={startDate}
        customInput={<CustomInput />}
        maxDate={new Date()}
        onChange={date => onChange(date)}
        todayButton="Сьогодні"
        // locale="ru-RU"
      />
    </div>
  );
};

export default DiaryDateCalendar;
