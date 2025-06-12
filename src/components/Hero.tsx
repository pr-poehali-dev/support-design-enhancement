import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-blue-700">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-blue-500/20 animate-pulse"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Поехали!
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-purple-100">
            Разработка сайтов через русский язык
          </h2>
          <p className="text-lg md:text-xl mb-12 text-purple-200 max-w-2xl mx-auto leading-relaxed">
            Быстрее конструкторов и кодинга в 30 раз. Без знания
            программирования. Создавайте современные сайты простым описанием на
            русском языке.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-3 text-lg hover-scale"
            >
              <Icon name="Rocket" className="mr-2" />
              Начать создавать
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3 text-lg"
            >
              <Icon name="Play" className="mr-2" />
              Посмотреть демо
            </Button>
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
