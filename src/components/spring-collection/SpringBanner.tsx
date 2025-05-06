
import { Button } from "@/components/ui/button";

export const SpringBanner = () => {
  return (
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
  );
};

export default SpringBanner;
