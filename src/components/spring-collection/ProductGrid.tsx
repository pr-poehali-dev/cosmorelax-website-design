
import { useState } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Product, SORT_OPTIONS } from "@/types/product";
import { formatPrice } from "@/utils/format";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [sortOption, setSortOption] = useState("popular");
  
  // Фильтрация товаров в зависимости от выбранной категории
  const filteredProducts = selectedTab === "all" 
    ? products 
    : products.filter(product => product.category.toLowerCase() === selectedTab);

  return (
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
              {SORT_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
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
  );
};

export default ProductGrid;
