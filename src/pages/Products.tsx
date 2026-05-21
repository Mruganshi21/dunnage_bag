import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Products.css';
import plasticImage from '../assets/plastic.jpg';
import paperImage from '../assets/paper bag.png';
import gazzated from '../assets/gazzated.png';
import twinBagImage from '../assets/twin bag.jpg';
import toolsImage1 from '../assets/tools/ChatGPT Image May 16, 2026, 02_59_18 PM.png';
import toolsImage2 from '../assets/tools/ChatGPT Image May 16, 2026, 03_00_48 PM.png';
import toolsImage3 from '../assets/tools/ChatGPT Image May 16, 2026, 03_06_35 PM.png';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('cat');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCat);

  useEffect(() => {
    const cat = searchParams.get('cat');
    setSelectedCategory(cat);
  }, [searchParams]);

  const setCategory = (cat: string | null) => {
    setSelectedCategory(cat);
    if (cat) {
      setSearchParams({ cat });
    } else {
      setSearchParams({});
    }
  };

  const categories = [
    {
      id: 'plastic',
      name: 'PP Air Dunnage Bag',
      description: 'Durable, reusable and water-resistant packaging material',
      image: plasticImage,
      products: [
        { name: 'Regular', image: gazzated, features: ['Air-cushioned protection', 'Reusable', 'Water-resistant'], benefits: ['Prevents scratches', 'Lightweight', 'Adjustable'], subOptions: ['Small bubbles', 'Large bubbles', 'Anti-static'] },
        { name: 'Gazzeted', image: plasticImage, features: ['Inflatable', 'Lightweight', 'Reusable'], benefits: ['Fills voids', 'Cost effective', 'Quick to use'], subOptions: ['Small', 'Medium', 'Large'] },
        { name: 'Twin Bag', image: twinBagImage, features: ['Soft padding', 'Customizable', 'Non-abrasive'], benefits: ['Surface protection', 'Easy to cut', 'Versatile'], subOptions: ['Thin', 'Medium', 'Thick'] }
      ]
    },
    {
      id: 'paper',
      name: 'Paper Air Dunnage Bag',
      description: 'Eco-friendly and biodegradable packaging solution',
      image: paperImage,
      products: [
        { name: 'Laminated Paper', image: paperImage, features: ['100% recyclable', 'Biodegradable', 'Strong cushioning'], benefits: ['Eco-friendly', 'Cost effective', 'Static-free'], subOptions: ['Standard Weight'] },
        { name: '2 Ply Kraft Paper', image: paperImage, features: ['100% recyclable', 'Biodegradable', 'Strong cushioning'], benefits: ['Eco-friendly', 'Cost effective', 'Static-free'], subOptions: ['Standard Weight'] },
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Equipment',
      description: 'Essential tools for efficient packaging operations',
      image: toolsImage1,
      products: [
        { name: 'Electric Blower With Attachment', image: toolsImage2, features: ['Quick sealing', 'Consistent', 'Reliable'], benefits: ['Secure closure', 'Time saving', 'Clean finish'], subOptions: ['Handheld', 'Desktop'] },
         { name: 'Battery Operated Blower With Attachment', image: toolsImage3, features: ['Easy to use', 'Adjustable', 'Durable'], benefits: ['Faster packing', 'Less waste', 'Professional'], subOptions: ['Manual', 'Auto-cut'] },
        { name: 'Pneumatic Air Inflator Tool', image: toolsImage1, features: ['Easy to use', 'Adjustable', 'Durable'], benefits: ['Faster packing', 'Less waste', 'Professional'], subOptions: ['Manual', 'Auto-cut'] },
      ]
    }
  ];

  const currentCategory = categories.find(c => c.id === selectedCategory);

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="products-header">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h2>{currentCategory ? currentCategory.name : 'Our Products'}</h2>
          <p>{currentCategory ? currentCategory.description : 'Select a category to explore products'}</p>
        </div>

        {!selectedCategory ? (
          <div className="categories-grid">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="category-card"
                onClick={() => setCategory(category.id)}
              >
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span className="view-btn">View Products →</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="products-detail">
            <button className="back-to-cats" onClick={() => setCategory(null)}>
              ← All Categories
            </button>
            <h3>{currentCategory?.name}</h3>
            
            <div className={`products-grid ${currentCategory?.products.length === 1 ? 'single-product' : currentCategory?.products.length === 2 ? 'two-products' : ''}`}>
              {currentCategory?.products.map((product, idx) => (
                <div key={idx} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-content">
                    <h4>{product.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;