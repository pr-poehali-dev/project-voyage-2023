const benefits = [
  { icon: "✦", title: "Актуальные тренды", desc: "Обновляем коллекции каждый сезон — всегда в ногу с мировой модой" },
  { icon: "✦", title: "Премиум качество", desc: "Отбираем только лучшие материалы: хлопок, лён, переработанные ткани" },
  { icon: "✦", title: "Быстрая доставка", desc: "Доставим ваш заказ в течение 1–3 дней по всему городу" },
  { icon: "✦", title: "Лёгкий возврат", desc: "Не подошло? Вернём деньги в течение 14 дней без вопросов" },
];

export default function Featured() {
  return (
    <div id="catalog" className="bg-white">
      {/* Блок преимуществ */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-10 lg:mb-0 lg:order-2">
          <img
            src="https://cdn.poehali.dev/projects/a04c8071-56d2-44d0-ac70-937244d1a35f/files/cf7921ae-02b8-42d3-be90-f386a9336ef9.jpg"
            alt="Коллекция одежды"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
          <p className="uppercase mb-4 text-sm tracking-widest text-rose-500">Почему выбирают нас</p>
          <h2 className="text-3xl lg:text-5xl mb-10 text-neutral-900 leading-tight font-bold">
            Мода — это не просто одежда. Это характер.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="border-l-2 border-rose-400 pl-4">
                <div className="text-rose-400 text-lg mb-1">{b.icon}</div>
                <h3 className="font-bold text-neutral-900 mb-1">{b.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="#catalog-items"
            className="mt-10 bg-black text-white border border-black px-8 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-widest"
          >
            Перейти в каталог
          </a>
        </div>
      </div>

      {/* Каталог товаров */}
      <div id="catalog-items" className="px-6 py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-rose-500 uppercase tracking-widest text-sm text-center mb-2">Наш ассортимент</p>
          <h2 className="text-4xl font-bold text-center mb-12 text-neutral-900">Каталог товаров</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {catalog.map((item) => (
              <div key={item.name} className="group cursor-pointer">
                <div className="overflow-hidden bg-neutral-200 aspect-[3/4] mb-3 relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {item.isNew && (
                    <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs px-2 py-1 uppercase tracking-wide">New</span>
                  )}
                </div>
                <h3 className="text-neutral-900 font-medium text-sm">{item.name}</h3>
                <p className="text-neutral-500 text-xs mb-1">{item.category}</p>
                <p className="text-neutral-900 font-bold">{item.price} ₽</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const catalog = [
  {
    name: "Оверсайз-худи",
    category: "Верхняя одежда",
    price: "3 990",
    isNew: true,
    img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&h=533&fit=crop",
  },
  {
    name: "Широкие брюки",
    category: "Низ",
    price: "4 490",
    isNew: false,
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4b4f4f?w=400&h=533&fit=crop",
  },
  {
    name: "Укороченный топ",
    category: "Верх",
    price: "1 990",
    isNew: true,
    img: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=400&h=533&fit=crop",
  },
  {
    name: "Тренч-пальто",
    category: "Верхняя одежда",
    price: "8 990",
    isNew: false,
    img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=533&fit=crop",
  },
  {
    name: "Джинсы Baggy",
    category: "Низ",
    price: "5 490",
    isNew: true,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=533&fit=crop",
  },
  {
    name: "Платье-миди",
    category: "Платья",
    price: "6 990",
    isNew: false,
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=533&fit=crop",
  },
  {
    name: "Базовый лонгслив",
    category: "Верх",
    price: "2 490",
    isNew: false,
    img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=533&fit=crop",
  },
  {
    name: "Кожаная куртка",
    category: "Верхняя одежда",
    price: "12 990",
    isNew: true,
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=533&fit=crop",
  },
];
