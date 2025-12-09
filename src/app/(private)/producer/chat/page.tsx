"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Scissors,
  Send,
  User,
  Clock,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import {
  barbershopInfo,
  services,
  availableTimes,
  availableDates,
} from "@/mock";

const ChatBot = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [conversationState, setConversationState] = useState("initial");
  const [userName, setUserName] = useState("");
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<any>(null);
  const [isTyping, setIsTyping] = useState<any>(false);
  const messagesEndRef = useRef<any>(null);
  const initialized = useRef(false);

  const scrollToBottom = () => {
    if (!messagesEndRef.current) return;

    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Mensagem inicial - executar apenas uma vez
    if (!initialized.current) {
      initialized.current = true;
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          addBotMessage(
            `Olá! Bem-vindo à ${barbershopInfo.name}! 👋\n\nSou o assistente virtual e vou te ajudar a agendar seu horário. Para começar, qual é o seu nome?`
          );
        }, 1000);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  const addBotMessage = (text: string, options: any = null) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        sender: "bot",
        options,
        timestamp: new Date(),
      },
    ]);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        sender: "user",
        timestamp: new Date(),
      },
    ]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);

    if (conversationState === "initial") {
      setUserName(inputValue);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          `Prazer em conhecê-lo, ${inputValue}! 😊\n\nAgora, qual serviço você gostaria de agendar?`,
          { type: "services", data: services }
        );
        setConversationState("selectService");
      }, 1200);
    }

    setInputValue("");
  };

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    addUserMessage(service.name);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addBotMessage(
        `Ótima escolha! ${service.name} - ${service.duration}\n\nEscolha uma data disponível:`,
        { type: "dates", data: availableDates }
      );
      setConversationState("selectDate");
    }, 1200);
  };

  const handleDateSelect = (date: any) => {
    setSelectedDate(date);
    addUserMessage(`${date.weekDay}, ${date.day} de ${date.month}`);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addBotMessage(
        `Perfeito! Agora escolha um horário disponível para ${date.weekDay}, ${date.day} de ${date.month}:`,
        { type: "times", data: availableTimes }
      );
      setConversationState("selectTime");
    }, 1200);
  };

  const handleTimeSelect = (time: any) => {
    setSelectedTime(time);
    addUserMessage(time);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addBotMessage(`
        🎉 Agendamento confirmado!
        \n
        \n📋 Resumo:
        \n• Nome: ${userName}
        \n• Serviço: ${selectedService?.name}
        \n• Data: ${selectedDate?.weekDay}, ${selectedDate?.day} de ${selectedDate?.month}
        \n• Horário: ${time}
        \n• Valor: ${selectedService?.price}
        \n
        \nObrigado por escolher a ${barbershopInfo.name}! Até breve! ✨
      `);
      setConversationState("completed");
    }, 1200);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1759134198561-e2041049419c)",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/85 to-zinc-900/90"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Chat Container */}
      <div className="relative z-10 w-full max-w-5xl">
        <Card className="h-[85vh] flex flex-col shadow-2xl border border-amber-500/20 bg-black/40 backdrop-blur-xl">
          {/* Header */}
          <div className="relative border-b border-amber-500/20 p-6 bg-linear-to-r from-black/60 to-zinc-900/60 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="relative bg-linear-to-br p-4 rounded-full shadow-lg overflow-hidden">
                  <img
                    src=""
                    alt="Logo Douglas Barber"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold bg-linear-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                  {barbershopInfo.name}
                </h1>
                <p className="text-sm text-zinc-300 mt-1">
                  {barbershopInfo.tagline}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <span>Assistente Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar">
            {messages.map((message) => (
              <div key={message.id} className="animate-slide-in">
                {message.sender === "bot" ? (
                  <div className="flex gap-3 items-start">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md"></div>
                      <div className="relative bg-linear-to-br from-amber-500/30 to-amber-600/30 p-2.5 rounded-full border border-amber-500/30">
                        <MessageCircle className="w-5 h-5 text-amber-400" />
                      </div>
                    </div>
                    <div className="flex-1 max-w-[80%]">
                      <div className="bg-linear-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 shadow-xl border border-zinc-700/50">
                        <p className="text-white whitespace-pre-line leading-relaxed">
                          {message.text}
                        </p>
                      </div>

                      {/* Service Options with Images */}
                      {message.options?.type === "services" && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {message.options.data.map((service: any) => (
                            <Button
                              key={service.id}
                              onClick={() => handleServiceSelect(service)}
                              className="group bg-linear-to-br from-zinc-800/80 to-zinc-900/80 hover:from-amber-500/20 hover:to-amber-600/20 border border-zinc-700/50 hover:border-amber-500/50 text-white h-auto p-0 overflow-hidden transition-all duration-500 backdrop-blur-sm"
                              variant="outline"
                            >
                              <div className="flex items-center gap-3 w-full">
                                {/* Service Image */}
                                <div className="relative w-24 h-24 shrink-0">
                                  <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-linear-to-r from-transparent to-zinc-900/60"></div>
                                </div>

                                {/* Service Info */}
                                <div className="flex-1 text-left pr-4 py-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Sparkles className="w-4 h-4 text-amber-400" />
                                    <span className="font-semibold text-base">
                                      {service.name}
                                    </span>
                                  </div>
                                  <div className="text-xs text-zinc-400">
                                    <span>{service.duration}</span>
                                    <span className="mx-1.5">•</span>
                                    <span className="text-amber-400 font-semibold">
                                      {service.price}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Button>
                          ))}
                        </div>
                      )}

                      {/* Date Options - Calendar Style */}
                      {message.options?.type === "dates" && (
                        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                          {message.options.data.map(
                            (date: any, index: number) => (
                              <Button
                                key={index}
                                onClick={() => handleDateSelect(date)}
                                className="group bg-linear-to-br from-zinc-800/80 to-zinc-900/80 hover:from-amber-500/20 hover:to-amber-600/20 border border-zinc-700/50 hover:border-amber-500/50 text-white transition-all duration-500 backdrop-blur-sm h-auto p-3"
                                variant="outline"
                              >
                                <div className="flex flex-col items-center gap-1.5">
                                  <span className="text-[10px] uppercase font-semibold text-zinc-400 group-hover:text-amber-400 transition-colors">
                                    {date.weekDay}
                                  </span>
                                  <span className="text-2xl font-bold text-amber-400">
                                    {date.day}
                                  </span>
                                  <span className="text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors">
                                    {date.month}
                                  </span>
                                </div>
                              </Button>
                            )
                          )}
                        </div>
                      )}

                      {/* Time Options */}
                      {message.options?.type === "times" && (
                        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-2">
                          {message.options.data.map(
                            (time: any, index: number) => (
                              <Button
                                key={index}
                                onClick={() => handleTimeSelect(time)}
                                className="bg-linear-to-br from-zinc-800/80 to-zinc-900/80 hover:from-amber-500/20 hover:to-amber-600/20 border border-zinc-700/50 hover:border-amber-500/50 text-white transition-all duration-500 backdrop-blur-sm"
                                variant="outline"
                                size="sm"
                              >
                                <Clock className="w-3 h-3 mr-1.5 text-amber-400" />
                                {time}
                              </Button>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-3 items-start justify-end">
                    <div className="bg-linear-to-br from-amber-500 to-amber-600 rounded-2xl rounded-tr-none p-4 shadow-xl max-w-[70%] border border-amber-400/30">
                      <p className="text-black font-medium">{message.text}</p>
                    </div>
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-amber-500/30 rounded-full blur-md"></div>
                      <div className="relative bg-linear-to-br from-amber-500 to-amber-600 p-2.5 rounded-full border border-amber-400/50">
                        <User className="w-5 h-5 text-black" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 items-start animate-slide-in">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md"></div>
                  <div className="relative bg-linear-to-br from-amber-500/30 to-amber-600/30 p-2.5 rounded-full border border-amber-500/30">
                    <MessageCircle className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <div className="bg-linear-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 shadow-xl border border-zinc-700/50">
                  <div className="flex gap-1.5">
                    <div
                      className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          {conversationState !== "completed" &&
            conversationState !== "selectService" &&
            conversationState !== "selectDate" &&
            conversationState !== "selectTime" && (
              <div className="border-t border-amber-500/20 p-4 bg-black/40 backdrop-blur-sm">
                <div className="flex gap-3">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 bg-zinc-900/60 border-zinc-700/50 text-white placeholder:text-zinc-500 focus:border-amber-500/50 transition-all duration-300 backdrop-blur-sm h-12 px-4 text-base"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-500/50 h-12 px-6"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}
        </Card>
      </div>
    </div>
  );
};

export default ChatBot;
