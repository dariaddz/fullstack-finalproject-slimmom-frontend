import DailyCaloriesForm from '../../components/dailyCaloriesForm';
import RightSideBar from '../../components/rightSideBar';
import s from './calculatorPage.module.css';

const calculatorPage = () => {
  return (
    <div className={s.container}>
      <div>
        <DailyCaloriesForm />
      </div>
      <RightSideBar />
    </div>
  );
};

export default calculatorPage;
