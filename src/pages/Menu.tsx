import { useState } from 'react';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'appetizer' | 'main' | 'dessert' | 'drink';
  dietary: ('vegetarian' | 'gluten-free' | 'spicy')[];
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');

  const menuItems: MenuItem[] = [
    { id: 1, name: 'Truffle Arancini', description: 'Crispy risotto balls, black truffle, aged mozzarella, saffron aioli', price: '$22', category: 'appetizer', dietary: ['vegetarian'] },
    { id: 2, name: 'Seared Scallops', description: 'Cauliflower velouté, pancetta crumble, caviar pearls', price: '$28', category: 'appetizer', dietary: ['gluten-free'] },
    { id: 3, name: 'Burrata & Heirloom', description: 'Hand-pulled burrata, heirloom tomatoes, aged balsamic, basil oil', price: '$24', category: 'appetizer', dietary: ['vegetarian', 'gluten-free'] },
    { id: 4, name: 'Filet Mignon', description: '8oz grass-fed tenderloin, truffle pomme purée, bordelaise', price: '$82', category: 'main', dietary: ['gluten-free'] },
    { id: 5, name: 'Lobster Linguine', description: 'Live lobster, Amalfi lemon, champagne cream, bottarga', price: '$68', category: 'main', dietary: [] },
    { id: 6, name: 'Wild Mushroom Risotto', description: 'Carnaroli, porcini, chanterelle, aged Parmesan, white truffle oil', price: '$46', category: 'main', dietary: ['vegetarian', 'gluten-free'] },
    { id: 7, name: 'Duck Confit', description: 'Slow-cooked duck leg, cherry gastrique, roasted heritage vegetables', price: '$54', category: 'main', dietary: ['gluten-free'] },
    { id: 8, name: 'Crème Brûlée', description: 'Madagascar vanilla bean, caramelised Demerara crust', price: '$18', category: 'dessert', dietary: ['vegetarian', 'gluten-free'] },
    { id: 9, name: 'Valrhona Tart', description: '72% dark ganache, raspberry coulis, edible gold leaf', price: '$22', category: 'dessert', dietary: ['vegetarian'] },
    { id: 10, name: 'Seasonal Sorbet', description: 'Three house-made sorbets, seasonal fruit, elderflower syrup', price: '$16', category: 'dessert', dietary: ['vegetarian', 'gluten-free'] },
    { id: 11, name: 'Signature Cocktail', description: 'Award-winning gin, elderflower, yuzu, champagne foam', price: '$22', category: 'drink', dietary: [] },
    { id: 12, name: 'Sommelier Selection', description: 'Curated glass from our 500-bottle cellar', price: '$18–$38', category: 'drink', dietary: ['vegetarian', 'gluten-free'] },
    { id: 13, name: 'Craft Mocktail', description: 'House-pressed botanicals, fresh herbs, sparkling spring water', price: '$14', category: 'drink', dietary: ['vegetarian', 'gluten-free'] },
  ];

  const categories = [
    { id: 'all', name: 'Full Menu' },
    { id: 'appetizer', name: 'Starters' },
    { id: 'main', name: 'Mains' },
    { id: 'dessert', name: 'Desserts' },
    { id: 'drink', name: 'Drinks' },
  ];

  const dietaryOptions = [
    { id: 'all', name: 'All' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'gluten-free', name: 'Gluten-Free' },
    { id: 'spicy', name: 'Spicy' },
  ];

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const dietaryMatch = dietaryFilter === 'all' || item.dietary.includes(dietaryFilter as any);
    return categoryMatch && dietaryMatch;
  });

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-20 text-center">
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Culinary Programme
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 300, color: '#F5F0E8', marginBottom: '1rem' }}>
            The Menu
          </h1>
          <div className="gold-line" style={{ marginBottom: '1.5rem' }} />
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.78rem', color: '#8C8070', lineHeight: 2, maxWidth: '520px', margin: '0 auto', fontWeight: 300 }}>
            Seasonal ingredients, classical techniques, and bold imagination. Our menu evolves to honour nature's finest produce.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-14" style={{ borderBottom: '1px solid rgba(201,168,76,0.1)', paddingBottom: '2rem' }}>
          <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.62rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    padding: '8px 20px',
                    border: selectedCategory === cat.id ? '1px solid #C9A84C' : '1px solid rgba(201,168,76,0.18)',
                    color: selectedCategory === cat.id ? '#C9A84C' : '#8C8070',
                    background: selectedCategory === cat.id ? 'rgba(201,168,76,0.07)' : 'transparent',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <div style={{ width: '1px', height: '24px', background: 'rgba(201,168,76,0.2)' }} className="hidden md:block" />
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setDietaryFilter(opt.id)}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '6px 14px',
                    border: dietaryFilter === opt.id ? '1px solid #C9A84C' : '1px solid rgba(201,168,76,0.1)',
                    color: dietaryFilter === opt.id ? '#C9A84C' : '#4A4040',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {opt.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div key={item.id} className="luxury-card p-7">
              <div className="flex items-start justify-between mb-3">
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, color: '#F5F0E8', flex: 1 }}>{item.name}</h3>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 500, color: '#C9A84C', marginLeft: '1rem', whiteSpace: 'nowrap' }}>{item.price}</span>
              </div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', color: '#8C8070', lineHeight: 1.9, fontWeight: 300, marginBottom: '1rem' }}>{item.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {item.dietary.map((d) => (
                    <span key={d} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.52rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.25)', padding: '2px 8px' }}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center" style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '2rem' }}>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', color: '#8C8070', letterSpacing: '0.06em', lineHeight: 2 }}>
            Please inform your server of any allergies. Menu subject to seasonal change.<br />
            <span style={{ color: '#4A4040' }}>Prices exclude tax and service.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;