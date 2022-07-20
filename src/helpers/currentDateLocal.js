const today = new Date().toLocaleDateString('fr-CA');
// const today = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
//   .toISOString()
//   .split('T')[0]; // Текущий день локально

export default today;
