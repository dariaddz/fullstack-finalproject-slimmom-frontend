export const allProducts = state => state.products.diaryInfo.products;
export const dateEatenProducts = state => state.products.diaryInfo.date;
export const notRecommendedProducts = state =>
  state.products.diaryInfo.productsNotRecommended;
export const diaryInfo = state => state.products.diaryInfo;
export const productLoading = state => state.products.loading;
export const getKcalRemain = state => state.products.diaryInfo.kcalRemain;
export const getPercentage = state => state.products.diaryInfo.percentage;
export const getTotalKcalPerDay = state =>
  state.products.diaryInfo.totalKcalPerDay;
export const getDayNorm = state => state.products.diaryInfo.dayNorm;
