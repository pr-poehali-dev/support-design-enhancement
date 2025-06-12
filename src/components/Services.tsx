import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Package",
      title: "Доставка товаров",
      description:
        "Доставим покупки из магазинов, аптек и других торговых точек",
      status: "✅",
    },
    {
      icon: "Utensils",
      title: "Доставка еды",
      description: "Быстрая доставка готовых блюд из ресторанов и кафе города",
      status: "✅",
    },
    {
      icon: "FileText",
      title: "Документы",
      description: "Срочная доставка документов и корреспонденции по городу",
      status: "✅",
    },
  ];

  const restrictions = [
    {
      icon: "Ban",
      title: "Никотин и табак",
      description: "Запрещена доставка сигарет, вейпов и табачных изделий",
    },
    {
      icon: "ShieldX",
      title: "18+ товары",
      description: "Не доставляем товары для взрослых и контент 18+",
    },
    {
      icon: "Wine",
      title: "Алкогольные напитки",
      description: "Доставка алкоголя строго запрещена",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Доставляем по всему Калач-на-Дону быстро и надежно
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-scale transition-all duration-300 hover:shadow-xl border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Icon
                    name={service.icon as any}
                    className="w-8 h-8 text-white"
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CardTitle className="text-xl font-montserrat text-gray-900">
                    {service.title}
                  </CardTitle>
                  <span className="text-2xl">{service.status}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-red-50 rounded-3xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-montserrat text-red-800 mb-4">
              ⚠️ Ограничения доставки
            </h3>
            <p className="text-red-700 text-lg">
              Мы не доставляем следующие категории товаров для безопасности всех
              участников
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {restrictions.map((restriction, index) => (
              <Card key={index} className="border-2 border-red-200 bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <Icon
                      name={restriction.icon as any}
                      className="w-6 h-6 text-red-600"
                    />
                  </div>
                  <CardTitle className="text-lg text-red-800">
                    {restriction.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-red-700">
                    {restriction.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
