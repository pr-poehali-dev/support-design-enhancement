import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/79610574693", "_blank");
  };

  const navigation = [
    { name: "Главная", href: "#hero" },
    { name: "Услуги", href: "#services" },
    { name: "Время работы", href: "#working-hours" },
    { name: "Отзывы", href: "#reviews" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Icon name="Truck" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat">
                Доставка Калач-на-Дону
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Быстрая и надежная доставка по городу. Работаем с понедельника по
              пятницу с 12:00 до 19:30. Доставим все, что нужно!
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="w-5 h-5 text-green-400" />
                <a
                  href="tel:+79610574693"
                  className="text-gray-300 hover:text-white"
                >
                  +7 961 057 46 93
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Пн-Пт: 12:00-19:30</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">г. Калач-на-Дону</span>
              </div>
            </div>

            <Button
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Icon name="MessageCircle" className="mr-2 w-4 h-4" />
              Заказать в WhatsApp
            </Button>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Навигация</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Запрещено к доставке</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-red-400">
                <Icon name="Ban" className="w-4 h-4" />
                <span>Никотин и табак</span>
              </li>
              <li className="flex items-center gap-2 text-red-400">
                <Icon name="ShieldX" className="w-4 h-4" />
                <span>18+ товары</span>
              </li>
              <li className="flex items-center gap-2 text-red-400">
                <Icon name="Wine" className="w-4 h-4" />
                <span>Алкогольные напитки</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <Icon name="Shield" className="w-4 h-4" />
                <span className="font-semibold text-sm">
                  Безопасная доставка
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Соблюдаем все правила безопасности для защиты наших клиентов и
                курьеров
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Доставка Калач-на-Дону. Все права защищены.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Техподдержка:</span>
              <a
                href="mailto:dostavkasites25@gmail.com"
                className="hover:text-white transition-colors"
              >
                dostavkasites25@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
