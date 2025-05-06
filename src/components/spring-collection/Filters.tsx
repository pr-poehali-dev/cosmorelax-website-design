
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const Filters = () => {
  return (
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
  );
};

export default Filters;
