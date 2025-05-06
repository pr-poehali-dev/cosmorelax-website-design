
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
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  colors: string[];
  collection: string;
}

// Весенняя коллекция товаров
const springProducts: Product[] = [
  {
    id: 101,
    title: "Ваза BLOOM",
    category: "Декор",
    price: 4990,
    image: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?q=80&w=2071&auto=format&fit=crop",
    isNew: true,
    colors: ["#E8E6DF", "#B5C0BA", "#F3E3E2"],
    collection: "Весна 2025"
  },
  {
    id: 102,
    title: "Кресло PASTEL",
    category: "Мебель",
    price: 29990,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop",
    colors: ["#E8E6DF", "#F3E3E2", "#B5C0BA"],
    collection: "Весна 2025"
  },
  {
    id: 103,
    title: "Подушки декоративные FRESH",
    category: "Текстиль",
    price: 2990,
    image: "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=2080&auto=format&fit=crop",
    isBestseller: true,
    colors: ["#E8E6DF", "#B5C0BA", "#D2E1E9", "#F3E3E2"],
    collection: "Весна 2025"
  },
  {
    id: 104,
    title: "Настольная лампа LEAF",
    category: "Освещение",
    price: 7890,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop",
    isNew: true,
    discount: 10,
    colors: ["#E8E6DF", "#D2E1E9"],
    collection: "Весна 2025"
  },
  {
    id: 105,
    title: "Журнальный столик NATURE",
    category: "Мебель",
    price: 15990,
    image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=2106&auto=format&fit=crop",
    colors: ["#E8E6DF", "#D2E1E9"],
    collection: "Весна 2025"
  },
  {
    id: 106,
    title: "Ковер MEADOW",
    category: "Текстиль",
    price: 12990,
    image: "https://images.unsplash.com/photo-1603204077302-96af0934384b?q=80&w=1780&auto=format&fit=crop",
    isNew: true,
    colors: ["#E8E6DF", "#B5C0BA", "#D2E1E9"],
    collection: "Весна 2025"
  },
  {
    id: 107,
    title: "Керамический горшок FLORA",
    category: "Декор",
    price: 2490,
    image: "https://images.unsplash.com/photo-1602413896203-93bd5c28a97c?q=80&w=1974&auto=format&fit=crop",
    isBestseller: true,
    colors: ["#E8E6DF", "#F3E3E2", "#D2E1E9"],
    collection: "Весна 2025"
  },
  {
    id: 108,
    title: "Пледы SOFT TOUCH",
    category: "Текстиль",
    price: 5990,
    discount: 15,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1780&auto=format&fit=crop",
    colors: ["#E8E6DF", "#B5C0BA", "#F3E3E2", "#D2E1E9"],
    collection: "Весна 2025"
  },
  {
    id: 109,
    title: "Обеденный стол LIGHT",
    category: "Мебель",
    price: 42990,
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1974&auto=format&fit=crop",
    colors: ["#E8E6DF", "#F3E3E2"],
    collection: "Весна 2025"
  },
  {
    id: 110,
    title: "Зеркало SUNRISE",
    category: "Декор",
    price: 8990,
    image: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?q=80&w=1780&auto=format&fit=crop",
    isNew: true,
    colors: ["#E8E6DF", "#F3E3E2", "#D2E1E9"],
    collection: "Весна 2025"
  },
  {
    id: 111,
    title: "Торшер BLOSSOM",
    category: "Освещение",
    price: 14990,
    image: "https://images.unsplash.com/photo-1574280363402-2f672940b871?q=80&w=1974&auto=format&fit=crop",
    colors: ["#E8E6DF", "#F3E3E2"],
    collection: "Весна 2025"
  },
  {
    id: 112,
    title: "Подсвечник GLOW",
    category: "Декор",
    price: 1990,
    discount: 5,
    image: "https://images.unsplash.com/photo-1594576722256-a3f91f611ad5?q=80&w=1780&auto=format&fit=crop",
    isBestseller: true,
    colors: ["#E8E6DF", "#B5C0BA", "#F3E3E2"],
    collection: "Весна 2025"
  }
];

const SpringCollection = () => {
  // Состояния для фильтрации и сортировки
  const [selectedTab, setSelectedTab] = useState("all");
  const [sortOption, setSortOption] = useState("popular");
  
  // Форматирование цены
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
  };

  // Фильтрация товаров в зависимости от выбранной категории
  const filteredProducts = selectedTab === "all" 
    ? springProducts 
    : springProducts.filter(product => product.category.toLowerCase() === selectedTab);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f8f6]">
      {/* Header */}
      <header className="bg-white py-4 px-4 md:px-8 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold tracking-tight">COSMORELAX</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/catalog" className="text-black hover:text-gray-600">Каталог</Link>
            <Link to="/spring-collection" className="text-black hover:text-gray-600 border-b-2 border-black">Весенняя коллекция</Link>
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
            <span className="font-medium">Весенняя коллекция</span>
          </nav>
        </div>
      </div>

      {/* Spring Banner */}
      <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=2106&auto=format&fit=crop")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Весенняя коллекция 2025</h1>
          <p className="text-xl text-white mb-8 max-w-xl">Свежие идеи для обновления интерьера. Легкие текстуры, пастельные оттенки и природные мотивы</p>
          <div className="flex gap-4">
            <Button className="bg-white text-black hover:bg-gray-100 w-fit">
              Смотреть все товары
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 w-fit">
              Вдохновение
            </Button>
          </div>
        </div>
      </div>

      {/* Color palette showcase */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-light mb-6 text-center">Цветовая палитра сезона</h2>
          <div className="flex justify-center gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#E8E6DF]"></div>
              <span className="text-xs mt-2">Песочный</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#B5C0BA]"></div>
              <span className="text-xs mt-2">Шалфей</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#F3E3E2]"></div>
              <span className="text-xs mt-2">Розовая пудра</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#D2E1E9]"></div>
              <span className="text-xs mt-2">Голубой</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex-grow">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-medium mb-4">Фильтры</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Цвета</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#E8E6DF] cursor-pointer hover:ring-2 hover:ring-black ring-offset-2"></div>
                  <div className="w-6 h-6 rounded-full bg-[#B5C0BA] cursor-pointer hover:ring-2 hover:ring-black ring-offset-2"></div>
                  <div className="w-6 h-6 rounded-full bg-[#F3E3E2] cursor-pointer hover:ring-2 hover:ring-black ring-offset-2"></div>
                  <div className="w-6 h-6 rounded-full bg-[#D2E1E9] cursor-pointer hover:ring-2 hover:ring-black ring-offset-2"></div>
                </div>
              </div>
              
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
            
            {/* Spring lookbook preview */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-4">Лукбук коллекции</h3>
              <div className="aspect-[3/4] bg-cover bg-center rounded-md mb-4" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1974&auto=format&fit=crop")' }}></div>
              <p className="text-sm text-gray-600 mb-4">Вдохновение для вашего интерьера: идеи оформления в весеннем стиле</p>
              <Button variant="outline" className="w-full border-black">
                Смотреть лукбук
              </Button>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab} className="w-full md:w-auto">
                <TabsList className="bg-white border">
                  <TabsTrigger value="all">Все</TabsTrigger>
                  <TabsTrigger value="мебель">Мебель</TabsTrigger>
                  <TabsTrigger value="освещение">Освещение</TabsTrigger>
                  <TabsTrigger value="декор">Декор</TabsTrigger>
                  <TabsTrigger value="текстиль">Текстиль</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="flex items-center space-x-2 w-full md:w-auto">
                <span className="text-sm whitespace-nowrap">Сортировать:</span>
                <Select value={sortOption} onValueChange={setSortOption} className="w-full md:w-auto">
                  <SelectTrigger className="w-full md:w-[180px] h-9 text-sm">
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
              {filteredProducts.map((product) => (
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
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
      
      {/* Spring design tips */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">Оформление интерьера весной</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#f9f8f6] flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" className="h-8 w-8 text-[#B5C0BA]" />
              </div>
              <h3 className="font-medium mb-2">Природные мотивы</h3>
              <p className="text-sm text-gray-600">Добавьте элементы природы: живые растения, цветы, натуральные материалы и текстуры.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#f9f8f6] flex items-center justify-center mx-auto mb-4">
                <Icon name="Palette" className="h-8 w-8 text-[#F3E3E2]" />
              </div>
              <h3 className="font-medium mb-2">Пастельные оттенки</h3>
              <p className="text-sm text-gray-600">Используйте мягкие, нежные цвета: песочный, шалфейный, розовый, голубой.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#f9f8f6] flex items-center justify-center mx-auto mb-4">
                <Icon name="SunMedium" className="h-8 w-8 text-[#D2E1E9]" />
              </div>
              <h3 className="font-medium mb-2">Больше света</h3>
              <p className="text-sm text-gray-600">Выбирайте легкие шторы, добавляйте зеркала и источники освещения для создания яркого пространства.</p>
            </div>
          </div>
        </div>
      </section>

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
        
        {/* Collection badge */}
        <div className="absolute bottom-2 left-2">
          <div className="bg-white/80 text-black text-xs px-2 py-1">
            {product.collection}
          </div>
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
        <div className="flex mt-3 space-x-1">
          {product.colors.map((color, index) => (
            <div 
              key={index} 
              className="w-4 h-4 rounded-full cursor-pointer border border-gray-200"
              style={{ backgroundColor: color }}
            ></div>
          ))}
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

export default SpringCollection;
