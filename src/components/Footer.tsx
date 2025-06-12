import Icon from "@/components/ui/icon";

const Footer = () => {
  const navigation = [
    { name: "Главная", href: "#hero" },
    { name: "Возможности", href: "#features" },
    { name: "О проекте", href: "#about" },
    { name: "Поддержка", href: "#contact" },
  ];

  const resources = [
    { name: "Документация", href: "https://docs.poehali.dev" },
    { name: "GitHub", href: "#" },
    { name: "Публикация", href: "https://docs.poehali.dev/deploy/publish" },
    { name: "SEO настройки", href: "https://docs.poehali.dev/deploy/seo" },
  ];

  const social = [
    {
      name: "Telegram",
      icon: "MessageCircle",
      href: "https://t.me/+QgiLIa1gFRY4Y2Iy",
    },
    { name: "GitHub", icon: "Github", href: "#" },
    { name: "Twitter", icon: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                <Icon name="Rocket" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat">Поехали!</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Платформа для создания современных веб-сайтов через простое
              описание на русском языке. Быстрее конструкторов в 30 раз.
            </p>
            <div className="flex gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={item.icon as any} className="w-5 h-5" />
                </a>
              ))}
            </div>
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
            <h4 className="font-semibold mb-6">Ресурсы</h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Поехали! Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
