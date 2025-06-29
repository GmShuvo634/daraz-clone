import React from 'react';
import { TopBar } from './components/Header/TopBar';
import { Navbar } from './components/Header/Navbar';
import { CategoryMenu } from './components/Navigation/CategoryMenu';
import { HeroBanner } from './components/Banner/HeroBanner';
import { QuickCategories } from './components/Categories/QuickCategories';
import { FlashSale } from './components/Products/FlashSale';
import { ProductGrid } from './components/Products/ProductGrid';
import { Footer } from './components/Footer/Footer';
import { mallProducts, justForYouProducts } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <TopBar />
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Banner Section */}
        <section className="bg-gray-100 py-4">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-2">
                <CategoryMenu />
              </div>
              <div className="md:col-span-10">
                <HeroBanner />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Categories */}
        <QuickCategories />

        {/* Flash Sale */}
        <FlashSale />

        {/* Mall Products */}
        <ProductGrid 
          title="Mall" 
          products={mallProducts} 
          showCompany={true}
        />

        {/* Just For You */}
        <ProductGrid 
          title="Just For You" 
          products={justForYouProducts}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;