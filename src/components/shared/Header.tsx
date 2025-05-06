
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  activePage?: 'home' | 'catalog' | 'spring-collection' | 'sales' | 'ideas' | 'about';
}

export const Header = ({ activePage }: HeaderProps) => {
  return (
    <header className="bg-white py-4 px-4 md:px-8 shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold tracking-tight">COSMORELAX</h1>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link 
            to="/catalog" 
            className={`text-black hover:text-gray-600 ${activePage === 'catalog' ? 'border-b-2 border-black' : ''}`}
          >
            Каталог
          </Link>
          <Link 
            to="/spring-collection" 
            className={`text-black hover:text-gray-600 ${activePage === 'spring-collection' ? 'border-b-2 border-black' : ''}`}
          >
            Весенняя коллекция
          </Link>
          <Link 
            to="/" 
            className={`text-black hover:text-gray-600 ${activePage === 'sales' ? 'border-b-2 border-black' : ''}`}
          >
            Акции
          </Link>
          <Link 
            to="/" 
            className={`text-black hover:text-gray-600 ${activePage === 'ideas' ? 'border-b-2 border-black' : ''}`}
          >
            Идеи
          </Link>
          <Link 
            to="/" 
            className={`text-black hover:text-gray-600 ${activePage === 'about' ? 'border-b-2 border-black' : ''}`}
          >
            О нас
          </Link>
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
  );
};

export default Header;
