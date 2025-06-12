import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openWhatsApp = () => {
    window.open("https://wa.me/79610574693", "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Формируем mailto ссылку
    const subject = `Техподдержка доставки - ${formData.name}`;
    const body = `Имя: ${formData.name}
Email: ${formData.email}
Телефон: ${formData.phone}

Сообщение:
${formData.message}`;

    const mailtoUrl = `mailto:dostavkasites25@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Открываем почтовый клиент
    window.location.href = mailtoUrl;

    setTimeout(() => {
      toast({
        title: "Письмо подготовлено!",
        description: "Откроется ваш почтовый клиент для отправки сообщения.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
            Связаться с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Остались вопросы? Готовы оформить заказ? Свяжитесь с нами любым
            удобным способом!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 hover-scale">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="MessageCircle" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">WhatsApp</h3>
                    <p className="text-green-100">
                      Быстрый способ оформить заказ
                    </p>
                  </div>
                </div>
                <Button
                  onClick={openWhatsApp}
                  variant="secondary"
                  className="w-full bg-white text-green-600 hover:bg-green-50"
                >
                  <Icon name="ExternalLink" className="mr-2 w-4 h-4" />
                  Открыть WhatsApp
                </Button>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 bg-white shadow-lg border-0 hover-scale">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
                  <a
                    href="tel:+79610574693"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    +7 961 057 46 93
                  </a>
                </CardContent>
              </Card>

              <Card className="p-6 bg-white shadow-lg border-0 hover-scale">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Режим работы
                  </h3>
                  <p className="text-gray-600 text-sm">Пн-Пт: 12:00-19:30</p>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6 bg-orange-50 border-2 border-orange-200">
              <CardContent className="p-0">
                <div className="flex items-start gap-3">
                  <Icon
                    name="MapPin"
                    className="w-6 h-6 text-orange-600 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-2">
                      Зона доставки
                    </h3>
                    <p className="text-orange-700">
                      г. Калач-на-Дону, Волгоградская область
                    </p>
                    <p className="text-sm text-orange-600 mt-2">
                      Доставляем по всему городу в рабочее время
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="font-montserrat text-2xl text-gray-900">
                Техподдержка
              </CardTitle>
              <CardDescription>
                Возникли вопросы или проблемы? Напишите нам, и мы поможем!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com (необязательно)"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Опишите вашу проблему или вопрос подробнее..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 font-semibold py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon
                        name="Loader2"
                        className="mr-2 w-4 h-4 animate-spin"
                      />
                      Подготавливается...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" className="mr-2 w-4 h-4" />
                      Отправить в техподдержку
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-4 text-xs text-gray-500 text-center">
                * Сообщение будет отправлено на dostavkasites25@gmail.com
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
