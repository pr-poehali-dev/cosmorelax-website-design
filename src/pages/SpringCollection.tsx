
import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SpringBanner from "@/components/spring-collection/SpringBanner";
import ColorPaletteShowcase from "@/components/spring-collection/ColorPaletteShowcase";
import Filters from "@/components/spring-collection/Filters";
import LookbookPreview from "@/components/spring-collection/LookbookPreview";
import ProductGrid from "@/components/spring-collection/ProductGrid";
import DesignTips from "@/components/spring-collection/DesignTips";
import { springProducts } from "@/data/springProducts";

const SpringCollection: React.FC = () => {
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Весенняя коллекция" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f8f6]">
      {/* Header */}
      <Header activePage="spring-collection" />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Spring Banner */}
      <SpringBanner />

      {/* Color palette showcase */}
      <ColorPaletteShowcase />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex-grow">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <Filters />
            <LookbookPreview />
          </div>
          
          {/* Products grid */}
          <ProductGrid products={springProducts} />
        </div>
      </div>
      
      {/* Spring design tips */}
      <DesignTips />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SpringCollection;
