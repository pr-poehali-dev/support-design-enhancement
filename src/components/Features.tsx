import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Code",
      title: "Создание сайтов",
      description:
        "Позволяет создавать UX/UI, компоненты и страницы через простое описание на русском языке",
      status: "✅",
    },
    {
      icon: "Bug",
      title: "Исправление ошибок",
      description:
        "Юра анализирует код и чинит баги автоматически для идеальной работы сайта",
      status: "✅",
    },
    {
      icon: "Github",
      title: "Интеграция с GitHub",
      description:
        "Синхронизация проекта с вашим репозиторием для управления версиями",
      status: "✅",
    },
    {
      icon: "Globe",
      title: "Публикация в интернет",
      description:
        "Ваш проект становится доступным по URL-ссылке за несколько кликов",
      status: "✅",
    },
    {
      icon: "Edit",
      title: "Встроенный редактор",
      description:
        "Позволяет редактировать веб-элементы вручную с удобным интерфейсом",
      status: "✅",
    },
    {
      icon: "Database",
      title: "База данных",
      description:
        "Подключение и работа с базами данных для динамических сайтов",
      status: "🚧",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
            Возможности сервиса
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Все инструменты для создания современных сайтов собраны в одном
            месте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover-scale transition-all duration-300 hover:shadow-xl border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                  <Icon
                    name={feature.icon as any}
                    className="w-8 h-8 text-white"
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CardTitle className="text-xl font-montserrat text-gray-900">
                    {feature.title}
                  </CardTitle>
                  <span className="text-2xl">{feature.status}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
