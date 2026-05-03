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
              <div key={item.name} className="group">
                <div className="overflow-hidden bg-neutral-200 aspect-[3/4] mb-3 relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {item.isNew && (
                    <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs px-2 py-1 uppercase tracking-wide">New</span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-black text-white text-xs uppercase tracking-widest py-3 hover:bg-rose-500 transition-colors duration-300">
                      Купить
                    </button>
                  </div>
                </div>
                <h3 className="text-neutral-900 font-medium text-sm">{item.name}</h3>
                <p className="text-neutral-500 text-xs mb-1">{item.category}</p>
                <div className="flex items-center justify-between">
                  <p className="text-neutral-900 font-bold">{item.price} ₽</p>
                  <button className="text-xs text-rose-500 hover:text-rose-700 underline underline-offset-2 transition-colors duration-200 md:hidden">
                    Купить
                  </button>
                </div>
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
    img: "https://cdn.poehali.dev/projects/a04c8071-56d2-44d0-ac70-937244d1a35f/files/6deb307c-bff7-4438-afc7-9dde59e7ca90.jpg",
  },
  {
    name: "Широкие брюки",
    category: "Низ",
    price: "4 490",
    isNew: false,
    img: "https://cdn.poehali.dev/projects/a04c8071-56d2-44d0-ac70-937244d1a35f/files/f56b0d88-ef31-4714-8833-2b0ffb8ddbde.jpg",
  },
  {
    name: "Укороченный топ",
    category: "Верх",
    price: "1 990",
    isNew: true,
    img: "https://cdn.poehali.dev/projects/a04c8071-56d2-44d0-ac70-937244d1a35f/files/5a0ab4d8-3b74-4dfc-b937-80f2069fd4fe.jpg",
  },
  {
    name: "Тренч-пальто",
    category: "Верхняя одежда",
    price: "8 990",
    isNew: false,
    img: "https://cdn.poehali.dev/projects/a04c8071-56d2-44d0-ac70-937244d1a35f/files/26b7808e-ed1d-4b09-aec3-3796cdc459a8.jpg",
  },
  {
    name: "Джинсы Baggy",
    category: "Низ",
    price: "5 490",
    isNew: true,
    img: "https://cdn.poehali.dev/projects/a04c8071-56d2-44d0-ac70-937244d1a35f/files/0ce35465-476a-4d5b-910b-37028c934db8.jpg",
  },
  {
    name: "Платье-миди",
    category: "Платья",
    price: "6 990",
    isNew: false,
    img: "https://cdn.poehali.dev/projects/a04c8071-56d2-44d0-ac70-937244d1a35f/files/86e81b07-51b1-4ad4-ab4d-64c0e63b26db.jpg",
  },
  {
    name: "Базовый лонгслив",
    category: "Верх",
    price: "2 490",
    isNew: false,
    img: "https://cdn.poehali.dev/projects/a04c8071-56d2-44d0-ac70-937244d1a35f/files/1e3dce6c-ea15-411a-a6ef-10c67072bf56.jpg",
  },
  {
    name: "Кожаная куртка",
    category: "Верхняя одежда",
    price: "12 990",
    isNew: true,
    img: "https://cdn.poehali.dev/projects/a04c8071-56d2-44d0-ac70-937244d1a35f/files/780964b0-fb29-48fa-b42d-cec194a209d1.jpg",
  },
];