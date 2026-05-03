export default function MapSection() {
  return (
    <div id="contacts" className="bg-neutral-50 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-rose-500 uppercase tracking-widest text-sm text-center mb-2">Как нас найти</p>
        <h2 className="text-4xl font-bold text-center mb-12 text-neutral-900">Наш магазин</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 rounded-none overflow-hidden" style={{ minHeight: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.373977613434!2d37.61752!3d55.75222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JrRgNCw0YHQvdCw0Y8g0L_Qu9C-0YnQsNC00YwsINCc0L7RgdC60LLQsA!5e0!3m2!1sru!2sru!4v1683000000000!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта магазина VOGUE"
            />
          </div>

          <div className="lg:w-80 flex flex-col justify-center gap-6">
            <div>
              <p className="text-rose-500 uppercase tracking-widest text-xs mb-2">Адрес</p>
              <p className="text-neutral-900 font-semibold text-lg">Красная площадь, 1</p>
              <p className="text-neutral-500">Москва, 109012</p>
            </div>
            <div className="w-full h-px bg-neutral-200" />
            <div>
              <p className="text-rose-500 uppercase tracking-widest text-xs mb-2">Часы работы</p>
              <p className="text-neutral-900 font-semibold">Пн–Пт: 10:00 – 21:00</p>
              <p className="text-neutral-500">Сб–Вс: 11:00 – 20:00</p>
            </div>
            <div className="w-full h-px bg-neutral-200" />
            <div>
              <p className="text-rose-500 uppercase tracking-widest text-xs mb-2">Контакты</p>
              <p className="text-neutral-900 font-semibold">+7 (495) 000-00-00</p>
              <p className="text-neutral-500">info@vogue-store.ru</p>
            </div>
            <div className="w-full h-px bg-neutral-200" />
            <div>
              <p className="text-rose-500 uppercase tracking-widest text-xs mb-2">Как добраться</p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Ст. метро «Охотный ряд», выход № 2. 3 минуты пешком по Манежной площади.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Красная+площадь+1+Москва"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 hover:bg-rose-600 text-white text-center py-3 uppercase tracking-widest text-sm transition-all duration-300"
            >
              Построить маршрут
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
