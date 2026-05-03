const reviews = [
  {
    name: "Анастасия К.",
    avatar: "А",
    rating: 5,
    text: "Заказала тренч-пальто — просто влюбилась! Качество отличное, ткань мягкая. Доставили за 2 дня, всё в идеальной упаковке.",
    date: "12 апреля 2025",
  },
  {
    name: "Михаил Р.",
    avatar: "М",
    rating: 5,
    text: "Брал в подарок девушке оверсайз-худи. Она в восторге! Размерная сетка честная, цвет точь-в-точь как на фото.",
    date: "3 марта 2025",
  },
  {
    name: "Дарья Л.",
    avatar: "Д",
    rating: 5,
    text: "Давно искала идеальные багги-джинсы. Нашла! Посадка идеальная, материал плотный. Уже думаю купить второй цвет.",
    date: "18 февраля 2025",
  },
  {
    name: "Кирилл М.",
    avatar: "К",
    rating: 4,
    text: "Кожаная куртка — огонь. Смотрится дорого и стильно. Единственное — пришлось подождать пару дней дольше обычного.",
    date: "5 января 2025",
  },
  {
    name: "Виктория Н.",
    avatar: "В",
    rating: 5,
    text: "Платье-миди просто шедевр! Много комплиментов получила. Обязательно ещё вернусь за новыми покупками.",
    date: "22 декабря 2024",
  },
  {
    name: "Алёна Т.",
    avatar: "А",
    rating: 5,
    text: "Приятно удивлена соотношением цена/качество. Базовый лонгслив стал любимой вещью в гардеробе.",
    date: "10 декабря 2024",
  },
];

export default function Reviews() {
  return (
    <div id="reviews" className="bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-rose-500 uppercase tracking-widest text-sm text-center mb-2">Отзывы покупателей</p>
        <h2 className="text-4xl font-bold text-center mb-4 text-neutral-900">Что говорят о нас</h2>
        <p className="text-neutral-500 text-center mb-12 max-w-xl mx-auto">
          Более 2 000 довольных покупателей. Вот что они говорят о VOGUE.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name + review.date} className="border border-neutral-100 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{review.name}</p>
                  <p className="text-neutral-400 text-xs">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-rose-400 text-base">★</span>
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <span key={i} className="text-neutral-200 text-base">★</span>
                ))}
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex gap-12 border border-neutral-200 px-12 py-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-neutral-900">4.9</p>
              <p className="text-neutral-500 text-sm mt-1">Средняя оценка</p>
            </div>
            <div className="w-px bg-neutral-200" />
            <div className="text-center">
              <p className="text-4xl font-bold text-neutral-900">2 000+</p>
              <p className="text-neutral-500 text-sm mt-1">Покупателей</p>
            </div>
            <div className="w-px bg-neutral-200" />
            <div className="text-center">
              <p className="text-4xl font-bold text-neutral-900">98%</p>
              <p className="text-neutral-500 text-sm mt-1">Рекомендуют нас</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
