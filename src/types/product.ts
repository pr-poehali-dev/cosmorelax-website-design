
export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  discount?: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
  colors: string[];
  collection: string;
}

export interface SortOption {
  value: string;
  label: string;
}

export const SORT_OPTIONS: SortOption[] = [
  { value: "popular", label: "По популярности" },
  { value: "price_asc", label: "Сначала дешевле" },
  { value: "price_desc", label: "Сначала дороже" },
  { value: "new", label: "Сначала новинки" }
];
