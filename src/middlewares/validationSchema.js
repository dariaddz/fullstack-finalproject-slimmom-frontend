import * as yup from 'yup';

const validationSchema = yup.object().shape({
    height: yup
      .number()
      .required('Зазначте ваш зріcт')
      .positive()
      .integer()
      .min(100, 'Ріст повинен бути від 100 см')
      .max(250, 'Ріст не повинен більше 250 см'),
    age: yup
      .number()
      .required('Зазначте ваш вік')
      .positive()
      .integer()
      .min(18, 'Тільки для повнолітніх (18+)')
      .max(100, 'Максимальний вік 100 років'),
  
    currentWeight: yup
      .number()
  
      .required('Зазначте вашу поточну вагу')
      .positive()
      .integer()
      .min(20, 'Мінімальна вага 20 кг')
      .max(500, 'Максимальна вага 500 кг'),
    desiredWeight: yup
      .number()
  
      .required('Зазначте вашу бажану вагу')
      .positive()
      .integer()
      .min(20, 'Мінімальна вага 20 кг')
      .max(500, 'Максимальна вага 500 кг'),
  });

  export default validationSchema;