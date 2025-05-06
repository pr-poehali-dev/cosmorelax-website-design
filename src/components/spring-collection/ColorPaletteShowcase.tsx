
export const ColorPaletteShowcase = () => {
  return (
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
  );
};

export default ColorPaletteShowcase;
