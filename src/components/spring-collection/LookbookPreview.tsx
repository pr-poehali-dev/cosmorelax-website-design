
import { Button } from "@/components/ui/button";

export const LookbookPreview = () => {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-medium mb-4">Лукбук коллекции</h3>
      <div 
        className="aspect-[3/4] bg-cover bg-center rounded-md mb-4" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1974&auto=format&fit=crop")' }}
      ></div>
      <p className="text-sm text-gray-600 mb-4">
        Вдохновение для вашего интерьера: идеи оформления в весеннем стиле
      </p>
      <Button variant="outline" className="w-full border-black">
        Смотреть лукбук
      </Button>
    </div>
  );
};

export default LookbookPreview;
