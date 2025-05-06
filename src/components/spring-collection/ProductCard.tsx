
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  formatPrice: (price: number) => string;
}

export const ProductCard = ({ product, formatPrice }: ProductCardProps) => {
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

export default ProductCard;
