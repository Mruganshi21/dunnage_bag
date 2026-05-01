import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Products.css';

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
      name: 'Air Dunnage Bag',
      description: 'Durable, reusable and water-resistant packaging material',
      image: 'https://images.unsplash.com/photo-1589939705384-518513476a87?w=400',
      products: [
        { name: 'Bubble Roll', image: 'https://images.unsplash.com/photo-1607166452427-7e5c4c5f8b7c?w=300', features: ['Air-cushioned protection', 'Reusable', 'Water-resistant'], benefits: ['Prevents scratches', 'Lightweight', 'Adjustable'], subOptions: ['Small bubbles', 'Large bubbles', 'Anti-static'] },
        { name: 'Air Pillows', image: 'https://images.unsplash.com/photo-1607166452427-7e5c4c5f8b7c?w=300', features: ['Inflatable', 'Lightweight', 'Reusable'], benefits: ['Fills voids', 'Cost effective', 'Quick to use'], subOptions: ['Small', 'Medium', 'Large'] },
        { name: 'Foam Sheets', image: 'https://images.unsplash.com/photo-1607166452427-7e5c4c5f8b7c?w=300', features: ['Soft padding', 'Customizable', 'Non-abrasive'], benefits: ['Surface protection', 'Easy to cut', 'Versatile'], subOptions: ['Thin', 'Medium', 'Thick'] }
      ]
    },
    {
      id: 'paper',
      name: 'Paper Dunnage',
      description: 'Eco-friendly and biodegradable packaging solution',
      image: 'https://images.unsplash.com/photo-1607171015217-5f506c8e0139?w=400',
      products: [
        { name: 'Kraft Paper', image: 'https://images.unsplash.com/photo-1607171015217-5f506c8e0139?w=300', features: ['100% recyclable', 'Biodegradable', 'Strong cushioning'], benefits: ['Eco-friendly', 'Cost effective', 'Static-free'], subOptions: ['Standard Weight'] }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Equipment',
      description: 'Essential tools for efficient packaging operations',
      image: 'https://images.unsplash.com/photo-1535280361539-47d3da4d5a1a?w=400',
      products: [
        { name: 'Dispensers', image: 'https://images.unsplash.com/photo-1535280361539-47d3da4d5a1a?w=300', features: ['Easy to use', 'Adjustable', 'Durable'], benefits: ['Faster packing', 'Less waste', 'Professional'], subOptions: ['Manual', 'Auto-cut'] },
        { name: 'Sealing Machines', image: 'https://images.unsplash.com/photo-1535280361539-47d3da4d5a1a?w=300', features: ['Quick sealing', 'Consistent', 'Reliable'], benefits: ['Secure closure', 'Time saving', 'Clean finish'], subOptions: ['Handheld', 'Desktop'] }
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
                    
                    <div className="product-section">
                      <h5>Features</h5>
                      <ul>
                        {product.features.map((f, i) => <li key={i}>{f}</li>)}
                      </ul>
                    </div>

                    <div className="product-section">
                      <h5>Benefits</h5>
                      <ul>
                        {product.benefits.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </div>

                    <div className="product-section">
                      <h5>Available Options</h5>
                      <ul className="sub-options">
                        {product.subOptions.map((sub, i) => <li key={i}>{sub}</li>)}
                      </ul>
                    </div>
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