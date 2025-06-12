import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/79610574693", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-green-500/20 to-teal-500/20 animate-pulse"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            Доставка
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-green-100">
            Калач-на-Дону
          </h2>
          <p className="text-lg md:text-xl mb-12 text-green-200 max-w-2xl mx-auto leading-relaxed">
            Быстрая и надежная доставка по городу. Работаем с понедельника по
            пятницу с 12:00 до 19:30. Доставим все, что нужно, соблюдая наши
            правила безопасности.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-green-500 text-white hover:bg-green-600 font-semibold px-8 py-3 text-lg hover-scale"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Заказать в WhatsApp
            </Button>
            <a
              href="tel:+79610574693"
              className="inline-flex items-center justify-center rounded-md text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-green-600 h-11 px-8"
            >
              <Icon name="Phone" className="mr-2" />
              +7 961 057 46 93
            </a>
          </div>

          <div className="text-sm text-green-200 opacity-80">
            📞 Звоните или пишите в WhatsApp для оформления заказа
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
