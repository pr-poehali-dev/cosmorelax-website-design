
/**
 * Форматирует число как цену в формате "X XXX ₽"
 * @param price - цена в числовом формате
 * @returns - отформатированная строка с ценой
 */
export const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
};
