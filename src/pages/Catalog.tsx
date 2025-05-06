
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

// Типы и интерфейсы
interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  discount?: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

// Временные данные для примера
const products: Product[] = [
  {
    id: 1,
    title: "Кресло OSLO",
    category: "Мебель",
    price: 24990,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: 2,
    title: "Стол обеденный LUNAR",
    category: "Мебель",
    price: 32590,
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=2187&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Светильник GLOBE",
    category: "Освещение",
    price: 8990,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop",
    discount: 15
  },
  {
    id: 4,
    title: "Ваза NORI",
    category: "Декор",
    price: 3290,
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=2187&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 5,
    title: "Диван CLOUD",
    category: "Мебель",
    price: 85990,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Журнальный столик OVAL",
    category: "Мебель",
    price: 12990,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 7,
    title: "Настольная лампа HALO",
    category: "Освещение",
    price: 7490,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Зеркало ROUND",
    category: "Декор",
    price: 9990,
    image: "https://images.unsplash.com/photo-1616132211709-7dbb5699e192?q=80&w=2070&auto=format&fit=crop",
    discount: 10
  },
  {
    id: 9,
    title: "Стул MINIMAL",
    category: "Мебель",
    price: 8990,
    image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=2187&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: 10,
    title: "Подушка SOFT",
    category: "Текстиль",
    price: 1990,
    image: "https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Люстра CRYSTAL",
    category: "Освещение",
    price: 18990,
    image: "https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Ковер GEO",
    category: "Текстиль",
    price: 14990,
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=2187&auto=format&fit=crop"
  }
];

const Catalog = () => {
  // Состояния для фильтрации и сортировки
  const [priceRange, setPriceRange] = useState<number[]>([0, 100000]);
  const [sortOption, setSortOption] = useState("popular");
  
  // Форматирование цены
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
      {/* Header */}
      <header className="bg-white py-4 px-4 md:px-8 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold tracking-tight">COSMORELAX</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/catalog" className="text-black hover:text-gray-600 border-b-2 border-black">Каталог</Link>
            <Link to="/" className="text-black hover:text-gray-600">Новинки</Link>
            <Link to="/" className="text-black hover:text-gray-600">Акции</Link>
            <Link to="/" className="text-black hover:text-gray-600">Идеи</Link>
            <Link to="/" className="text-black hover:text-gray-600">О нас</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="User" className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-3 px-4 md:px-8 text-sm">
          <nav className="flex">
            <Link to="/" className="text-gray-500 hover:text-black">Главная</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="font-medium">Каталог</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-medium mb-4">Фильтры</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Категории</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="furniture" />
                    <label htmlFor="furniture" className="ml-2 text-sm">Мебель</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="lighting" />
                    <label htmlFor="lighting" className="ml-2 text-sm">Освещение</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="decor" />
                    <label htmlFor="decor" className="ml-2 text-sm">Декор</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="textiles" />
                    <label htmlFor="textiles" className="ml-2 text-sm">Текстиль</label>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Цена</h3>
                <div className="space-y-4">
                  <Slider 
                    defaultValue={[0, 100000]} 
                    max={100000} 
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex items-center justify-between">
                    <Input 
                      className="w-[45%] h-8" 
                      value={priceRange[0]} 
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    />
                    <span>-</span>
                    <Input 
                      className="w-[45%] h-8" 
                      value={priceRange[1]} 
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Спецпредложения</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="new" />
                    <label htmlFor="new" className="ml-2 text-sm">Новинки</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="bestsellers" />
                    <label htmlFor="bestsellers" className="ml-2 text-sm">Бестселлеры</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="sales" />
                    <label htmlFor="sales" className="ml-2 text-sm">Распродажа</label>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Применить
              </Button>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-600">{products.length} товаров</div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">Сортировать:</span>
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-[180px] h-9 text-sm">
                    <SelectValue placeholder="По популярности" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="price_asc">Сначала дешевле</SelectItem>
                    <SelectItem value="price_desc">Сначала дороже</SelectItem>
                    <SelectItem value="new">Сначала новинки</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  formatPrice={formatPrice}
                />
              ))}
            </div>
            
            <Pagination className="mt-12">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 md:px-8 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">COSMORELAX</h3>
            <p className="text-gray-400 text-sm">
              Интерьерные решения для современной жизни
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Каталог</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white">Мебель</Link></li>
              <li><Link to="/" className="hover:text-white">Освещение</Link></li>
              <li><Link to="/" className="hover:text-white">Декор</Link></li>
              <li><Link to="/" className="hover:text-white">Текстиль</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Информация</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white">О компании</Link></li>
              <li><Link to="/" className="hover:text-white">Доставка и оплата</Link></li>
              <li><Link to="/" className="hover:text-white">Возврат и обмен</Link></li>
              <li><Link to="/" className="hover:text-white">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>8 (800) 123-45-67</li>
              <li>info@cosmorelax.ru</li>
              <li>г. Москва, ул. Дизайнерская, 42</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link to="/" className="text-white">
                <Icon name="Instagram" className="h-5 w-5" />
              </Link>
              <Link to="/" className="text-white">
                <Icon name="Facebook" className="h-5 w-5" />
              </Link>
              <Link to="/" className="text-white">
                <Icon name="Youtube" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          © 2025 COSMORELAX. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

// Компонент карточки товара
interface ProductCardProps {
  product: Product;
  formatPrice: (price: number) => string;
}

const ProductCard = ({ product, formatPrice }: ProductCardProps) => {
  // Расчет цены со скидкой, если скидка есть
  const discountedPrice = product.discount 
    ? product.price - (product.price * product.discount / 100) 
    : null;
  
  return (
    <Card className="border-none shadow-sm overflow-hidden group transition-all hover:shadow-md">
      <div className="relative h-[240px] overflow-hidden bg-gray-100">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <div className="bg-black text-white text-xs px-2 py-1">
              Новинка
            </div>
          )}
          {product.discount && (
            <div className="bg-red-600 text-white text-xs px-2 py-1">
              -{product.discount}%
            </div>
          )}
          {product.isBestseller && (
            <div className="bg-amber-500 text-white text-xs px-2 py-1">
              Бестселлер
            </div>
          )}
        </div>
        
        {/* Wishlist button */}
        <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors">
          <Icon name="Heart" className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      
      <CardContent className="pt-4">
        <Link to={`/product/${product.id}`}>
          <CardTitle className="text-base font-medium hover:text-gray-600 transition-colors">
            {product.title}
          </CardTitle>
        </Link>
        <div className="text-sm text-gray-500 mt-1">
          {product.category}
        </div>
        <div className="mt-2">
          {discountedPrice ? (
            <div className="flex items-center gap-2">
              <span className="font-medium">{formatPrice(discountedPrice)}</span>
              <span className="text-sm text-gray-500 line-through">{formatPrice(product.price)}</span>
            </div>
          ) : (
            <span className="font-medium">{formatPrice(product.price)}</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button variant="outline" size="sm" className="w-full border-black hover:bg-black hover:text-white transition-colors">
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Catalog;
