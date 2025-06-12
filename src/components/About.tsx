import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
            Что такое Поехали!
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Поехали! — это платформа на базе искусственного интеллекта для
            разработки и публикации веб-сайтов прямо в браузере. Мы упростили
            процесс разработки, собрав всё необходимое в едином интерфейсе.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Быстрое создание
                    </h3>
                    <p className="text-purple-100">
                      Создавайте приложения из простого описания на русском
                      языке без знания программирования
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Cloud" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Облачная публикация
                    </h3>
                    <p className="text-blue-100">
                      Быстрая публикация в облаке всего за несколько кликов
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Sparkles" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Простой интерфейс
                    </h3>
                    <p className="text-emerald-100">
                      Понятный интерфейс редактирования и генерация
                      качественного React кода
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center lg:text-left">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 mb-8">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-4">
                Революция в веб-разработке
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Традиционно создание приложений требует знаний программирования
                и установки множества программ. В Поехали! ассистент Юра
                выполняет всю техническую работу, что позволяет создавать сайты
                даже тем, кто никогда не программировал.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
