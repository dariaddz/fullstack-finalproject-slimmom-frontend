import { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { dateEatenProduct } from '../../redux/day/day_operation';

import styles from './dateForm.module.css';
import { ReactComponent as CalendarIcon } from '../../images/calendar.svg';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DiaryDateCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

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
        title="Нажмите для выбора даты"
      >
        {startDate.toLocaleDateString('ru-RU')}
      </span>

      <span>
        <CalendarIcon
          alt="Выбор даты на календаре"
          title="Нажмите для выбора даты"
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
        todayButton="Сегодня"
        // locale="ru-RU"
      />
    </div>
  );
};

export default DiaryDateCalendar;
