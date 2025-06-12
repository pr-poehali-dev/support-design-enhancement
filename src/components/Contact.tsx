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
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
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
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
            Поддержка и контакты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Остались вопросы? Мы всегда готовы помочь! Свяжитесь с нами любым
            удобным способом.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-br from-purple-500 to-violet-600 text-white border-0 hover-scale">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="MessageCircle" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Telegram сообщество
                    </h3>
                    <p className="text-purple-100">
                      Присоединяйтесь к нашему сообществу
                    </p>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  className="w-full bg-white text-purple-600 hover:bg-purple-50"
                  onClick={() =>
                    window.open("https://t.me/+QgiLIa1gFRY4Y2Iy", "_blank")
                  }
                >
                  <Icon name="ExternalLink" className="mr-2 w-4 h-4" />
                  Открыть Telegram
                </Button>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 bg-white shadow-lg border-0 hover-scale">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">support@poehali.dev</p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-white shadow-lg border-0 hover-scale">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Время работы
                  </h3>
                  <p className="text-gray-600">24/7 поддержка</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="shadow-xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="font-montserrat text-2xl text-gray-900">
                Написать нам
              </CardTitle>
              <CardDescription>
                Заполните форму, и мы ответим в течение 24 часов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
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
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Тема</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Тема вашего сообщения"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Опишите ваш вопрос подробнее..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 font-semibold py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon
                        name="Loader2"
                        className="mr-2 w-4 h-4 animate-spin"
                      />
                      Отправляется...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" className="mr-2 w-4 h-4" />
                      Отправить сообщение
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
