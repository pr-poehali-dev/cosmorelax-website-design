
import Icon from "@/components/ui/icon";

export const DesignTips = () => {
  return (
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
  );
};

export default DesignTips;
