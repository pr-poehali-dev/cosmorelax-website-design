
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
      {/* Header */}
      <header className="bg-white py-4 px-4 md:px-8 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight">COSMORELAX</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="text-black hover:text-gray-600">Каталог</Link>
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

      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Современный дизайн для вашего дома</h2>
          <p className="text-xl text-white mb-8 max-w-xl">Мебель и аксессуары, которые делают пространство особенным</p>
          <Button className="bg-white text-black hover:bg-gray-100 w-fit">Смотреть каталог</Button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Категории</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard 
            title="Мебель" 
            image="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2187&auto=format&fit=crop"
          />
          <CategoryCard 
            title="Освещение" 
            image="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
          />
          <CategoryCard 
            title="Декор" 
            image="https://images.unsplash.com/photo-1586208958839-06c17cacdf08?q=80&w=2080&auto=format&fit=crop"
          />
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Популярные товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <ProductCard 
              title="Кресло OSLO"
              price="24 990 ₽"
              image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
            />
            <ProductCard 
              title="Стол обеденный LUNAR"
              price="32 590 ₽"
              image="https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=2187&auto=format&fit=crop"
            />
            <ProductCard 
              title="Светильник GLOBE"
              price="8 990 ₽"
              image="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
            />
            <ProductCard 
              title="Ваза NORI"
              price="3 290 ₽"
              image="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=2187&auto=format&fit=crop"
            />
          </div>
          <div className="mt-10 text-center">
            <Button className="bg-black text-white hover:bg-gray-800">Смотреть все товары</Button>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <section className="py-16 px-4 md:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Дизайн, который вдохновляет</h2>
              <p className="text-gray-600 mb-6">
                Наша коллекция COSMORELAX создана для тех, кто ценит эстетику в каждой детали. 
                Мы тщательно отбираем лучшие образцы современного дизайна, сочетая функциональность 
                и красоту в каждом изделии.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-black text-white hover:bg-gray-800">О бренде</Button>
                <Button variant="outline" className="border-black">Каталог</Button>
              </div>
            </div>
            <div className="relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop" 
                alt="Interior design" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 md:px-8">
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

// Component for category cards
const CategoryCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg cursor-pointer">
      <div className="h-[280px] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
        <h3 className="text-white text-xl font-medium">{title}</h3>
      </div>
    </div>
  );
};

// Component for product cards
const ProductCard = ({ title, price, image }: { title: string; price: string; image: string }) => {
  return (
    <Card className="border-none shadow-sm overflow-hidden group">
      <div className="h-[240px] overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="pt-4">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        <p className="text-gray-600 mt-1">{price}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" size="sm" className="w-full border-black hover:bg-black hover:text-white transition-colors">
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Index;
