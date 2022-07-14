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
      .max(100, 'Ваш вік не повинен перевищувати 100 років'),
  
    currentWeight: yup
      .number()
  
      .required('Зазначте вашу поточну вагу')
      .positive()
      .integer()
      .min(20)
      .max(500),
    desiredWeight: yup
      .number()
  
      .required('Зазначте вашу бажану вагу')
      .positive()
      .integer()
      .min(40)
      .max(300),
  });

  export default validationSchema;