
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export const Footer = () => {
  return (
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
  );
};

export default Footer;
