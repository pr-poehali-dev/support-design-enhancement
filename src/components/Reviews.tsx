import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Отличная служба доставки! Заказала продукты из магазина, доставили точно в срок. Курьер был вежливый и аккуратный. Обязательно буду заказывать еще!",
      date: "2 дня назад",
    },
    {
      name: "Михаил Сидоров",
      rating: 5,
      text: "Очень быстро доставили документы в другой конец города. Работают четко по расписанию, никаких задержек. Цены адекватные, рекомендую!",
      date: "1 неделю назад",
    },
    {
      name: "Елена Кузнецова",
      rating: 5,
      text: "Заказывала доставку обеда на работу. Все пришло горячее и в целости. Курьер даже позвонил заранее, чтобы уточнить время. Отличный сервис!",
      date: "3 дня назад",
    },
    {
      name: "Алексей Морозов",
      rating: 5,
      text: "Пользуюсь услугами уже несколько месяцев. Всегда вовремя, аккуратно, без потерь. Особенно нравится возможность заказать через WhatsApp - очень удобно.",
      date: "1 неделю назад",
    },
    {
      name: "Татьяна Николаева",
      rating: 5,
      text: "Срочно нужно было доставить подарок. Ребята справились на отлично! Быстро, качественно, по хорошей цене. Буду рекомендовать знакомым.",
      date: "5 дней назад",
    },
    {
      name: "Дмитрий Волков",
      rating: 5,
      text: "Доставка работает как часы! Заказываю регулярно продукты из разных магазинов. Курьеры всегда приятные в общении и профессиональные.",
      date: "4 дня назад",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Нам доверяют жители Калач-на-Дону. Читайте честные отзывы наших
            клиентов
          </p>

          <div className="flex items-center justify-center gap-4 mt-8 p-6 bg-white rounded-2xl shadow-lg max-w-md mx-auto">
            <div className="text-3xl font-bold text-green-600">4.9</div>
            <div>
              <div className="flex gap-1 mb-1">{renderStars(5)}</div>
              <div className="text-sm text-gray-600">
                на основе 150+ отзывов
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="hover-scale transition-all duration-300 hover:shadow-xl border-0 shadow-lg bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <div className="flex gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Icon name="Calendar" className="w-4 h-4" />
                  <span>{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white max-w-2xl mx-auto">
            <CardContent className="p-0">
              <Icon name="MessageSquare" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Поделитесь своим опытом!
              </h3>
              <p className="text-green-100 mb-6">
                Ваше мнение важно для нас. Оставьте отзыв о нашей работе и
                помогите другим клиентам сделать правильный выбор.
              </p>
              <div className="text-sm text-green-200">
                📱 Напишите нам в WhatsApp или позвоните
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
