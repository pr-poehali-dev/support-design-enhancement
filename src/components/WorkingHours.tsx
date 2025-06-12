import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const WorkingHours = () => {
  const schedule = [
    { day: "Понедельник", time: "12:00 - 19:30", active: true },
    { day: "Вторник", time: "12:00 - 19:30", active: true },
    { day: "Среда", time: "12:00 - 19:30", active: true },
    { day: "Четверг", time: "12:00 - 19:30", active: true },
    { day: "Пятница", time: "12:00 - 19:30", active: true },
    { day: "Суббота", time: "Выходной", active: false },
    { day: "Воскресенье", time: "Выходной", active: false },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
            Время работы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Работаем с понедельника по пятницу. Зона доставки - весь город
            Калач-на-Дону
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <Card
                key={index}
                className={`p-4 transition-all duration-300 ${
                  item.active
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <CardContent className="p-0">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Icon
                        name={item.active ? "Clock" : "X"}
                        className={`w-5 h-5 ${
                          item.active ? "text-white" : "text-gray-500"
                        }`}
                      />
                      <span className="font-semibold text-lg">{item.day}</span>
                    </div>
                    <span
                      className={`font-medium ${
                        item.active ? "text-green-100" : "text-gray-500"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-green-100 to-emerald-100 border-0">
              <CardContent className="p-0 text-center">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-4">
                  Зона доставки
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Мы доставляем по всему городу Калач-на-Дону. Среднее время
                  доставки составляет 30-60 минут в зависимости от расстояния и
                  загруженности.
                </p>
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-center justify-center gap-2 text-green-700 font-semibold">
                    <Icon name="MapPin" className="w-5 h-5" />
                    <span>г. Калач-на-Дону, Волгоградская область</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 bg-white shadow-lg border-0 hover-scale">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock3" className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Быстро</h4>
                  <p className="text-gray-600 text-sm">30-60 минут доставка</p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-white shadow-lg border-0 hover-scale">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Надежно</h4>
                  <p className="text-gray-600 text-sm">Гарантия сохранности</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;
