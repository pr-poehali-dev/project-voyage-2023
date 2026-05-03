interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold uppercase tracking-widest">VOGUE<span className="text-rose-400">.</span></div>
        <nav className="flex gap-8">
          <a href="#catalog" className="text-white hover:text-rose-400 transition-colors duration-300 uppercase text-sm">Каталог</a>
          <a href="#reviews" className="text-white hover:text-rose-400 transition-colors duration-300 uppercase text-sm">Отзывы</a>
          <a href="#contacts" className="text-white hover:text-rose-400 transition-colors duration-300 uppercase text-sm">Контакты</a>
        </nav>
      </div>
    </header>
  );
}
