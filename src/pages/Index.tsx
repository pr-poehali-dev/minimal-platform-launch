import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
  topPlacement?: boolean;
  rating: number;
  reviews: number;
};

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 12990,
    category: 'Электроника',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    topPlacement: true,
    featured: true,
    rating: 4.8,
    reviews: 234
  },
  {
    id: 2,
    name: 'Minimalist Watch',
    price: 8500,
    category: 'Аксессуары',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    featured: true,
    rating: 4.6,
    reviews: 189
  },
  {
    id: 3,
    name: 'Designer Sneakers',
    price: 15900,
    category: 'Обувь',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
    topPlacement: true,
    rating: 4.9,
    reviews: 412
  },
  {
    id: 4,
    name: 'Smart Home Speaker',
    price: 6990,
    category: 'Электроника',
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=500',
    rating: 4.5,
    reviews: 156
  },
  {
    id: 5,
    name: 'Leather Backpack',
    price: 9900,
    category: 'Аксессуары',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    rating: 4.7,
    reviews: 278
  },
  {
    id: 6,
    name: 'Organic Cotton T-Shirt',
    price: 2990,
    category: 'Одежда',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    rating: 4.4,
    reviews: 98
  }
];

const categories = ['Все', 'Электроника', 'Аксессуары', 'Обувь', 'Одежда'];

export default function Index() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategory === 'Все' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Store" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold">Market</h1>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              <Button
                variant={activeTab === 'home' ? 'secondary' : 'ghost'}
                onClick={() => setActiveTab('home')}
                className="gap-2"
              >
                <Icon name="Home" size={18} />
                Главная
              </Button>
              <Button
                variant={activeTab === 'catalog' ? 'secondary' : 'ghost'}
                onClick={() => setActiveTab('catalog')}
                className="gap-2"
              >
                <Icon name="Grid3x3" size={18} />
                Каталог
              </Button>
              <Button
                variant={activeTab === 'ratings' ? 'secondary' : 'ghost'}
                onClick={() => setActiveTab('ratings')}
                className="gap-2"
              >
                <Icon name="Star" size={18} />
                Рейтинги
              </Button>
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {activeTab === 'home' && (
          <>
            <section className="py-16 lg:py-24">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
                    Премиальный маркетплейс
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Эксклюзивные товары от проверенных продавцов. Качество, стиль и удобство.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <Button size="lg" className="gap-2" onClick={() => setActiveTab('catalog')}>
                      <Icon name="ShoppingBag" size={20} />
                      Начать покупки
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2">
                      <Icon name="TrendingUp" size={20} />
                      Стать продавцом
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-12 bg-muted/50">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold">Топовые размещения</h3>
                    <p className="text-muted-foreground">Рекомендуемые товары от наших партнёров</p>
                  </div>
                  <Badge variant="secondary" className="gap-1">
                    <Icon name="Sparkles" size={14} />
                    Платное размещение
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockProducts
                    .filter(p => p.topPlacement)
                    .map(product => (
                      <Card key={product.id} className="group overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                        <div className="relative aspect-square overflow-hidden bg-muted">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <Badge className="absolute top-3 right-3 gap-1">
                            <Icon name="TrendingUp" size={12} />
                            Топ
                          </Badge>
                        </div>
                        <div className="p-5 space-y-3">
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">
                              {product.category}
                            </p>
                            <h4 className="font-semibold text-lg mt-1">{product.name}</h4>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                              <span className="text-sm font-medium">{product.rating}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">({product.reviews})</span>
                          </div>
                          <div className="flex items-center justify-between pt-2">
                            <span className="text-2xl font-bold">{product.price.toLocaleString()} ₽</span>
                            <Button size="sm" className="gap-2" onClick={addToCart}>
                              <Icon name="ShoppingCart" size={16} />
                              Купить
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            </section>

            <section className="py-16">
              <div className="container mx-auto px-4 lg:px-8">
                <h3 className="text-2xl font-bold mb-8">Популярные категории</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Электроника', 'Аксессуары', 'Обувь', 'Одежда'].map(cat => (
                    <Card
                      key={cat}
                      className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setActiveTab('catalog');
                      }}
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon name="Package" size={24} className="text-primary" />
                      </div>
                      <p className="font-medium">{cat}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'catalog' && (
          <section className="py-12">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold">Каталог товаров</h2>
                    <p className="text-muted-foreground mt-1">
                      {filteredProducts.length} товаров
                    </p>
                  </div>
                  <div className="w-full md:w-96">
                    <div className="relative">
                      <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Поиск товаров..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2">
                  {categories.map(cat => (
                    <Button
                      key={cat}
                      variant={selectedCategory === cat ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(cat)}
                      className="whitespace-nowrap"
                    >
                      {cat}
                    </Button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-square overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.topPlacement && (
                          <Badge className="absolute top-3 right-3 gap-1">
                            <Icon name="Zap" size={12} />
                            Топ
                          </Badge>
                        )}
                      </div>
                      <div className="p-5 space-y-3">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">
                            {product.category}
                          </p>
                          <h4 className="font-semibold text-lg mt-1">{product.name}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-medium">{product.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">({product.reviews})</span>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-2xl font-bold">{product.price.toLocaleString()} ₽</span>
                          <Button size="sm" className="gap-2" onClick={addToCart}>
                            <Icon name="ShoppingCart" size={16} />
                            Купить
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'ratings' && (
          <section className="py-12">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold">Рейтинг продавцов</h2>
                  <p className="text-muted-foreground mt-2">Лучшие продавцы по отзывам покупателей</p>
                </div>

                <div className="space-y-4">
                  {[
                    { name: 'TechStore Pro', rating: 4.9, sales: 1234, badge: 'Топ продавец' },
                    { name: 'Fashion House', rating: 4.8, sales: 892, badge: 'Надёжный' },
                    { name: 'Electronics Hub', rating: 4.7, sales: 756, badge: 'Проверенный' },
                    { name: 'Style & Co', rating: 4.6, sales: 634, badge: 'Проверенный' },
                  ].map((seller, index) => (
                    <Card key={seller.name} className="p-6">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-lg">{seller.name}</h4>
                            <Badge variant="secondary">{seller.badge}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                              <span className="font-medium text-foreground">{seller.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="ShoppingBag" size={14} />
                              <span>{seller.sales.toLocaleString()} продаж</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" className="gap-2">
                          <Icon name="Store" size={16} />
                          Магазин
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Icon name="Store" size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-lg">Market</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Премиальный маркетплейс для товаров и услуг
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Как купить</li>
                <li>Оплата и доставка</li>
                <li>Гарантии</li>
                <li>Возврат товара</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Продавцам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Как продавать</li>
                <li>Платное размещение</li>
                <li>Топ размещения</li>
                <li>Тарифы</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Помощь</li>
                <li>Контакты</li>
                <li>Условия использования</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2026 Market. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
