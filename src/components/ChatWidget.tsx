import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  text: string;
  from: "user" | "support";
  time: string;
}

const getTime = () =>
  new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Привет! 👋 Я помогу вам с выбором одежды или оформлением заказа. Напишите ваш вопрос!",
      from: "support",
      time: getTime(),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), text: input, from: "user", time: getTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        text: "Спасибо за сообщение! Мы ответим вам в ближайшее время. Время работы: Пн–Пт 10:00–21:00.",
        from: "support",
        time: getTime(),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white shadow-2xl flex flex-col" style={{ height: "420px" }}>
          <div className="bg-neutral-900 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white text-xs font-bold">V</div>
              <div>
                <p className="text-white text-sm font-semibold">VOGUE. Поддержка</p>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <p className="text-neutral-400 text-xs">Онлайн</p>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
              <Icon name="X" size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-neutral-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.from === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`max-w-[75%] px-3 py-2 text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-rose-500 text-white"
                      : "bg-white text-neutral-800 border border-neutral-200"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-neutral-400 text-xs mt-1">{msg.time}</span>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-neutral-200 px-3 py-3 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Напишите сообщение..."
              className="flex-1 text-sm outline-none px-3 py-2 border border-neutral-200 focus:border-rose-400 transition-colors"
            />
            <button
              onClick={send}
              className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-2 transition-colors"
            >
              <Icon name="Send" size={16} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-rose-500 hover:bg-rose-600 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        <Icon name={open ? "X" : "MessageCircle"} size={24} />
      </button>
    </>
  );
}
